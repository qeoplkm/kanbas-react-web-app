import React from 'react';
import { useParams, Link } from 'react-router-dom';
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = db.assignments.find(a => a._id === aid);

  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  return (
    <div className="container mt-4">
      <form id="wd-assignments-editor">
        <div className="mb-3">
          <label htmlFor="wd-name" className="form-label">Assignment Name</label>
          <input type="text" className="form-control" id="wd-name" defaultValue={assignment.title} />
        </div>

        <div className="mb-3">
          <textarea 
            className="form-control" 
            id="wd-description" 
            defaultValue={`The assignment is available online

Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:
• Your full name and section
• Links to each of the lab assignments
• Link to the Kanbas application
• Links to all relevant source code repositories

The Kanbas application should include a link to navigate back to the landing page.`}
          />
        </div>

        <div className="row mb-3">
          <div className="col-md-2">
            <label htmlFor="wd-points" className="form-label">Points</label>
          </div>
          <div className="col-md-10">
            <input type="number" className="form-control" id="wd-points" defaultValue={100} />
          </div>
        </div>

        {/* 
        <div className="row mb-3">
          <div className="col-md-2">
            <label htmlFor="wd-assignment-group" className="form-label">Assignment Group</label>
          </div>
          <div className="col-md-10">
            <select className="form-select" id="wd-assignment-group">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-2">
            <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
          </div>
          <div className="col-md-10">
            <select className="form-select" id="wd-display-grade-as">
              <option value="Percentage">Percentage</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-2">
            <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
          </div>
          <div className="col-md-10">
            <select className="form-select mb-2" id="wd-submission-type">
              <option value="Online">Online</option>
            </select>
            <div className="card">
              <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">Online Entry Options</h6>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="wd-text-entry" />
                  <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="wd-website-url" defaultChecked />
                  <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="wd-media-recordings" />
                  <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="wd-student-annotation" />
                  <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="wd-file-uploads" />
                  <label className="form-check-label" htmlFor="wd-file-uploads">File Uploads</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        */}

        <div className="row mb-3">
          <div className="col-md-2">
            <label className="form-label">Assign</label>
          </div>
          
          <div className="col-md-10">
            <div className="card">
              <div className="card-body">
                <div className="mb-3">
                  <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
                  <input type="text" className="form-control" id="wd-assign-to" defaultValue="Everyone" />
                </div>
                <div className="mb-3">
                  <label htmlFor="wd-due-date" className="form-label">Due</label>
                  <input type="datetime-local" className="form-control" id="wd-due-date" defaultValue="2024-05-13T23:59" />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="wd-available-from" className="form-label">Available from</label>
                    <input type="datetime-local" className="form-control" id="wd-available-from" defaultValue="2024-05-06T00:00" />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="wd-available-until" className="form-label">Until</label>
                    <input type="datetime-local" className="form-control" id="wd-available-until" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-end mt-3">
          <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">Cancel</Link>
          <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-danger">Save</Link>
        </div>
      </form>
    </div>
  );
}