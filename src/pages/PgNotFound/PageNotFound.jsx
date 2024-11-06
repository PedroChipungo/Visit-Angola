import React from 'react';
import { NavLink, Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className=' '>
      <div className='text-2xl'>
      <h1 >Sorry, we are still working on this</h1>
      </div>
     
      <NavLink to={'/'}><span className='cursor-pointer text-black font-bold text-2xl'>Return</span></NavLink>
    </div>
  );
};

export default PageNotFound;
