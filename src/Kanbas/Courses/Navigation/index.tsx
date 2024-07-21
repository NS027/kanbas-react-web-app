import { Link, useParams, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './index.css';
import * as db from "../../Database";

export default function CoursesNavigation() {
  const { cid } = useParams();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    // Extract the last segment of the pathname to determine the active link
    const path = location.pathname.split('/').pop() || '';
    setActiveLink(path);
  }, [location]);

  const course = db.courses.find(course => course._id === cid);

  if (!course) {
    return <div>No course available</div>;
  }

  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades"];

  return (
    <div className="d-flex">
      <div id="wd-courses-navigation" className="list-group fs-5 rounded-0 me-3">
        {links.map((link) => (
          <Link
            key={link}
            to={`/Kanbas/Courses/${course._id}/${link}`}
            className={`list-group-item ${activeLink === link ? 'active' : 'text-danger'} border border-0`}
            onClick={() => setActiveLink(link)}
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
