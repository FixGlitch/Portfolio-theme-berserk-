// store.js
import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from './loadingSlice';

const initialState = {
};

const appReducer = (state = initialState, action) => {
  return {
    isLoading: loadingReducer(state.isLoading, action),
  };
};

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
