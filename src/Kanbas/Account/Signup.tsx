import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="d-flex">
      <div className="flex-grow-1 ms-3">
        <h1>Signup</h1>
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
          id="wd-signup-btn"
          to="/Kanbas/Account/Profile"
          className="btn btn-primary w-100 mb-2"
        >
          Signup
        </Link>
        <Link
          id="wd-signin-link"
          to="/Kanbas/Account/Signin"
          className="d-block text-center"
        >
          Signin
        </Link>
      </div>
    </div>
  );
}
