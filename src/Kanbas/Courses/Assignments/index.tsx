// index.tsx
import React, { useState } from 'react';
import AssignmentControls from './AssignmentControls';
import AssignmentControlButtons from './AssignmentControlButtons';
import { BsGripVertical } from 'react-icons/bs';
import { IoEllipsisVertical } from 'react-icons/io5';
import { FaPencil, FaPlus, FaTrash } from 'react-icons/fa6';
import "./StyledBox.css";
import { AiOutlineFileText } from 'react-icons/ai';
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Assignments() {
    const { cid } = useParams();

    const [assignments, setAssignments] = useState<any[]>(db.assignments);

    // Extract course sequence from course ID
    const courseSequence = cid ? cid.match(/\d+/)?.[0].slice(0, 2) : '';

    const getNextAssignmentNumber = () => {
        // Determine the next assignment number for the course
        const assignmentCount = assignments.filter(a => a.course === cid).length;
        return assignmentCount + 1;
    };

    const getNextAssignmentId = (assignmentNumber: number) => {
        // Combine course sequence and assignment number for the ID
        return `A${courseSequence}${assignmentNumber}`;
    };

    const nextAssignmentNumber = getNextAssignmentNumber();
    
    const addNewAssignment = () => {

      const newAssignment = {
          _id: getNextAssignmentId(nextAssignmentNumber),
          title: "New Assignment",
          course: cid,
          shortname: `A${nextAssignmentNumber}`,
          available: "Not available until May 1 at 12:00am",
          due: "Due on May 15 at 11:59pm",
          pts: 100,
          editing: false
      };
      setAssignments([...assignments, newAssignment]);
  };

  const [assignmentName, setAssignmentName] = useState('');
  const addAssignment = () => {
    setAssignments([...assignments, { 
        _id: getNextAssignmentId(nextAssignmentNumber),
        title: "New Assignment",
        course: cid,
        shortname: `A${nextAssignmentNumber}`,
        available: "Not available until May 1 at 12:00am",
        due: "Due on May 15 at 11:59pm",
        pts: 100,
        editing: false
    }]);
    setAssignmentName('');
  };

    const deleteAssignment = (id: string) => {
      setAssignments(assignments.filter(assignment => assignment._id !== id));
    };

    const editAssignment = (id: string) => {
      setAssignments(assignments.map(assignment => 
          assignment._id === id ? { ...assignment, editing: true } : assignment
      ));
    };

    const updateAssignment = (id: string, updatedData: Partial<any>) => {
      setAssignments(assignments.map(assignment => 
          assignment._id === id ? { ...assignment, ...updatedData, editing: false } : assignment
      ));
    };

    const handleInputChange = (id: string, field: string, value: string) => {
      setAssignments(assignments.map(assignment => 
          assignment._id === id ? { ...assignment, [field]: value } : assignment
      ));
    };

    return (
      <div id="wd-assignments">
        <AssignmentControls  assignmentName={assignmentName} setAssignmentName={setAssignmentName} addAssignment={addAssignment}/><br /><br /><br /><br />
        <ul id="wd-modules" className="list-group rounded-0">
            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            {/* This is the title of the assignment */}
            <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <span>ASSIGNMENT</span>
              </div>
              <div className="d-flex align-items-center">
                <div className="styled-box me-2">
                  40% of Total
                </div>
                <FaPlus 
                className="me-2"
                style={{ cursor: 'pointer' }} onClick={addNewAssignment} 
                />
                <IoEllipsisVertical className="fs-4" />
              </div>
            </div>

            <ul className="wd-assignments list-group rounded-0">
              {/* {courseAssignments.map((assignment) => ( */}
              {assignments
                .filter((assignment) => assignment.course === cid)
                .map((assignment: any) => (
                <li key={assignment._id} className="wd-assignment list-group-item p-3 ps-1 d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <AiOutlineFileText className="me-2 fs-3" style={{ color: 'green' }} />
                  <div className="flex-grow-1">
                  {assignment.editing ? (
                      <div>
                          <input 
                              className="form-control mb-1"
                              value={assignment.shortname}
                              onChange={(e) => handleInputChange(assignment._id, 'shortname', e.target.value)}
                          />
                          <input 
                              className="form-control mb-1"
                              value={assignment.available}
                              onChange={(e) => handleInputChange(assignment._id, 'available', e.target.value)}
                          />
                          <input 
                              className="form-control mb-1"
                              value={assignment.due}
                              onChange={(e) => handleInputChange(assignment._id, 'due', e.target.value)}
                          />
                          <button
                            className="btn btn-sm btn-primary"
                            onClick={() => updateAssignment(assignment._id, { editing: false })}
                          >
                            Save
                          </button>
                      </div>
                  ) : (
                    <div>
                      <div className="fw-bold">
                        <a className="wd-assignment-link"
                          href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                          {assignment.shortname}
                        </a>
                      </div>
                      <div className="text-muted">
                        {/* All discription based on the modifiable json data */}
                        <span className="text-danger">Multiple Modules</span> | <span className="text-muted">{assignment.available}</span> | {assignment.due} | {assignment.pts} pts
                      </div>
                    </div>
                    )}
                  </div>
                  <FaPencil onClick={() => editAssignment(assignment._id)} className="text-primary me-3" />
                  <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteAssignment(assignment._id)}/>
                  <AssignmentControlButtons />
                </li>
              ))}
            </ul>
            </li>
        </ul>
      </div>
    );
}

