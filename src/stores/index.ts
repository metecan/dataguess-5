import { configureStore } from '@reduxjs/toolkit';

import project from './project';

const store = configureStore({
  reducer: {
    project,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
