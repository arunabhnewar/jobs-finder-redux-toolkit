import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addJob, deleteJob, editJob, getJobs } from "./jobsAPI";


// initialize the state 
const initialState = {
    jobs: [],
    isLoading: false,
    isError: false,
    error: "",
    editing: {},
};


// Async Thunks
// fetch all jobs from the database
export const fetchJobs = createAsyncThunk(
    'jobs/fetchJobs',
    async () => {
        const jobs = await getJobs();
        return jobs;
    }
);


// add a job to the database
export const createJob = createAsyncThunk(
    'jobs/createJob',
    async (data) => {
        const job = await addJob(data);
        return job;
    }
);

// update a job in the database
export const updateJob = createAsyncThunk(
    'jobs/updateJob',
    async ({ id, data }) => {
        const job = await editJob(id, data);
        return job;
    }
);


// delete a job from the database
export const removeJob = createAsyncThunk(
    'jobs/removeJob',
    async (id) => {
        const job = await deleteJob(id);
        return job;
    }
);


// Create Slice
const JobsSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        editActiveJob: (state, action) => {
            state.editing = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchJobs.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchJobs.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.jobs = action.payload;
            })
            .addCase(fetchJobs.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action?.error?.message;
                state.jobs = [];
            })
            .addCase(createJob.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(createJob.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.jobs.push(action.payload);
            })
            .addCase(createJob.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action?.error?.message;
            })
            .addCase(updateJob.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(updateJob.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;

                const indexToUpdate = state.jobs.findIndex((job) => job.id === action.payload.id);
                state.jobs[indexToUpdate] = action.payload;
            })
            .addCase(updateJob.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action?.error?.message;
            })
            .addCase(removeJob.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(removeJob.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;

                const indexToDelete = state.jobs.findIndex((job) => job.id === action.payload.id);
                state.jobs[indexToDelete] = action.payload;
            })
            .addCase(removeJob.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action?.error?.message;
            })
    }
})

export default JobsSlice.reducer;
export const { editActiveJob } = JobsSlice.actions;