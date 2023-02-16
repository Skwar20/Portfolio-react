import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../index.css';

import { Pagination, Navigation, Autoplay } from 'swiper';

const Portfolio = () => {
  const projects = [
    {
      title: 'Weather app',
      description:
        'My weather app, made with HTML, CSS, and JavaScript, allows users to check the current weather for a given location. They can enter a city name or zip code and the app will display temperature, atmospheric pressure, humidity, and wind data. The app is available on computers and mobile devices.',
      demo: 'link',
      github: 'https://github.com/Skwar20/WeatherApp',
      img: '../public/WeatherApp.png',
    },
    {
      title: 'ToDo List',
      description:
        'ToDo List is an app that allows users to save and manage their tasks. It enables the adding, editing, and deleting of tasks, as well as marking tasks as completed. The app helps users organize their responsibilities and manage their time more efficiently. It is available on computers and mobile devices and is simple to use.',
      demo: 'link',
      github: '',
      img: '../public/comingSoon.png',
    },
    {
      title: 'Stopwatch',
      description:
        'StopWatch is an app that allows users to measure time and track their progress. Users can start, pause, or reset the timer and save an unlimited number of time measurements. The app is available on both computers and mobile devices and helps users improve their performance.',
      demo: 'link',
      github: '',
      img: '../public/comingSoon.png',
    },
  ];
  return (
    <div
      className='min-h-screen bg-first overflow-hidden'
      id='Portfolio'
    >
      <div className='w-3/5 bg-seconds h-10 -skew-x-[45deg] -translate-x-5 '></div>
      <div className='relative w-full max-width-[1200px] flex items-center flex-col py-6 px-5 md:py-12 md:px-7 lg:px-[6rem] xl:px-[15rem]'>
        <h2 className='text-2xl uppercase font-bold mt-5 mb-6 md:text-3xl'>
          portfolio
        </h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={100}
          loop={true}
          autoplay={{ delay: 10000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className='w-full h-auto overflow-visible relative p-4 bg-third rounded-lg'
        >
          {projects.map((project, i) => (
            <SwiperSlide
              key={i}
              className='w-full h-[490px] text-lg flex flex-col p-4 mr-auto bg-seconds border-2 border-third shadow-lg shadow-[#0e0e20]rounded-lg relative'
            >
              <div className='flex flex-col'>
                <img
                  src={project.img}
                  alt=''
                  className='block bg-cover w-full rounded-t-lg'
                />
                <div className='flex flex-col'>
                  <h3 className='text-2xl font-semibold text-fourth mt-5'>
                    {project.title}
                  </h3>
                  <p className='text-sm mt-2'>{project.description}</p>
                </div>
                <div className=' absolute bottom-5 mt-5 uppercase'>
                  <a
                    href={project.demo}
                    className='px-3 py-1 border border-gray-400 rounded'
                  >
                    Demo
                  </a>
                  <a
                    href={project.github}
                    className='px-3 py-1 ml-2 border border-gray-400 rounded'
                  >
                    github
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className='absolute bottom-0 right-4 z-10 h-16 w-[45px] bg-third after:absolute after:left-0 after:-top-5 after:border-third after:h-2 after:w-3 after:border-[22px] after:border-t-transparent border-purple-700'></div>
        </Swiper>
      </div>
    </div>
  );
};

export default Portfolio;
