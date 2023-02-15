import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../index.css';

import { Pagination, Navigation } from 'swiper';

const Portfolio = () => {
  const projects = [
    {
      title: 'Weather app',
      description:
        'My weather app, made with HTML, CSS, and JavaScript, allows users to check the current weather for a given location. They can enter a city name or zip code and the app will display temperature, atmospheric pressure, humidity, and wind data. The app is available on computers and mobile devices.',
      demo: 'link',
      img: '../public/WeatherApp.png',
    },
    {
      title: 'Weather app',
      description: 'lorem2',
      img: '../public/comingSoon.png',
    },
    {
      title: 'Weather app',
      description: 'lorem3',
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
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Pagination, Navigation]}
          className='w-full h-[490px] p-4 mr-auto bg-third rounded-lg'
        >
          {projects.map((project, i) => (
            <SwiperSlide
              key={i}
              className='text-lg flex flex-col'
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
                <div className='mt-5 uppercase'>
                  <a
                    href={project.demo}
                    className='px-3 py-1 border border-gray-400 rounded'
                  >
                    Demo
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Portfolio;
