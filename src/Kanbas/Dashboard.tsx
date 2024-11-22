import { Link, useNavigate } from "react-router-dom";
import React, { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProtectedRouteFaculty from "./Account/ProtectedRouteFaculty";
import ProtectedRouteStudent from "./Account/ProtectedRouteStudent";
import { enrollCourse, unenrollCourse } from "./reducer";

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
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const enrollments = useSelector((state: any) => state.enrollmentReducer.enrollments);
  const dispatch = useDispatch();

  const [showAllCourses, setShowAllCourses] = useState(true); // Set to true by default

  const handleToggleEnrollments = () => {
    setShowAllCourses((prev) => !prev);
  };

  const handleEnroll = (courseId: string) => {
    dispatch(enrollCourse({ user: currentUser._id, course: courseId }));
    alert("Successfully enrolled in the course!");
  };

  const handleUnenroll = (courseId: string) => {
    dispatch(unenrollCourse({ user: currentUser._id, course: courseId })); 
    alert("Successfully unenrolled from the course!");
  };

  const displayedCourses = useMemo(() => {
    return showAllCourses
      ? courses
      : courses.filter((course) =>
          enrollments.some(
            (enrollment: any) =>
              enrollment.course === course._id && enrollment.user === currentUser._id
          )
        );
  }, [showAllCourses, courses, enrollments, currentUser._id]);

  console.log("Show All Courses:", showAllCourses);
  console.log("Displayed Courses:", displayedCourses);

  return (
    <div className="p-4" id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />

      <ProtectedRouteFaculty>
        <h5>
          New Course
          <button
            className="btn btn-primary float-end"
            id="wd-add-new-course-click"
            onClick={addNewCourse}
          >
            Add
          </button>
          <button
            className="btn btn-warning float-end me-2"
            onClick={updateCourse}
            id="wd-update-course-click"
          >
            Update
          </button>
        </h5>
        <br />
        <input
          value={course.name}
          className="form-control mb-2"
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />
        <textarea
          value={course.description}
          className="form-control"
          onChange={(e) =>
            setCourse({ ...course, description: e.target.value })
          }
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Enter Image URL (optional)"
          value={course.image}
          onChange={(e) => setCourse({ ...course, image: e.target.value })}
        />
        <hr />
      </ProtectedRouteFaculty>

      <ProtectedRouteStudent>
        <button
          className="btn btn-primary float-end"
          onClick={handleToggleEnrollments}
        >
          {showAllCourses ? "Show Enrolled" : "Show All Courses"}
        </button>
      </ProtectedRouteStudent> 

      <h2 id="wd-dashboard-published">
        Published Courses ({displayedCourses.length})
      </h2>
      <hr />

      <div className="row" id="wd-dashboard-courses">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {displayedCourses.map((course) => (
            <div key={course._id} className="col" style={{ width: "300px" }}>
              <div className="card">
                <Link
                  to={`/Kanbas/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <img
                    src={`/images/${course.img || 'reactjs.jpg'}`}
                    alt={course.name}
                    width="100%"
                    height={160}
                  />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name}{" "}
                    </h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}{" "}
                    </p>
                    <button className="btn btn-primary"> Go </button>

                    <ProtectedRouteStudent>
                      {enrollments.some(
                        (enrollment: any) =>
                          enrollment.course === course._id &&
                          enrollment.user === currentUser._id 
                      ) ? (
                        <button
                          className="btn btn-danger"
                          onClick={(event) => {
                            event.preventDefault();
                            handleUnenroll(course._id);
                          }}
                          aria-label="Unenroll from course"
                        >
                          Unenroll
                        </button>
                      ) : (
                        <button
                          className="btn btn-success"
                          onClick={(event) => {
                            event.preventDefault();
                            handleEnroll(course._id)}}
                          aria-label="Enroll in course"
                        >
                          Enroll
                        </button>
                      )}
                    </ProtectedRouteStudent>

                    <ProtectedRouteFaculty>
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }}
                        className="btn btn-danger float-end"
                        id="wd-delete-course-click"
                      >
                        Delete
                      </button>

                      <button
                        id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                        className="btn btn-warning me-2 float-end"
                      >
                        Edit
                      </button>
                    </ProtectedRouteFaculty>
                  </div>
                </Link>
              </div>
            </div>
          ))}

          {displayedCourses.length === 0 && (
            <div className="col-12 text-center">
              <p>No courses available to display.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
