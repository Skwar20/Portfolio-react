import React from 'react';
const LinkNav = () => {
  return (
    <div>
      <ul className='md:flex'>
        <a href='#home'>
          <li className='py-5 text-2xl font-light md:py-0 md:pl-7 md:text-xl lg:px-7 xl:2xl hover:text-fourth duration-300'>
            Home
          </li>
        </a>
        <a href='#About'>
          <li className='py-5 text-2xl font-light md:py-0 md:pl-7 md:text-xl lg:px-7 xl:2xl hover:text-fourth duration-300'>
            About me
          </li>
        </a>
        <a href='#Portfolio'>
          <li className='py-5 text-2xl font-light md:py-0 md:pl-7 md:text-xl lg:px-7 xl:2xl hover:text-fourth duration-300'>
            Portfolio
          </li>
        </a>
        <a href='#Services'>
          <li className='py-5 text-2xl font-light md:py-0 md:pl-7 md:text-xl lg:px-7 xl:2xl hover:text-fourth duration-300'>
            Services
          </li>
        </a>
        <a href='#Contact'>
          <li className='py-5 text-2xl font-light md:py-0 md:pl-7 md:text-xl lg:px-7 xl:2xl hover:text-fourth duration-300'>
            Contact
          </li>
        </a>
      </ul>
    </div>
  );
};

export default LinkNav;
