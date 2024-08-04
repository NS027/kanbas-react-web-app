import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateAssignment } from './assignmentsReducer';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
// import assignments from "../../Database/assignments.json";
import * as client from './client';

const options = [
  { value: 'everyone', label: 'Everyone' },
  { value: 'student1', label: 'Student 1' },
  { value: 'student2', label: 'Student 2' },
];

interface Assignment {
  _id: string;
  title: string;
  course: string;
  shortname: string;
  available: string;
  due: string;
  pts: number;
  description?: string;
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleString('default', { month: 'long', day: 'numeric' });
};

const formatTime = (timeString: string): string => {
  const [hours, minutes] = timeString.split(':');
  const date = new Date();
  date.setHours(parseInt(hours), parseInt(minutes));
  return date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }).toLowerCase();
};

const parseDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toISOString().split('T')[0];
};

const parseTime = (timeString: string): string => {
  if (!timeString) return "00:00"; 

  const [time, period] = timeString.split(' ');
  if (!time || !period) return "00:00"; 

  let [hours, minutes] = time.split(':');
  if (!hours || !minutes) return "00:00"; 

  if (period.toLowerCase() === 'pm' && hours !== '12') {
    hours = String(parseInt(hours) + 12);
  } else if (period.toLowerCase() === 'am' && hours === '12') {
    hours = '00';
  }
  return `${hours.padStart(2, '0')}:${minutes}`;
};

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string, aid: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reduxAssignments = useSelector((state: any) => state.assignmentsReducer.assignments as Assignment[]);

  const [localAssignment, setLocalAssignment] = useState<Assignment | null>(null);
  const [availableDate, setAvailableDate] = useState("");
  const [availableTime, setAvailableTime] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [dueTime, setDueTime] = useState("");

  useEffect(() => {
    const fetchAssignment = async () => {
      let assignment = reduxAssignments.find(a => a._id === aid);
      if (!assignment) {
        const fetchedAssignments = await client.findAssignmentsForCourse(cid as string);
        assignment = fetchedAssignments.find((a: Assignment) => a._id === aid);
      }
      if (assignment) {
        setLocalAssignment(assignment);
        
        const availableMatch = assignment.available.match(/Not available until (.*) at (.*)/);
        if (availableMatch && availableMatch[1] && availableMatch[2]) {
          setAvailableDate(parseDate(availableMatch[1]));
          setAvailableTime(parseTime(availableMatch[2]));
        } else {
          setAvailableDate("");
          setAvailableTime("");
        }
    
        const dueMatch = assignment.due.match(/Due (.*) at (.*)/);
        if (dueMatch && dueMatch[1] && dueMatch[2]) {
          setDueDate(parseDate(dueMatch[1]));
          setDueTime(parseTime(dueMatch[2]));
        } else {
          setDueDate("");
          setDueTime("");
        }
      }
    };
    fetchAssignment();
  }, [aid, cid, reduxAssignments]);


  if (!localAssignment) {
    return <div>Assignment not found ID: {aid}</div>;
  }

  const handleInputChange = (field: keyof Assignment, value: any) => {
    setLocalAssignment(prev => prev ? { ...prev, [field]: value } : null);
  };

  const updateAvailable = (date: string, time: string) => {
    const formattedDate = formatDate(date);
    const formattedTime = formatTime(time);
    const newAvailable = `Not available until ${formattedDate} at ${formattedTime}`;
    handleInputChange('available', newAvailable);
  };

  const updateDue = (date: string, time: string) => {
    const formattedDate = formatDate(date);
    const formattedTime = formatTime(time);
    const newDue = `Due ${formattedDate} at ${formattedTime}`;
    handleInputChange('due', newDue);
  };

  const handleSave = async () => {
    if (localAssignment) {
      const updatedAssignment = await client.updateAssignment(localAssignment);
      dispatch(updateAssignment(updatedAssignment));
      navigate(`/Kanbas/Courses/${cid}/Assignments`);
    }
  };

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">Assignment Name</label>
        <input 
          id={`wd-name-${localAssignment._id}`} 
          value={localAssignment.title} 
          className="form-control"
          onChange={(e) => handleInputChange('title', e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="wd-description" className="form-label">Description</label>
        <textarea 
          id="wd-description" 
          className="form-control" 
          rows={5} 
          value={localAssignment.description || ""}
          onChange={(e) => handleInputChange('description', e.target.value)}
        />
      </div>

      <div className="mb-3 row">
        <label htmlFor="wd-points" className="col-sm-2 col-form-label">Points</label>
        <div className="col-sm-10">
          <input 
            id="wd-points" 
            value={localAssignment.pts} 
            className="form-control"
            onChange={(e) => handleInputChange('pts', parseInt(e.target.value))}
          />
        </div>
      </div>
      
      <div className="mb-3 row">
        <label htmlFor="wd-group" className="col-sm-2 col-form-label">Assignment Group</label>
        <div className="col-sm-10">
          <select id="wd-group" className="form-select">
            <option value="assignments">ASSIGNMENTS</option>
          </select>
        </div>
      </div>
      
      <div className="mb-3 row">
        <label htmlFor="wd-display-grade-as" className="col-sm-2 col-form-label">Display Grade as</label>
        <div className="col-sm-10">
          <select id="wd-display-grade-as" className="form-select">
            <option value="percentage">Percentage</option>
          </select>
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="wd-submission-type" className="col-sm-2 col-form-label">Submission Type</label>
        <div className="col-sm-10">
          <div className="card">
            <div className="card-body">
              <select id="wd-submission-type" className="form-select mb-2">
                <option value="online">Online</option>
              </select>
              <div className="form-check">
                <input type="checkbox" id="wd-text-entry" className="form-check-input" />
                <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="wd-website-url" className="form-check-input" defaultChecked />
                <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="wd-media-recordings" className="form-check-input" />
                <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="wd-student-annotation" className="form-check-input" />
                <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="wd-file-upload" className="form-check-input" />
                <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="wd-assign-to" className="col-sm-2 col-form-label">Assign</label>
        <div className="col-sm-10">
          <div className="card">
            <div className="card-body">
              <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
              <Select
                id="wd-assign-to"
                options={options}
                defaultValue={[options[0]]}
                isMulti
                className="mb-3"
              />

              <label htmlFor="wd-available" className="form-label">Available</label>
              <div className="input-group mb-3">
                <span className="input-group-text">Not available until</span>
                <input 
                  type="date" 
                  value={availableDate}
                  onChange={(e) => {
                    setAvailableDate(e.target.value);
                    updateAvailable(e.target.value, availableTime);
                  }}
                  className="form-control"
                />
                <span className="input-group-text">at</span>
                <input 
                  type="time" 
                  value={availableTime}
                  onChange={(e) => {
                    setAvailableTime(e.target.value);
                    updateAvailable(availableDate, e.target.value);
                  }}
                  className="form-control"
                />
              </div>

              <label htmlFor="wd-due" className="form-label">Due</label>
              <div className="input-group mb-3">
                <span className="input-group-text">Due</span>
                <input 
                  type="date" 
                  value={dueDate}
                  onChange={(e) => {
                    setDueDate(e.target.value);
                    updateDue(e.target.value, dueTime);
                  }}
                  className="form-control"
                />
                <span className="input-group-text">at</span>
                <input 
                  type="time" 
                  value={dueTime}
                  onChange={(e) => {
                    setDueTime(e.target.value);
                    updateDue(dueDate, e.target.value);
                  }}
                  className="form-control"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="text-end">
        <button className="btn btn-secondary me-2" onClick={handleCancel}>Cancel</button>
        <button className="btn btn-primary" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}