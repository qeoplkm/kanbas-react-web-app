import React from 'react';
import { FaPlus } from 'react-icons/fa';

export default function AssignmentsControls() {
  return (
    <div className="float-end">
      <button className="btn btn-light me-2">
        <FaPlus /> Group
      </button>
      <button className="btn btn-danger">
        <FaPlus /> Assignment
      </button>
    </div>
  );
}
