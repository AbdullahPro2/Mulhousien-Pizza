import React from 'react';

function Loader() {
  return (
    <div className="fixed left-[50%]  top-[50%] z-50 h-20 w-20 translate-x-[-50%]  translate-y-[-50%]  animate-[rot_0.5s_linear_infinite]  rounded-full border-8 border-gray-400 border-t-black"></div>
  );
}

export default Loader;
