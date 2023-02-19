import React from 'react';
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
      alt: 'Zdjecie pokazujące wygląd projektu WeatherApp',
      demo: 'https://skwar20.github.io/WeatherApp/',
      github: 'https://github.com/Skwar20/WeatherApp',
      img: './WeatherApp.png',
    },
    {
      title: 'ToDo List',
      description:
        'ToDo List is an app that allows users to save and manage their tasks. It enables the adding, editing, and deleting of tasks, as well as marking tasks as completed. The app helps users organize their responsibilities and manage their time more efficiently. It is available on computers and mobile devices and is simple to use.',
      alt: 'Zdjecie pokazujące wygląd projektu WeatherApp',
      demo: '',
      github: '',
      img: './comingSoon.png',
    },
    {
      title: 'Stopwatch',
      description:
        'StopWatch is an app that allows users to measure time and track their progress. Users can start, pause, or reset the timer and save an unlimited number of time measurements. The app is available on both computers and mobile devices and helps users improve their performance.',
      alt: 'Zdjecie pokazujące wygląd projektu WeatherApp',
      demo: '',
      github: '',
      img: './comingSoon.png',
    },
  ];
  return (
    <div
      className='h-auto bg-first overflow-hidden'
      id='Portfolio'
    >
      <div className='w-3/5 bg-second h-10 -skew-x-[45deg] -translate-x-5 '></div>
      <div className='relative w-full max-w-[1300px] flex items-center flex-col mx-auto py-6 pb-12 px-5'>
        <h2 className='relative text-2xl uppercase font-bold mt-5 mb-6 md:text-3xl after:absolute after:bottom-0 after:left-0 after:w-1/4 after:h-[1px] after:bg-fourth'>
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
          className='w-full h-auto relative p-5 bg-third rounded-lg'
        >
          {projects.map((project, i) => (
            <SwiperSlide
              key={i}
              className='w-full h-[550px] text-lg flex flex-col p-4 mr-auto bg-first rounded-lg'
            >
              <div className='flex flex-col rounded-t-lg overflow-hidden'>
                <img
                  src={project.img}
                  alt={project.alt}
                  className='block bg-cover w-full overflow-hidden hover:scale-105 duration-300'
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
                    className='px-3 py-1 border border-gray-400 rounded hover:border-fourth hover:text-fourth'
                  >
                    Demo
                  </a>
                  <a
                    href={project.github}
                    className='px-3 py-1 ml-2 border border-gray-400 rounded hover:border-fourth hover:text-fourth'
                  >
                    github
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
