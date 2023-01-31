import React, { useState } from 'react';
import { Skills, Educations, Works } from '../components';

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState('skills');
  return (
    <div className='min-h-screen bg-seconds'>
      <div className='w-3/5 bg-first h-10 -skew-x-[45deg] -translate-x-5'></div>

      <div className='relative w-full max-width-[1200px] flex items-center flex-col py-6 px-4'>
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
        <div className='w-full mt-3 text-lg font-medium'>
          <button
            onClick={() => setActiveTab('skills')}
            className={`${
              activeTab == 'skills' ? 'text-fourth' : 'text-white'
            } uppercase duration-500`}
          >
            skills
          </button>
          <button
            onClick={() => setActiveTab('educations')}
            className={`${
              activeTab == 'educations' ? 'text-fourth' : 'text-white'
            } uppercase mx-3 duration-500`}
          >
            educations
          </button>
          <button
            onClick={() => setActiveTab('works')}
            className={`${
              activeTab == 'works' ? 'text-fourth' : 'text-white'
            } uppercase duration-500`}
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
