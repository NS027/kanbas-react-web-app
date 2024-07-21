import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import './index.css';
import * as db from "../../Database";


export default function CoursesNavigation() {
  const [activeLink, setActiveLink] = useState('Home');

  const handleClick = (link: string) => {
    setActiveLink(link);
  };

  const location = useLocation();
  const course = db.courses[0];

  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades"];
  return (
    <div className="d-flex">
      <div id="wd-courses-navigation" className="list-group fs-5 rounded-0 me-3">
        {links.map((link) => (
          <Link
            key={link}
            to={`/Kanbas/Courses/${course._id}/${link}`}
            className={`list-group-item ${activeLink === link ? 'active' : 'text-danger'} border border-0`}
            onClick={() => handleClick(link)}
          >
            {link}
          </Link>
        ))}
      </div>
      <div className="content">
        {/* Content goes here */}
      </div>
    </div>
  );
}

