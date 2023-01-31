import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaSass, FaReact, FaWordpress } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  return (
    <div className='w-full mt-2 ml-2 py-2'>
      <h3 className='text-lg uppercase'>programming languages:</h3>
      <div>
        <div className='grid grid-cols-2 gap-5 mt-5'>
          <div className='flex flex-col items-center hover:text-fourth'>
            <AiFillHtml5 className='text-4xl duration-300' />
            <p className='text-base text-gray-400 uppercase mt-1'>Html</p>
          </div>
          <div className='flex flex-col items-center hover:text-fourth'>
            <FaCss3Alt className='text-4xl duration-300' />
            <p className='text-base text-gray-400 uppercase mt-1'>Css</p>
          </div>
          <div className='flex flex-col items-center hover:text-fourth'>
            <SiJavascript className='text-4xl duration-300' />
            <p className='text-base text-gray-400 uppercase mt-1'>JavaScript</p>
          </div>
          <div className='flex flex-col items-center hover:text-fourth'>
            <FaSass className='text-4xl duration-300' />
            <p className='text-base text-gray-400 uppercase mt-1'>Sass</p>
          </div>
          <div className='flex flex-col items-center hover:text-fourth'>
            <FaWordpress className='text-4xl duration-300' />
            <p className='text-base text-gray-400 uppercase mt-1'>WordPress</p>
          </div>
          <div className='flex flex-col items-center hover:text-fourth'>
            <SiTailwindcss className='text-4xl duration-300' />
            <p className='text-base text-gray-400 uppercase mt-1'>Tailwind</p>
          </div>
          <div className='flex flex-col items-center hover:text-fourth'>
            <FaReact className='text-4xl duration-300' />
            <p className='text-base text-gray-400 uppercase mt-1'>React</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
