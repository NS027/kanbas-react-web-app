import React from 'react';
import AssignmentControls from './AssignmentControls';
import LessonControlButtons from './AssignmentControlButtons';
import { BsGripVertical } from 'react-icons/bs';
import { IoEllipsisVertical } from 'react-icons/io5';
import { FaPlus } from 'react-icons/fa6';
import "./StyledBox.css";
export default function Assignments() {
    return (
      <div id="wd-assignments">
        {/* <input 
          id="wd-search-assignment"
          placeholder="Search for Assignments"
        />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button> */}
        <AssignmentControls /><br /><br /><br /><br />
        {/* <ul id="wd-assignment-list">
          <li className="wd-assignment-list-item">
            <a 
              className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123"
            >
              A1 - ENV + HTML
            </a>
            <div>
              Multiple Modules | <strong>Not available until</strong> May 6 at 12:00am | <strong>Due</strong> May 13 at 11:59pm | 100 pts
            </div>
          </li>
          <li className="wd-assignment-list-item">
            <a 
              className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/124"
            >
              A2 - CSS + BOOTSTRAP
            </a>
            <div>
              Multiple Modules | <strong>Not available until</strong> May 13 at 12:00am | <strong>Due</strong> May 20 at 11:59pm | 100 pts
            </div>
          </li>
          <li className="wd-assignment-list-item">
            <a 
              className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/125"
            >
              A3 - JAVASCRIPT + REACT
            </a>
            <div>
              Multiple Modules | <strong>Not available until</strong> May 20 at 12:00am | <strong>Due</strong> May 27 at 11:59pm | 100 pts
            </div>
          </li>
        </ul> */}
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

            <ul className="wd-lessons list-group rounded-0">
                <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                A1
                <LessonControlButtons />
                </li>
                <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                A2
                <LessonControlButtons />
                </li>
                <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                A3
                <LessonControlButtons />
                </li>
            </ul>
            </li>
        </ul>
      </div>
    );
}