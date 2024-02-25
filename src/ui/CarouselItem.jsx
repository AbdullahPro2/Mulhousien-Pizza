import React from 'react';
import { useNavigate } from 'react-router-dom';

function CarouselItem({ item }) {
  const navigate = useNavigate();

  return (
    <div className=" grid min-w-full grid-cols-2 gap-2 bg-orange-200 px-4 py-8 sm:h-[60vh] sm:px-12">
      <div className="flex  flex-col justify-center  md:items-end ">
        <h2 className="mb-2 text-xl font-bold sm:text-2xl ">{item.name}</h2>
        <p className="text-sm sm:text-lg md:text-right lg:w-2/3">
          {item.description}
        </p>{' '}
        <div className="flex flex-col gap-2 md:w-[80%] md:flex-row">
          <button
            className=" mt-auto w-36 rounded  bg-orange-100 px-2 py-2 text-sm text-black hover:bg-orange-300  sm:w-1/2 sm:text-xl md:mt-4"
            onClick={() => navigate('/mulhousienPizza/menu')}
          >
            Menu
          </button>
          <button
            className=" mt-auto w-36 rounded  bg-orange-500 px-2 py-2 text-sm text-white hover:bg-orange-300 sm:w-1/2 sm:text-xl md:mt-4"
            onClick={() => navigate('/mulhousienPizza/order/new')}
          >
            Order Now
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center md:justify-start  ">
        <img
          src={item.image}
          className=" h-40 w-40 sm:h-52 sm:w-52 md:h-64 md:w-64  lg:h-72 lg:w-72"
          alt="pizza of carousel"
        />
      </div>
    </div>
  );
}

export default CarouselItem;
