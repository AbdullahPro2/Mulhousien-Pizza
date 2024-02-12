import React, { useEffect, useState } from 'react';
import pizza_1 from '../assets/pizza_1.png';
import pizza_2 from '../assets/pizza_2.png';
import pizza_3 from '../assets/pizza_3.png';
import CarouselItem from './CarouselItem';
const carouselData = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description:
      'Classic pizza with tomato sauce, fresh mozzarella, basil, and a drizzle of olive oil.',
    image: pizza_1,
  },
  {
    id: 2,
    name: 'Pepperoni Pizza',
    description:
      'Delicious pizza topped with pepperoni slices, tomato sauce, and melted cheese.',
    image: pizza_2,
  },
  {
    id: 3,
    name: 'Vegetarian Pizza',
    description:
      'A veggie delight with a variety of colorful vegetables, tomato sauce, and cheese.',
    image: pizza_3,
  },
];
function Carousel() {
  const [translate, setTranslate] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (translate < 200 && currentIndex < 2) {
        const nextIndex = currentIndex + 1;
        setCurrentIndex(nextIndex);
        setTranslate(100 * nextIndex);
      } else {
        setTranslate(0);
        setCurrentIndex(0);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, carouselData, translate]);
  return (
    <div className="overflow-x-hidden">
      <div
        className={`flex translate-x-[-${translate}%] transition-all duration-500`}
      >
        {carouselData.map((item) => (
          <CarouselItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
