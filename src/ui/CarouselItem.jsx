import React from 'react';

function CarouselItem({ item }) {
  return (
    <div className="flex min-w-full">
      <div>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <div>
          <button>Order Now</button>
        </div>
      </div>
      <img src={item.image} className="w-[500px]" alt="pizza of carousel" />
    </div>
  );
}

export default CarouselItem;
