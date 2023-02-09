import React from 'react';
import { BiCode, BiCodeAlt, BiUser, BiReceipt } from 'react-icons/bi';
import { AiTwotoneFolderOpen, AiOutlineFile } from 'react-icons/ai';
import { RiContactsBookLine } from 'react-icons/ri';
const Home = () => {
  return (
    <div
      className='w-auto h-screen relative flex flex-col items-center justify-center lg:items-start lg:ml-[6rem]'
      id='Home'
    >
      <p className='p-1 text-2xl uppercase bg-slate-200 text-black font-semibold md:text-4xl lg:text-5xl'>
        Hello, I'am
      </p>
      <h1 className='text-2xl uppercase text-fourth font-bold md:text-5xl lg:text-5xl'>
        Frontend Developer
      </h1>
      <div className='text-gray-500/20 uppercase text-sm px-8 mt-7'>
        <BiCode className='text-2xl  md:text-3xl' />
        <p className='font-bold ml-5 md:text-base'>
          programming and creating websites is my passion
        </p>
        <BiCodeAlt className='text-2xl md:text-3xl' />
      </div>
      <BiUser className='text-3xl xl:text-4xl text-gray-300/20 blur-[0.7px] absolute top-[12%] left-[10%] hover:scale-125 duration-300' />
      <AiTwotoneFolderOpen className='text-3xl xl:text-4xl text-gray-300/20 blur-[0.7px] absolute top-[23%] left-[50%] hover:scale-125 duration-300' />
      <RiContactsBookLine className='text-3xl xl:text-4xl text-gray-300/20 blur-[0.7px] absolute top-[17%] right-[10%] hover:scale-125 duration-300' />
      <AiOutlineFile className='text-3xl xl:text-4xl text-gray-300/20 blur-[0.7px] absolute bottom-[17%] left-[23%] hover:scale-125 duration-300' />
      <BiReceipt className='text-3xl xl:text-4xl text-gray-300/20 blur-[0.7px] absolute bottom-[10%] right-[23%] hover:scale-125 duration-300' />
    </div>
  );
};

export default Home;
