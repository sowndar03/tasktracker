import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation();

  const handleClick = () => {
    if (window.scrollY !== 0) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='bg-yellow-400 flex m-0 p-4 sm:p-5 justify-between md:text-2xl text-sm'>
      <h1 className='font-pacifico cursor-pointer py-1'>
        <Link to='/' onClick={handleClick}>Tasktracker</Link>
      </h1>
      <div className='font-artifika font-semibold flex sm:gap-4 md:text-xl'>
        <Link to='/' className={`hover:bg-white p-1 hover:px-2 hover:shadow-lg rounded-md ${pathname === '/' ? 'active' : ''}`} onClick={handleClick}>Home</Link>
        <Link to='/about' className={`hover:bg-white p-1 hover:px-2 hover:shadow-lg rounded-md ${pathname === '/about' ? 'active' : ''}`} onClick={handleClick}>About</Link>
        <Link to='/feature' className={`hover:bg-white p-1 hover:px-2 hover:shadow-lg rounded-md ${pathname === '/feature' ? 'active' : ''}`} onClick={handleClick}>Feature</Link>
        <Link to='/contact' className={`hover:bg-white p-1 hover:px-1 hover:shadow-lg rounded-md ${pathname === '/contact' ? 'active' : ''}`} onClick={handleClick}>Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
