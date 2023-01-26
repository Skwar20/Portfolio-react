import React from 'react';
const LinkNav = () => {
  return (
    <div>
      <ul className='md:flex'>
        <a href='#home'>
          <li className='navLink'>Home</li>
        </a>
        <a href='#About'>
          <li className='navLink'>About me</li>
        </a>
        <a href='#Portfolio'>
          <li className='navLink'>Portfolio</li>
        </a>
        <a href='#Services'>
          <li className='navLink'>Services</li>
        </a>
        <a href='#Contact'>
          <li className='navLink'>Contact</li>
        </a>
      </ul>
    </div>
  );
};

export default LinkNav;
