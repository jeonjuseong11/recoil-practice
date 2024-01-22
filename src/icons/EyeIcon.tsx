import React from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

type EyeIconProps = {
  isVisible: boolean;
};

const EyeIcon: React.FC<EyeIconProps> = ({ isVisible }) => {
  return (
    <div className="relative">
      {isVisible ? (
        <FiEye className="w-6 h-6 transition-opacity duration-500 ease-in-out opacity-100" />
      ) : (
        <FiEyeOff className="w-6 h-6 transition-opacity duration-500 ease-in-out opacity-0" />
      )}
    </div>
  );
};

export default EyeIcon;
