import React, { useEffect, useRef } from 'react';

const Educations = ({ activeTab }) => {
  const ref = useRef(null);
  useEffect(() => {
    const div = ref.current;
    setTimeout(() => {
      div.classList.remove('-translate-x-2/4');
      div.classList.add('translate-x-0');
    }, 1);
  }, []);
  return (
    <div
      ref={ref}
      className={`${
        activeTab === 'education' && 'translate-x-0'
      } ease-out w-full mt-2 ml-2 py-2 duration-700 -translate-x-2/4`}
    >
      <div className='border-b-gray-700 border-b my-2'></div>
      <div className='w-full flex justify-between text-fourth font-semibold uppercase'>
        <h4>PROGRAMMER</h4>
        <p>2020-now</p>
      </div>
      <p className='text-lg md:text-xl'>Zespół Szkół Technicznych nr 1</p>
      <div className='border-b-gray-700 border-b my-2'></div>
    </div>
  );
};

export default Educations;