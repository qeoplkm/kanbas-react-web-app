import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { enrollments as initialEnrollments } from "./Database";

interface Enrollment {
  _id: string;
  user: string;
  course: string;
}

const getInitialEnrollments = (): Enrollment[] => {
  try {
    const savedEnrollments = localStorage.getItem("enrollments");
    if (savedEnrollments) {
      console.log("Loading enrollments from localStorage");
      return JSON.parse(savedEnrollments);
    } else {
      console.log("Loading enrollments from Database:", initialEnrollments);
      return initialEnrollments.length ? initialEnrollments : [];
    }
  } catch (error) {
    console.error("Error parsing enrollments from localStorage", error);
    return initialEnrollments.length ? initialEnrollments : []; 
  }
};

const initialState = {
  enrollments: getInitialEnrollments() || [],
};

console.log("Initial state of enrollments:", initialState.enrollments);

const enrollmentSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {

    enrollCourse: (
      state,
      { payload }: PayloadAction<{ user: string; course: string }>
    ) => {
      const { user, course } = payload;
      const isEnrolled = state.enrollments.some(
        (enrollment) => enrollment.user === user && enrollment.course === course
      );

      if (!isEnrolled) {
        state.enrollments.push({
          _id: String(Date.now()), 
          user,
          course,
        });
        localStorage.setItem("enrollments", JSON.stringify(state.enrollments));
      }
    },

    unenrollCourse: (
      state,
      { payload }: PayloadAction<{ user: string; course: string }>
    ) => {
      const { user, course } = payload;
      state.enrollments = state.enrollments.filter(
        (enrollment) =>
          !(enrollment.user === user && enrollment.course === course)
      );
      localStorage.setItem("enrollments", JSON.stringify(state.enrollments));
    },
    
    setEnrollments: (
      state,
      { payload: enrollments }: PayloadAction<Enrollment[]>
    ) => {
      state.enrollments = enrollments;
      localStorage.setItem("enrollments", JSON.stringify(state.enrollments));
    },
  },
});

export const { enrollCourse, unenrollCourse, setEnrollments } =
  enrollmentSlice.actions;
export default enrollmentSlice.reducer;