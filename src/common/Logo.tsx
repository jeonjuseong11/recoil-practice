import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <div
      className="text-center
    text-xl 
    font-bold 
    text-gray-900 
    dark:text-white"
    >
      <NavLink to="/" className="text-4xl font-bold text-center mx-auto">
        README
      </NavLink>
    </div>
  );
};

export default Logo;
