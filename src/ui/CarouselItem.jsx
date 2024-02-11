import React from 'react';

function CarouselItem({ item }) {
  return (
    <div className="flex min-w-full justify-between bg-orange-200 px-4 py-8 sm:h-[50vh] sm:px-12">
      <div className="flex w-[50%] flex-col justify-center ">
        <h2 className="mb-2 text-xl font-bold ">{item.name}</h2>
        <p className="text-sm">{item.description}</p>
        <button className="mt-2 rounded bg-white px-4 py-2 text-black hover:bg-green-200 focus:border-blue-300 focus:outline-none focus:ring">
          Order Now
        </button>
      </div>
      <img src={item.image} className="w-52 rounded" alt="pizza of carousel" />
    </div>
  );
}

export default CarouselItem;
