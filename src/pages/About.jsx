import React, { useState } from 'react';
import { Skills, Educations, Works } from '../components';

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState('skills');
  return (
    <div className='min-h-screen bg-seconds overflow-hidden'>
      <div className='w-3/5 bg-first h-10 -skew-x-[45deg] -translate-x-5 '></div>

      <div className='relative w-full max-width-[1200px] flex items-center flex-col py-6 px-4 md:py-12 md:px-7 lg:px-[6rem] xl:px-[15rem]'>
        <div className='w-[120px] h-[120px] rounded-full overflow-hidden bg-third md:w-[150px] md:h-[150px] flex items-center justify-center'>
          <p>Awatar</p>
        </div>
        <h2 className='text-2xl uppercase font-bold mt-5 mb-1 md:text-3xl'>
          about me
        </h2>
        <h3 className='text-sm text-fourth font-medium md:text-base'>
          17 years<span className='text-white m-1'>/</span>Karol{' '}
          <span className='text-white m-1'>/</span>
          Freelance
        </h3>
        <p className='mt-5 md:text-base'>
          Greetings, my name is Karol. My main goal while creating internet
          websites is correct "functionality", thats why i care about correct
          SEO, to make the page highly positioned in our browsers and get as
          much potentional customers as possible, The optimised code which makes
          the page more efficient.
        </p>
        <div className='w-full mt-4 text-lg font-medium transition-all flex items-center justify-evenly'>
          <button
            onClick={() => setActiveTab('skills')}
            className={`${
              activeTab == 'skills' ? 'text-fourth' : 'text-white'
            } uppercase duration-500 text-center px-2 py-1 border border-gray-400 rounded min-w-[100px]`}
          >
            skills
          </button>
          <button
            onClick={() => setActiveTab('educations')}
            className={`${
              activeTab == 'educations' ? 'text-fourth' : 'text-white'
            } uppercase mx-3 duration-500 text-center px-2 py-1 border border-gray-400 rounded min-w-[100px]`}
          >
            educations
          </button>
          <button
            onClick={() => setActiveTab('works')}
            className={`${
              activeTab == 'works' ? 'text-fourth' : 'text-white'
            } uppercase duration-500 text-center px-2 py-1 border border-gray-400 rounded min-w-[100px]`}
          >
            works
          </button>
        </div>
        {activeTab === 'skills' && <Skills />}
        {activeTab === 'educations' && <Educations />}
        {activeTab === 'works' && <Works />}
      </div>
    </div>
  );
};

export default AboutUs;
