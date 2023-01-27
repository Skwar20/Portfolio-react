import React from 'react';
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from 'react-icons/ai';

const AboutUs = () => {
  return (
    <div className='h-auto bg-seconds'>
      <div className='w-3/5 bg-first h-10 -skew-x-[45deg] -translate-x-5'></div>

      <div className='relative w-full max-width-[1200px] flex items-center flex-col my-10 py-6 px-4'>
        <div className='w-[120px] h-[120px] rounded-full overflow-hidden bg-third'>
          <img
            src='../public/me.webp'
            alt='Awatar Karlosa'
          />
        </div>
        <h2 className='text-2xl uppercase font-bold mt-5 mb-1'>about me</h2>
        <h3 className='text-sm text-fourth font-medium'>
          17 years<span className='text-white m-1'>/</span>Karol{' '}
          <span className='text-white m-1'>/</span>
          Freelance
        </h3>
        <p className='mt-5'>
          Greetings, my name is Karol. My main goal while creating internet
          websites is correct "functionality", thats why i care about correct
          SEO, to make the page highly positioned in our browsers and get as
          much potentional customers as possible, The optimised code which makes
          the page more efficient.
        </p>
        <div className='w-screen flex justify-end px-3 text-xl mt-3'>
          <AiOutlineGithub className='hover:text-fourth duration-300' />
          <AiFillLinkedin className='mx-2 hover:text-fourth duration-300' />
          <AiOutlineInstagram className='hover:text-fourth duration-300' />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
