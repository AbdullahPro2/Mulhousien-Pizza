import React from 'react';

function CarouselItem({ item }) {
  return (
    <div className="flex min-w-full justify-between gap-4 bg-orange-200 px-4 py-8 sm:h-[60vh] sm:px-12">
      <div className="flex w-[50%] flex-col justify-center ">
        <h2 className="mb-2 text-xl font-bold sm:text-2xl ">{item.name}</h2>
        <p className="text-sm sm:text-lg lg:w-2/3">{item.description}</p>
        <button className=" mt-auto w-36 rounded border-2 border-black bg-orange-50 px-4 py-2 text-black hover:bg-green-200 focus:border-blue-300 sm:w-1/2 sm:text-xl md:mt-4">
          Order Now
        </button>
      </div>
      <img
        src={item.image}
        className="w-36 rounded sm:w-52 md:w-64 lg:mr-32 lg:w-72"
        alt="pizza of carousel"
      />
    </div>
  );
}

export default CarouselItem;
