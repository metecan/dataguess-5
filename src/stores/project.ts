import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Project = {
  id: string;
  name: string;
  file: string;
  fileSize: number;
  createdAt: string;
  affectedFile: string;
  filter: string;
};

interface ProjectState {
  projectHistory: Project[];
}

const initialState: ProjectState = {
  projectHistory: JSON.parse(localStorage.getItem('projectHistory') || '[]'),
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    addToProjectHistory: (state, action: PayloadAction<Project>) => {
      state.projectHistory.push(action.payload);
      localStorage.setItem('projectHistory', JSON.stringify(state.projectHistory));
    },
    updateProject: (state, action: PayloadAction<Project>) => {
      const index = state.projectHistory.findIndex(project => project.id === action.payload.id);
      state.projectHistory[index] = action.payload;
      localStorage.setItem('projectHistory', JSON.stringify(state.projectHistory));
    },
  },
});

export const { addToProjectHistory, updateProject } = projectSlice.actions;

export default projectSlice.reducer;
