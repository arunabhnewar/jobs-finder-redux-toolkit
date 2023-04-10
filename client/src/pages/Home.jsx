import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterJobs from "../components/FilterJobs/FilterJobs";
import SingleJob from "../components/SingleJob/SingleJob";
import { fetchJobs } from "../features/Jobs/jobsSlice";

const Home = () => {
  // use Selector
  const { jobs, isLoading, isError, error, editing } = useSelector(
    state => state.jobs
  );

  // dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  // decide what to render
  let content = null;
  if (isLoading) content = <p>Loading...</p>;

  if (!isLoading && isError)
    content = <p className='error'>There was an error occurred</p>;

  if (!isLoading && !isError && jobs?.length === 0) {
    content = <p>No jobs found!</p>;
  }

  if (!isLoading && !isError && jobs?.length > 0) {
    content = jobs.map(job => <SingleJob key={job.id} job={job} />);
  }

  return (
    <div className='lg:pl-[14rem]  mt-[5.8125rem]'>
      <main className='max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]'>
        <FilterJobs />
        <div className='jobs-list'>{content}</div>
      </main>
    </div>
  );
};

export default Home;
