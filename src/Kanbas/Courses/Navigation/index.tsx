import './index.css';
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function CoursesNavigation({ courseId }: { courseId: string | undefined }) {
    const [isSidebarVisible, setSidebarVisible] = useState(true);
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
    const { pathname } = useLocation();

    return (
        <div style={{ display: 'flex' }}>
            <div id="wd-courses-navigation" className={`list-group fs-5 rounded-0 ${isSidebarVisible ? '' : 'hidden'}`}>
                {links.map((link) => (
                    <Link key={link} to={`/Kanbas/Courses/${courseId}/${link}`} className={`list-group-item border-0
                        ${pathname.includes(link) ? "active" : "text-danger"}`}>
                        <span className="assignment-column">
                            <span className="assignment-title">{link}</span>
                        </span>
                    </Link>
                ))}
            </div>
            <div id="main-content" className={`${isSidebarVisible ? '' : 'full-width'}`}>
            </div>
        </div>
    );
}