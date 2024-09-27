import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (3)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/1234/Home">
                <img src="/images/reactjs.jpg" className="card-img-top" alt="React JS" style={{ height: "160px", objectFit: "cover" }}/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                     CS1234 React JS
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                      Full Stack software developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px"}}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/5010/Home">
                <img src="/images/pic of cs5010.png" className="card-img-top" alt="CS 5010" style={{ height: "160px", objectFit: "cover" }}/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                     CS 5010 Program Design Paradigm
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                       MERGED Fall 2024
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/5610/Home">
                <img src="/images/pic of cs5610.jpg" className="card-img-top" alt="CS 5610" style={{ height: "160px", objectFit: "cover" }}/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                     CS5610 20595 Web Development
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                       EC 02 Fall 2024
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px"}}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/5010/Home">
                <img src="/images/pic of cs5010.png" className="card-img-top" alt="CS 5010" style={{ height: "160px", objectFit: "cover" }}/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                     CS5011 Java
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                       Program Design Paradigm
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px"}}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/5010/Home">
                <img src="/images/pic of cs5010.png" className="card-img-top" alt="CS 5010" style={{ height: "160px", objectFit: "cover" }}/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                     CS 5080 Python
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                     Algorithm
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px"}}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/5010/Home">
                <img src="/images/pic of cs5610.jpg" className="card-img-top" alt="CS 5010" style={{ height: "160px", objectFit: "cover" }}/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                     CS5000 5095 C
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                       Embedded Learning
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px"}}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/5010/Home">
                <img src="/images/pic of cs5610.jpg" className="card-img-top" alt="CS 5010" style={{ height: "160px", objectFit: "cover" }}/>
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                     CS5700 Networks
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                     Computer Networks
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
