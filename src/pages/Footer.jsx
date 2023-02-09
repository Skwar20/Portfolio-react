import React from 'react';
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineInstagram,
} from 'react-icons/ai';

const footer = () => {
  return (
    <div className='w-full flex items-center justify-between py-3 px-4 md:py-3 md:px-5 lg:px-7'>
      <p className='md:text-xl'>
        KarlosDev <span>|</span> &copy;2023
      </p>
      <div className='flex text-lg md:text-2xl'>
        <a href='https://github.com/Skwar20'>
          <AiFillGithub className=' hover:text-fourth duration-500' />
        </a>
        <a href='https://www.instagram.com/karol_buszek/'>
          <AiOutlineInstagram className='mx-3 md:mx-5 lg:mx-7 hover:text-fourth duration-500' />
        </a>
        <a href='https://www.linkedin.com/in/karol-skwarek-259064259/'>
          <AiFillLinkedin className=' hover:text-fourth duration-500' />
        </a>
      </div>
    </div>
  );
};

export default footer;
