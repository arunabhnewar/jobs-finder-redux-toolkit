import React from "react";

const AddJob = () => {
  return (
    <div className='lg:pl-[14rem] mt-[5.8125rem]'>
      <main className='max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]'>
        <h1 className='mb-10 text-center lws-section-title'>Add New Job</h1>

        <div className='max-w-3xl mx-auto'>
          <form className='space-y-6'>
            <div className='fieldContainer'>
              <label
                for='lws-JobTitle'
                className='text-sm font-medium text-slate-300'>
                Job Title
              </label>
              <select id='lws-JobTitle' name='lwsJobTitle' required>
                <option value='' hidden selected>
                  Select Job
                </option>
                <option>Software Engineer</option>
                <option>Software Developer</option>
                <option>Full Stack Developer</option>
                <option>MERN Stack Developer</option>
                <option>DevOps Engineer</option>
                <option>QA Engineer</option>
                <option>Product Manager</option>
                <option>Social Media Manager</option>
                <option>Senior Executive</option>
                <option>Junior Executive</option>
                <option>Android App Developer</option>
                <option>IOS App Developer</option>
                <option>Frontend Developer</option>
                <option>Frontend Engineer</option>
              </select>
            </div>

            <div className='fieldContainer'>
              <label for='lws-JobType'>Job Type</label>
              <select id='lws-JobType' name='lwsJobType' required>
                <option value='' hidden selected>
                  Select Job Type
                </option>
                <option>Full Time</option>
                <option>Internship</option>
                <option>Remote</option>
              </select>
            </div>

            <div className='fieldContainer'>
              <label for='lws-JobSalary'>Salary</label>
              <div className='flex border rounded-md shadow-sm border-slate-600'>
                <span className='input-tag'>BDT</span>
                <input
                  type='number'
                  name='lwsJobSalary'
                  id='lws-JobSalary'
                  required
                  className='!rounded-l-none !border-0'
                  placeholder='20,00,000'
                />
              </div>
            </div>

            <div className='fieldContainer'>
              <label for='lws-JobDeadline'>Deadline</label>
              <input
                type='date'
                name='lwsJobDeadline'
                id='lws-JobDeadline'
                required
              />
            </div>

            <div className='text-right'>
              <button
                type='submit'
                id='lws-submit'
                className='cursor-pointer btn btn-primary w-fit'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AddJob;
