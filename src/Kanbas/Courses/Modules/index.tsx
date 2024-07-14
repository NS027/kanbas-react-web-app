import React from 'react';
import ModulesControls from './ModulesControls';
import ModulesControlButtons from './LessonControlButtons';
import { BsGripVertical } from 'react-icons/bs';
export default function Modules() {
    return (
    //   <div>
    //     <table width="100%">
    //       <tr>
    //         <td>
    //           <button id="wd-collapse-all">Collapse All</button>
    //           <button id="wd-view-progress">View Progress</button>
    //           <select id="wd-select-publish-all">
    //           <option selected value="PublishAll">Publish All</option>
    //           <option value="Option1">Option1</option>
    //           <option value="Option2">Option2</option>
    //           <option value="Option3">Option3</option>
    //           <option value="Option4">Option4</option>
    //           </select>
    //           <button id="wd-module-add">+Module</button>
    //         </td>
    //       </tr>
    //     </table>
    //         <ul id="wd-modules">
    //           <li id="wd-module">
    //               <div id="wd-title">Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda</div>
    //               <ul id="wd-lessons">
    //                   <li id="wd-lesson">
    //                       <span id="wd-title">LEARNING OBJECTIVES</span>
    //                       <ul id="wd-content">
    //                           <li id="wd-content-item">Introduction to the course</li>
    //                           <li id="wd-content-item">Learn what is Web Development</li>
    //                       </ul>
    //                   </li>
    //                   <li id="wd-lesson">
    //                       <span id="wd-title">READING</span>
    //                       <ul id="wd-content">
    //                           <li id="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
    //                           <li id="wd-content-item">Full Stack Developer - Chapter 2 - Creating User</li>
    //                       </ul>
    //                   </li>
    //                   <li id="wd-lesson">
    //                       <span id="wd-title">SLIDES</span>
    //                       <ul id="wd-content">
    //                           <li id="wd-content-item">Introduction to Web Development</li>
    //                           <li id="wd-content-item">Creating an HTTP server with Node.js</li>
    //                           <li id="wd-content-item">Creating a React Application</li>
    //                       </ul>
    //                   </li>
    //               </ul>
    //           </li>
    //           <li id="wd-module">
    //               <div id="wd-title">Week 1, Lecture 2 - Formatting User Interfaces with HTML</div>
    //               <ul id="wd-lessons">
    //                   <li id="wd-lesson">
    //                       <span id="wd-title">LEARNING OBJECTIVES</span>
    //                       <ul id="wd-content">
    //                           <li id="wd-content-item">Learn how to create user interfaces with HTML</li>
    //                           <li id="wd-content-item">Deploy the assignment to Netlify</li>
    //                       </ul>
    //                   </li>
    //                   <li id="wd-lesson">
    //                       <span id="wd-title">SLIDES</span>
    //                       <ul id="wd-content">
    //                           <li id="wd-content-item">Introduction to HTML and the DOM</li>
    //                           <li id="wd-content-item">Formatting Web content with Headings and</li>
    //                           <li id="wd-content-item">Formatting content with Lists and Tables</li>
    //                       </ul>
    //                   </li>
    //               </ul>
    //           </li>
    //       </ul>
    //   </div>
    <div id="wd-modules">
        <ModulesControls /><br /><br /><br /><br />
        <ul id="wd-modules" className="list-group rounded-0">
            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                Week 1
                <ModulesControlButtons />
            </div>
            <ul className="wd-lessons list-group rounded-0">
                <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                LEARNING OBJECTIVES
                <ModulesControlButtons />
                </li>
                <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                Introduction to the course
                <ModulesControlButtons />
                </li>
                <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                Learn what is Web Development
                <ModulesControlButtons />
                </li>
                <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                LESSON 1
                <ModulesControlButtons />
                </li>
                <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                LESSON 2
                <ModulesControlButtons />
                </li>
            </ul>
            </li>
            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                Week 2
                <ModulesControlButtons />
            </div>
            <ul className="wd-lessons list-group rounded-0">
                <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                LEARNING OBJECTIVES
                <ModulesControlButtons />
                </li>
                <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                LESSON 1
                <ModulesControlButtons />
                </li>
                <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                LESSON 2
                <ModulesControlButtons />
                </li>
            </ul>
            </li>
        </ul>
        </div>

  );}
  