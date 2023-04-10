import { configureStore } from "@reduxjs/toolkit";
import jobReducer from '../features/Jobs/jobsSlice';

const store = configureStore({
    reducer: {
        jobs: jobReducer,
    },
});

export default store;
