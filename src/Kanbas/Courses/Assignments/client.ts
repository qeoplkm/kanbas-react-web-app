import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

// Fetch all assignments for a specific course
export const fetchAssignmentsForCourse = async (courseId: string) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/assignments`);
  return response.data;
};

// Fetch a single assignment by ID
export const fetchAssignmentById = async (assignmentId: string) => {
  const response = await axios.get(`${ASSIGNMENTS_API}/${assignmentId}`);
  return response.data;
};

// Create a new assignment for a specific course
export const createAssignment = async (courseId: string, assignment: any) => {
  const response = await axios.post(`${COURSES_API}/${courseId}/assignments`, assignment);
  return response.data;
};

// Update an existing assignment
export const updateAssignment = async (assignmentId: string, assignmentUpdates: any) => {
  const response = await axios.put(`${ASSIGNMENTS_API}/${assignmentId}`, assignmentUpdates);
  return response.data;
};

// Delete an assignment
export const deleteAssignment = async (assignmentId: string) => {
  const response = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
  return response.status === 204;
};