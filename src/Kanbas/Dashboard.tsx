import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  enrollCourse,
  unenrollCourse,
  unenrollAllFromCourse,
} from "./Courses/reducer";
import ProtectedRoute from "./Account/ProtectedRoute";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: (uniqueId: string) => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const [showAllCourses, setShowAllCourses] = useState(false);

  const isFaculty = currentUser?.role === "FACULTY";
  const isStudent = currentUser?.role === "STUDENT";

  const enrolledCourses = enrollments
    .filter((enrollment: any) => enrollment.user === currentUser._id)
    .map((enrollment: any) => enrollment.course);

  const filteredCourses = showAllCourses ? courses : 
    courses.filter((course) => enrolledCourses.includes(course._id));

  const handleEnroll = (courseId: string) => {
    dispatch(enrollCourse({ userId: currentUser._id, courseId }));
  };

  const handleUnenroll = (courseId: string) => {
    dispatch(unenrollCourse({ userId: currentUser._id, courseId }));
  };

  const handleAddNewCourse = () => {
    const uniqueId = new Date().getTime().toString();
    addNewCourse(uniqueId);
    handleEnroll(uniqueId);
  };

  return (
    <div className="position-relative" style={{ marginLeft: "120px" }}>
      <div className="p-4">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        <hr />

        {isFaculty && (
          <div className="mb-4">
            <h5 className="d-flex justify-content-between align-items-center">
              New Course
              <div>
                <button
                  className="btn btn-warning me-2"
                  onClick={updateCourse}
                  id="wd-update-course-click"
                >
                  Update
                </button>
                <button
                  className="btn btn-primary"
                  id="wd-add-new-course-click"
                  onClick={handleAddNewCourse}
                >
                  Add
                </button>
              </div>
            </h5>
            <hr />

            <input
              value={course.name}
              className="form-control mb-2"
              onChange={(e) => setCourse({ ...course, name: e.target.value })}
              placeholder="Course Name"
            />

            <textarea
              value={course.description}
              className="form-control mb-4"
              rows={3}
              onChange={(e) => setCourse({ ...course, description: e.target.value })}
              placeholder="Course Description"
            />
          </div>
        )}

        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 id="wd-dashboard-published">
            {showAllCourses
              ? `Published Courses (${courses.length})`
              : `Enrolled Courses (${enrolledCourses.length})`}
          </h2>
          {isStudent && (
            <button 
              className="btn btn-primary" 
              onClick={() => setShowAllCourses(!showAllCourses)}
            >
              {showAllCourses ? "Show Enrolled Courses" : "Show All Courses"}
            </button>
          )}
        </div>
        <hr />

        <div id="wd-dashboard-courses">
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
            {filteredCourses.map((course) => {
              const isEnrolled = enrolledCourses.includes(course._id);
              return (
                <div key={course._id} className="col">
                  <div className="card h-100 rounded-3">
                    <ProtectedRoute>
                      <Link
                        to={`/Kanbas/Courses/${course._id}/Home`}
                        className="text-decoration-none text-dark"
                      >
                        <img
                          src={`/images/${course.img || 'reactjs.jpg'}`}
                          className="card-img-top"
                          alt={course.name}
                          style={{ height: "160px", objectFit: "cover" }}
                        />
                        <div className="card-body">
                          <h5 className="card-title">{course.name}</h5>
                          <p
                            className="card-text"
                            style={{
                              maxHeight: "100px",
                              overflow: "hidden",
                              textOverflow: "ellipsis"
                            }}
                          >
                            {course.description}
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <button className="btn btn-primary">Go</button>

                            {isStudent && (
                              <div>
                                {isEnrolled ? (
                                  <button
                                    className="btn btn-danger"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      handleUnenroll(course._id);
                                    }}
                                  >
                                    Unenroll
                                  </button>
                                ) : (
                                  <button
                                    className="btn btn-success"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      handleEnroll(course._id);
                                    }}
                                  >
                                    Enroll
                                  </button>
                                )}
                              </div>
                            )}

                            {isFaculty && (
                              <div>
                                <button
                                  id="wd-edit-course-click"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setCourse(course);
                                  }}
                                  className="btn btn-warning me-2"
                                >
                                  Edit
                                </button>
                                <button
                                  onClick={(e) => {
                                    e.preventDefault();
                                    deleteCourse(course._id);
                                    dispatch(unenrollAllFromCourse(course._id));
                                  }}
                                  className="btn btn-danger"
                                  id="wd-delete-course-click"
                                >
                                  Delete
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </Link>
                    </ProtectedRoute>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}