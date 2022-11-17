import { configureStore } from '@reduxjs/toolkit';
import tableReducer from './Reducers/tableReducer';

const store = configureStore({
  devTools: true,
  reducer: tableReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
