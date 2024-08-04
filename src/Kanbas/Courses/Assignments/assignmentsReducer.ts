import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Assignment {
  _id: string;
  title: string;
  course: string;
  shortname: string;
  available: string;
  due: string;
  pts: number;
  description?: string;
}

interface AssignmentsState {
  assignments: Assignment[];
  assignment: Partial<Assignment>;
}

const initialState: AssignmentsState = {
  assignments: [],
  assignment: { title: "New Assignment" },
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action: PayloadAction<Assignment[]>) => {
      state.assignments = action.payload;
    },
    addAssignment: (state, action: PayloadAction<Assignment>) => {
      state.assignments.push(action.payload);
    },
    deleteAssignment: (state, action: PayloadAction<string>) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action: PayloadAction<Assignment>) => {
      state.assignments = state.assignments.map((assignment) =>
        assignment._id === action.payload._id ? action.payload : assignment
      );
    },
    setAssignment: (state, action: PayloadAction<Partial<Assignment>>) => {
      state.assignment = action.payload;
    },
  },
});

export const { 
  setAssignments, 
  addAssignment, 
  deleteAssignment, 
  updateAssignment, 
  setAssignment 
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;