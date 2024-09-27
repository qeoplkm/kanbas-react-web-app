import React from "react";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="container mt-4">
      <h1>Profile</h1>
      <div className="mb-2">
        <input
          id="wd-username"
          className="form-control"
          value="alice"
          placeholder="username"
          readOnly
        />
      </div>
      <div className="mb-2">
        <input
          id="wd-password"
          className="form-control"
          value="123"
          placeholder="password"
          type="password"
          readOnly
        />
      </div>
      <div className="mb-2">
        <input
          id="wd-firstname"
          className="form-control"
          value="Alice"
          placeholder="First Name"
        />
      </div>
      <div className="mb-2">
        <input
          id="wd-lastname"
          className="form-control"
          value="Wonderland"
          placeholder="Last Name"
        />
      </div>
      <div className="mb-2">
        <input
          id="wd-dob"
          className="form-control"
          value="2000-01-01"
          type="date"
        />
      </div>
      <div className="mb-2">
        <input
          id="wd-email"
          className="form-control"
          value="alice@wonderland.com"
          type="email"
        />
      </div>
      <div className="mb-2">
        <select id="wd-role" className="form-control">
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </select>
      </div>
      <Link
        to="/Kanbas/Account/Signin"
        className="btn btn-danger w-100"
      >
        Signout
      </Link>
    </div>
  );
}
