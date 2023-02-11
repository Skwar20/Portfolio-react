import React from 'react';

const LinkNav = ({ menuOpen }) => {
  return (
    <div>
      <ul className='md:flex'>
        <li className='navLink'>
          <a href='#Home'>Home</a>
        </li>
        <li className='navLink'>
          <a href='#About'>About me</a>
        </li>
        <li className='navLink'>
          <a href='#Portfolio'>Portfolio</a>
        </li>
        <li className='navLink'>
          <a href='#Services'>Services</a>
        </li>
        <li className='navLink'>
          <a href='#Contact'>Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default LinkNav;
