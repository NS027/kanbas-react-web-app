import React from 'react';
import AssignmentControls from './AssignmentControls';
import AssignmentControlButtons from './AssignmentControlButtons';
import { BsGripVertical } from 'react-icons/bs';
import { IoEllipsisVertical } from 'react-icons/io5';
import { FaPlus } from 'react-icons/fa6';
import "./StyledBox.css";
import { AiOutlineFileText } from 'react-icons/ai';
import { useParams } from "react-router";
import assignments from '../../Database/assignments.json';

export default function Assignments() {
    const { cid } = useParams();

    // Filter assignments based on the current course ID (cid)
    const courseAssignments = assignments.filter(assignment => assignment.course === cid);

    return (
      <div id="wd-assignments">
        <AssignmentControls /><br /><br /><br /><br />
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
                <FaPlus className="me-2" />
                <IoEllipsisVertical className="fs-4" />
              </div>
            </div>

            <ul className="wd-assignments list-group rounded-0">
              {courseAssignments.map((assignment) => (
                <li key={assignment._id} className="wd-assignment list-group-item p-3 ps-1 d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <AiOutlineFileText className="me-2 fs-3" style={{ color: 'green' }} />
                  <div className="flex-grow-1">
                    <div className="fw-bold">
                      <a className="wd-assignment-link"
                        href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                        {assignment.shortname}
                      </a>
                    </div>
                    <div className="text-muted">
                      {/* All discription based on the modifiable json data */}
                      <span className="text-danger">Multiple Modules</span> | <span className="text-muted">{assignment.avaliable}</span> | {assignment.due} | {assignment.pts} pts
                    </div>
                  </div>
                  <AssignmentControlButtons />
                </li>
              ))}
            </ul>
            </li>
        </ul>
      </div>
    );
}