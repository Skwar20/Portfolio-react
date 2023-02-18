import React from 'react';

const Form = () => {
  return (
    <div className='fixed top-0 w-full h-full bg-first z-20 overflow-hidden'>
      <div className='relative h-screen flex flex-col items-center justify-center p-10 text-center'>
        <h2 className='fixed top-3 left-5 text-2xl font-semibold  md:text-3xl lg:text-3xl xl:top-4 xl:left-10'>
          Karlos
          <span className=' text-fourth'>Dev</span>
        </h2>
        <h3 className='text-fourth font-semibold mb-2 text-4xl'>Thanks!</h3>
        <p className='text-lg mb-10'>
          I should to your message shortly.{' '}
          <a
            href='/'
            className='border-b border-fourth font-medium cursor-pointer'
          >
            Back to the home page
          </a>
        </p>
        <img
          src='./undraw_form.svg'
          alt=''
          className='h-[180px] z-20'
        />
      </div>
    </div>
  );
};

export default Form;
