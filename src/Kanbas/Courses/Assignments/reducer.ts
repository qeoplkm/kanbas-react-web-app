import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assignments: [] as any[],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },

    addAssignment: (state, { payload: assignment }) => {
      const newAssignment = {
        _id: `${assignment.course}-${new Date().getTime().toString()}`, 
        title: assignment.title || "",
        score: assignment.score || "",
        available_date: assignment.available_date || "",
        due_date: assignment.due_date || "",
        course: assignment.course || "",
        modules: assignment.modules || "",
      };

      state.assignments.push(newAssignment);
    },

    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (m: any) => m._id !== assignmentId
      );
    },

    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((m: any) =>
        m._id === assignment._id && m.course === assignment.course
          ? { ...m, ...assignment }
          : m
      ) as any;
    },
  },
});

export const {
  setAssignments,
  addAssignment,
  deleteAssignment,
  updateAssignment,
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;