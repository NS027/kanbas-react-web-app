// import "./index.css";
// export default function CoursesNavigation() {
//     return (
//       <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
//         <a id="wd-course-home-link" href="#/Kanbas/Courses/1234/Home"
//           className="list-group-item active border border-0"> Home </a>
//         <a id="wd-course-modules-link" href="#/Kanbas/Courses/1234/Modules"
//           className="list-group-item text-danger border border-0"> Modules </a>
//         <a id="wd-course-piazza-link" href="#/Kanbas/Courses/1234/Piazza"
//           className="list-group-item text-danger border border-0"> Piazza </a>
//         <a id="wd-course-zoom-link" href="#/Kanbas/Courses/1234/Zoom"
//           className="list-group-item text-danger border border-0"> Zoom </a>
//         <a id="wd-course-quizzes-link" href="#/Kanbas/Courses/1234/Assignments"
//           className="list-group-item text-danger border border-0"> Assignments </a>
//         <a id="wd-course-assignments-link" href="#/Kanbas/Courses/1234/Quizzes"
//           className="list-group-item text-danger border border-0"> Quizzes </a>
//         <a id="wd-course-grades-link" href="#/Kanbas/Courses/1234/Grades"
//           className="list-group-item text-danger border border-0"> Grades </a>
//     </div>
//   );}

import React, { useState } from 'react';
import './index.css';

export default function CoursesNavigation() {
  const [activeLink, setActiveLink] = useState('Home');

  const handleClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div className="d-flex">
      <div id="wd-courses-navigation" className="list-group fs-5 rounded-0 me-3">
        <a
          id="wd-course-home-link"
          href="#/Kanbas/Courses/1234/Home"
          className={`list-group-item ${activeLink === 'Home' ? 'active' : 'text-danger'} border border-0`}
          onClick={() => handleClick('Home')}
        >
          Home
        </a>
        <a
          id="wd-course-modules-link"
          href="#/Kanbas/Courses/1234/Modules"
          className={`list-group-item ${activeLink === 'Modules' ? 'active' : 'text-danger'} border border-0`}
          onClick={() => handleClick('Modules')}
        >
          Modules
        </a>
        <a
          id="wd-course-piazza-link"
          href="#/Kanbas/Courses/1234/Piazza"
          className={`list-group-item ${activeLink === 'Piazza' ? 'active' : 'text-danger'} border border-0`}
          onClick={() => handleClick('Piazza')}
        >
          Piazza
        </a>
        <a
          id="wd-course-zoom-link"
          href="#/Kanbas/Courses/1234/Zoom"
          className={`list-group-item ${activeLink === 'Zoom' ? 'active' : 'text-danger'} border border-0`}
          onClick={() => handleClick('Zoom')}
        >
          Zoom
        </a>
        <a
          id="wd-course-quizzes-link"
          href="#/Kanbas/Courses/1234/Assignments"
          className={`list-group-item ${activeLink === 'Assignments' ? 'active' : 'text-danger'} border border-0`}
          onClick={() => handleClick('Assignments')}
        >
          Assignments
        </a>
        <a
          id="wd-course-assignments-link"
          href="#/Kanbas/Courses/1234/Quizzes"
          className={`list-group-item ${activeLink === 'Quizzes' ? 'active' : 'text-danger'} border border-0`}
          onClick={() => handleClick('Quizzes')}
        >
          Quizzes
        </a>
        <a
          id="wd-course-grades-link"
          href="#/Kanbas/Courses/1234/Grades"
          className={`list-group-item ${activeLink === 'Grades' ? 'active' : 'text-danger'} border border-0`}
          onClick={() => handleClick('Grades')}
        >
          Grades
        </a>
      </div>
      <div className="content">
        {/* Content goes here */}
      </div>
    </div>
  );
}
  