import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaCheckCircle, FaEllipsisV, FaRegFileAlt } from 'react-icons/fa';
import { BsGripVertical } from "react-icons/bs";
import AssignmentSearchControls from './AssignmentSearchControls';
import AssignmentsControls from './AssignmentsControls';
import AssignmentsTitleBarControlButtons from './AssignmentsTitleBarControlButtons';
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;

  console.log('courseId:', cid);
  const courseAssignments = assignments.filter(assignment => assignment.course === cid);

  console.log('courseId:', cid);
  console.log('All assignments:', assignments);
  console.log('Filtered assignments:', courseAssignments);

  return (
    <div className="p-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <AssignmentSearchControls />
        <AssignmentsControls />
      </div>
      <div className="d-flex justify-content-between align-items-center mb-3 bg-light p-4 rounded">
        <h4 className="mb-0">
          <BsGripVertical className="me-2" />
          ASSIGNMENTS
        </h4>
        <AssignmentsTitleBarControlButtons />
      </div>
      {courseAssignments.length === 0 ? (
        <p>No assignments found for this course.</p>
      ) : (
        <ul className="list-group">
          {courseAssignments.map(assignment => (
            <li key={assignment._id} className="list-group-item border-0 border-start border-success border-4 ps-0 mb-3">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2" />
                <FaRegFileAlt className="me-2 text-success" />
                <div className="flex-grow-1">
                  <h6 className="mb-0">
                    <Link 
                      className="wd-assignment-link"
                      to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                    >
                      {assignment.title}
                    </Link>
                  </h6>
                  <small>
                    <span className="text-danger">Multiple Modules</span>
                    <span className="text-muted"> | Due Date | -/100 pts</span>
                  </small>
                </div>
                <div>
                  <FaCheckCircle className="text-success me-2" />
                  <FaEllipsisV />
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
