import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <nav>
        <ul className='space-y-4'>
          <li>
            <Link
              to='/'
              className='main-menu menu-active'
              id='lws-alljobs-menu'>
              <i className='fa-solid fa-briefcase'></i>
              <span> All Available Jobs</span>
            </Link>
            <ul className='space-y-6 lg:space-y-2 '>
              <li>
                <Link
                  className='sub-menu'
                  to='/internship'
                  id='lws-internship-menu'>
                  <i className='fa-solid fa-stop !text-[#FF5757] mr-2'></i>
                  Internship
                </Link>
              </li>
              <li>
                <Link
                  className='sub-menu'
                  to='/fulltime'
                  id='lws-fulltime-menu'>
                  <i className='fa-solid fa-stop !text-[#FF8A00] mr-2'></i>
                  Full Time
                </Link>
              </li>
              <li>
                <Link className='sub-menu' to='/remote' id='lws-remote-menu'>
                  <i className='fa-solid fa-stop !text-[#56E5C4] mr-2'></i>
                  Remote
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to='/addjob' className='main-menu' id='lws-addJob-menu'>
              <i className='fa-solid fa-file-circle-plus mr-2'></i>
              <span>Add NewJob</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
