import { Link, useParams, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './index.css';

// Define the Course type
interface Course {
  _id: string;
  [key: string]: any; // This allows for other properties in the course object
}

export default function CoursesNavigation() {
  const { cid } = useParams<{ cid: string }>();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/courses/${cid}`);
        if (response.ok) {
          const courseData: Course = await response.json();
          setCourse(courseData);
        } else {
          setCourse(null);
        }
      } catch (error) {
        setCourse(null);
      } finally {
        setLoading(false);
      }
    };

    if (cid) {
      fetchCourse();
    } else {
      setLoading(false);
    }
  }, [cid]);

  useEffect(() => {
    const path = location.pathname.split('/').pop() || '';
    setActiveLink(path);
  }, [location]);

  if (loading) {
    return <div>Loading...</div>;
  }

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