import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateAssignment } from './assignmentsReducer';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import assignments from "../../Database/assignments.json";

const options = [
  { value: 'everyone', label: 'Everyone' },
  { value: 'student1', label: 'Student 1' },
  { value: 'student2', label: 'Student 2' },
  // Add more options as needed
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

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string, aid: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reduxAssignments = useSelector((state: any) => state.assignmentsReducer.assignments as Assignment[]);

  const [localAssignment, setLocalAssignment] = useState<Assignment | null>(null);

  useEffect(() => {
    // First, try to find the assignment in Redux state
    let assignment = reduxAssignments.find(a => a._id === aid);

    // If not found in Redux state, fall back to the JSON data
    if (!assignment) {
      assignment = assignments.find(a => a._id === aid) as Assignment;
    }

    if (assignment) {
      setLocalAssignment(assignment);
    }
  }, [aid, reduxAssignments]);

  if (!localAssignment) {
    return <div>Assignment not found ID: {aid}</div>;
  }

  const handleInputChange = (field: keyof Assignment, value: any) => {
    setLocalAssignment(prev => prev ? { ...prev, [field]: value } : null);
  };

  const handleSave = () => {
    if (localAssignment) {
      dispatch(updateAssignment(localAssignment));
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

              <label htmlFor="wd-due-date" className="form-label">Due</label>
              <input 
                type="datetime-local" 
                id="wd-due-date" 
                value={localAssignment.due || "2024-05-13T23:59"} 
                className="form-control mb-3"
                onChange={(e) => handleInputChange('due', e.target.value)}
              />
              
              <div className="row">
                <div className="col-sm-6">
                  <label htmlFor="wd-available-from" className="form-label">Available from</label>
                  <input 
                    type="datetime-local" 
                    id="wd-available-from" 
                    value={localAssignment.available || "2024-05-06T00:00"} 
                    className="form-control"
                    onChange={(e) => handleInputChange('available', e.target.value)}
                  />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="wd-available-until" className="form-label">Until</label>
                  <input type="datetime-local" id="wd-available-until" defaultValue="2024-05-28T23:59" className="form-control" />
                </div>
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