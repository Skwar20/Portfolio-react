import { useState } from 'react';
import React from 'react';
import { Burger, LinkNav } from '../components';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <div className='fixed z-50'>
      <nav>
        <div
          className={`${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          } w-screen h-screen flex items-center justify-center fixed bg-seconds duration-500 md:hidden z-10`}
          onClick={handleToggleMenu}
        >
          <LinkNav />
        </div>
        <a href=''>
          <h2 className='text-2xl font-semibold  md:text-3xl lg:text-3xl fixed top-6 left-5 xl:left-10'>
            Karlos
            <span className=' text-fourth'>Dev</span>
          </h2>
        </a>
        <div
          className='z-20 md:hidden'
          onClick={handleToggleMenu}
        >
          <Burger />
        </div>
        <div className='hidden  md:flex fixed right-5 top-7'>
          <LinkNav />
        </div>
      </nav>
    </div>
  );
};

export default Nav;
