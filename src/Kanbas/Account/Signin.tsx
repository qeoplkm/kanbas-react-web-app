import { Link } from "react-router-dom";
export default function Signin() {
  return (
    <div className="d-flex">
      <div className="flex-grow-1 ms-3">
        <h1>Signin</h1>
        <div className="mb-2">
          <input
            id="wd-username"
            placeholder="username"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            id="wd-password"
            placeholder="password"
            type="password"
            className="form-control"
          />
        </div>
        <Link
          id="wd-signin-btn"
          to="/Kanbas/Account/Profile"
          className="btn btn-primary w-100 mb-2"
        >
          Signin
        </Link>
        <Link
          id="wd-signup-link"
          to="/Kanbas/Account/Signup"
          className="d-block text-center"
        >
          Signup
        </Link>
      </div>
    </div>
  );
};
