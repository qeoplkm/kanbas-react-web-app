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
  enrolling, 
  setEnrolling,
  updateEnrollment
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
  enrolling: boolean;
  setEnrolling: (enrolling: boolean) => void;
  updateEnrollment: (courseId: string, enrolled: boolean) => void;
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


  return (
    <div className="p-4" id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard
      <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary" >
          {enrolling ? "My Courses" : "All Courses"}
        </button>
</h1> <hr />

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
                    {enrolling && (
              <button onClick={(event) => {
                        event.preventDefault();
                        updateEnrollment(course._id, !course.enrolled);
                      }}
                      className={`btn ${ course.enrolled ? "btn-danger" : "btn-success" } float-end`} >
                {course.enrolled ? "Unenroll" : "Enroll"}
              </button>
                    )}
                      {course.name}{" "}
                    </h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}{" "}
                    </p>
                    <button className="btn btn-primary"> Go </button>


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
