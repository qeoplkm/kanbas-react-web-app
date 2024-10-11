import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";

export default function CoursesNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People"
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const linkPath = link;
        const url = `/Kanbas/Courses/${cid}/${linkPath}`;
        
        const isActive = pathname.endsWith(`/${linkPath}`) || pathname.includes(`/${linkPath}/`);

        return (
          <Link
            key={linkPath}
            to={url}
            id={`wd-course-${linkPath}-link`}
            className={`list-group-item ${isActive ? 'active' : 'text-danger'} border border-0`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}
