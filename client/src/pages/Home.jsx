import React from "react";
import FilterJobs from "../components/FilterJobs/FilterJobs";
import SingleJob from "../components/SingleJob/SingleJob";

const Home = () => {
  return (
    <div className='lg:pl-[14rem]  mt-[5.8125rem]'>
      <main className='max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]'>
        <FilterJobs />
        <div className='jobs-list'>
          <SingleJob />
        </div>
      </main>
    </div>
  );
};

export default Home;
