import React from 'react';
import { FaCheckCircle, FaEllipsisV, FaRegFileAlt } from 'react-icons/fa';
import { BsGripVertical } from "react-icons/bs";
import AssignmentSearchControls from './AssignmentSearchControls';
import AssignmentsControls from './AssignmentsControls';
import AssignmentsTitleBarControlButtons from './AssignmentsTitleBarControlButtons';

export default function Assignments() {
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
        <li className="list-group-item border-0 border-start border-success border-4 ps-0 mb-3">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2" />
            <FaRegFileAlt className="me-2 text-success" />
            <div className="flex-grow-1">
              <h6 className="mb-0">
              <a className="wd-assignment-link"
                href="#/Kanbas/Courses/1234/Assignments/123">
                A1
              </a>
              </h6>
              <small>
                <span className="text-danger">Multiple Modules</span>
                <span className="text-muted"> | Due Sep 19 at 11:59pm Sep 19 at 11:59pm | -/100 pts  |  Not Yet Graded</span>
              </small>
            </div>
            <div>
              <FaCheckCircle className="text-success me-2" />
              <FaEllipsisV />
            </div>
          </div>
        </li>
        <li className="list-group-item border-0 border-start border-success border-4 ps-0 mb-3">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2" />
            <FaRegFileAlt className="me-2 text-success" />
            <div className="flex-grow-1">
              <h6 className="mb-0">
                <a className="wd-assignment-link"
                  href="#/Kanbas/Courses/1234/Assignments/123">
                  A2
                </a>
              </h6>
              <small>
              <span className="text-danger">Multiple Modules</span>
              <span className="text-muted"> | Due Oct 3 at 11:59pm Oct 3 at 11:59pm | -/100 pts</span>
              </small>
            </div>
            <div>
              <FaCheckCircle className="text-success me-2" />
              <FaEllipsisV />
            </div>
          </div>
        </li>
        <li className="list-group-item border-0 border-start border-success border-4 ps-0 mb-3">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2" />
            <FaRegFileAlt className="me-2 text-success" />
            <div className="flex-grow-1">
              <h6 className="mb-0">
                <a className="wd-assignment-link"
                  href="#/Kanbas/Courses/1234/Assignments/123">
                  A3
                </a>
              </h6>
              <small>
              <span className="text-danger">Multiple Modules</span>
              <span className="text-muted"> | Due Oct 17 at 11:59pm Oct 17 at 11:59pm | -/100 pts</span>
              </small>
            </div>
            <div>
              <FaCheckCircle className="text-success me-2" />
              <FaEllipsisV />
            </div>
          </div>
        </li>
    </div>
  );
}
