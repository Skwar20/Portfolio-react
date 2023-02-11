import React from 'react';
import { Squash as Hamburger } from 'hamburger-react';
const Burger = ({ menuOpen }) => {
  return (
    <div className='fixed right-5 top-1 z-20'>
      <Hamburger
        className='text-3xl'
        toggled={menuOpen}
        aria-label='Menu button'
      />
    </div>
  );
};

export default Burger;
