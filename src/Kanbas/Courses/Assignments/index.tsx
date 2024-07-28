import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import AssignmentControls from './AssignmentControls';
import AssignmentControlButtons from './AssignmentControlButtons';
import { BsGripVertical } from 'react-icons/bs';
import { IoEllipsisVertical } from 'react-icons/io5';
import { FaPencil, FaPlus, FaTrash } from 'react-icons/fa6';
import "./StyledBox.css";
import { AiOutlineFileText } from 'react-icons/ai';
import { useParams } from "react-router";
import { addAssignment, deleteAssignment, updateAssignment, setAssignment } from './assignmentsReducer';

// Define the Assignment interface
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

// Define the RootState interface
interface RootState {
  assignmentsReducer: {
    assignments: Assignment[];
  }
}

export default function Assignments() {
    const { cid } = useParams<{ cid: string }>();
    const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
    const assignments = useSelector((state: RootState) => state.assignmentsReducer.assignments);

    const [assignmentName, setAssignmentName] = useState('');
    const [assignmentDescription, setAssignmentDescription] = useState('New Assignment Description');

    const courseSequence = cid ? cid.match(/\d+/)?.[0].slice(0, 2) : '';

    const getNextAssignmentNumber = () => {
        const assignmentCount = assignments.filter((a: Assignment) => a.course === cid).length;
        return assignmentCount + 1;
    };

    const getNextAssignmentId = (assignmentNumber: number) => {
        return `A${courseSequence}${assignmentNumber}`;
    };

    const nextAssignmentNumber = getNextAssignmentNumber();
    
    const addNewAssignment = () => {
      const newAssignment: Assignment = {
          _id: getNextAssignmentId(nextAssignmentNumber),
          title: assignmentName || "New Assignment",
          description: assignmentDescription,
          course: cid || '',
          shortname: `A${nextAssignmentNumber}`,
          available: "Not available until May 1 at 12:00am",
          due: "Due on May 15 at 11:59pm",
          pts: 100,
      };
      dispatch(addAssignment(newAssignment));
      setAssignmentName('');
      setAssignmentDescription('New Assignment Description');
    };

    const deleteAssignmentById = (id: string) => {
      dispatch(deleteAssignment(id));
    };

    const editAssignment = (id: string) => {
      const assignment = assignments.find((a: Assignment) => a._id === id);
      if (assignment) {
        dispatch(setAssignment(assignment));
      }
    };

    return (
      <div id="wd-assignments">
        <AssignmentControls 
          assignmentName={assignmentName} 
          setAssignmentName={setAssignmentName} 
          assignmentDescription={assignmentDescription}
          setAssignmentDescription={setAssignmentDescription}
          addAssignment={addNewAssignment}
        />
        <br /><br /><br /><br />
        <ul id="wd-modules" className="list-group rounded-0">
            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
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
              {assignments
                .filter((assignment: Assignment) => assignment.course === cid)
                .map((assignment: Assignment) => (
                <li key={assignment._id} className="wd-assignment list-group-item p-3 ps-1 d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <AiOutlineFileText className="me-2 fs-3" style={{ color: 'green' }} />
                  <div className="flex-grow-1">
                    <div>
                      <div className="fw-bold">
                        <a className="wd-assignment-link"
                          href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                          {assignment.shortname}
                          {assignment.title}
                        </a>
                      </div>
                      <div className="text-muted">
                        <span className="text-danger">Multiple Modules</span> | <span className="text-muted">{assignment.available}</span> | {assignment.due} | {assignment.pts} pts
                      </div>
                    </div>
                  </div>
                  <FaPencil onClick={() => editAssignment(assignment._id)} className="text-primary me-3" />
                  <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteAssignmentById(assignment._id)}/>
                  <AssignmentControlButtons />
                </li>
              ))}
            </ul>
            </li>
        </ul>
      </div>
    );
}

