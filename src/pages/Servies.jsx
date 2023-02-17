import React from 'react';

const Servies = () => {
  return (
    <div
      className='min-h-screen bg-second overflow-hidden'
      id='Services'
    >
      <div className='w-3/5 bg-first h-10 -skew-x-[45deg] -translate-x-5 '></div>
      <div className='relative w-full max-width-[1200px] flex items-center flex-col py-6 px-5 md:py-12 md:px-7 lg:px-[6rem] xl:px-[15rem]'>
        <h2 className='relative text-2xl uppercase font-bold mt-5 mb-6 md:text-3xl after:absolute after:bottom-0 after:left-0 after:w-1/4 after:h-[1px] after:bg-fourth'>
          services
        </h2>
      </div>
    </div>
  );
};

export default Servies;
