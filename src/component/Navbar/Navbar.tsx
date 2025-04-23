import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-between items-center w-full p-4">
      <div className="flex flex-col">
        <p className="text-sm font-bold text-gray-500">Hello,</p>
        <p className="text-lg font-bold text-gray-800 -mt-2">Thathsara</p>
      </div>
      <div className="rounded-full w-10 h-10 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="/assets/images/instructor/instructor1.png"
          alt="instructor"
        />
      </div>
    </div>
  );
};

export default Navbar;
