import React from 'react';

function ServiceItem({ image, para, heading }) {
  return (
    <div className=" flex flex-col items-center justify-center gap-1 px-5">
      <img src={image} alt="services" className="" />
      <div className="md:mt-2 md:h-[300px]">
        <h2 className="text-center font-black md:text-xl">{heading}</h2>
        <p className="text-justify md:text-lg">{para}</p>
      </div>
    </div>
  );
}

export default ServiceItem;
