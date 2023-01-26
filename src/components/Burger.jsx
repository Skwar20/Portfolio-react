import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
const Burger = () => {
  return (
    <div className='fixed right-5 top-3 z-20'>
      <RxHamburgerMenu className='text-3xl' />
    </div>
  );
};

export default Burger;
