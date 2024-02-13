import React from 'react';
import ServiceItem from './ServiceItem';
import freeDelivery from '../assets/freeDelivery.png';
import fastDelivery from '../assets/fastDelivery.png';
import securePayment from '../assets/secure.png';

function Services() {
  return (
    <div>
      <h1
        className="mb-10 px-5 text-center text-xl font-bold md:flex-row lg:px-12 lg:text-3xl
      xl:font-black"
      >
        Taste Our Services
      </h1>
      <div className="flex flex-col items-center justify-center gap-5 md:flex-row md:gap-0 ">
        <ServiceItem
          image={freeDelivery}
          para="Enjoy the convenience of free delivery with Mulhousien Pizzas. Your favorite pizzas delivered to your doorstep without any additional cost."
          heading="Free Delivery"
        />
        <ServiceItem
          image={fastDelivery}
          para="Our commitment to delivering delicious pizzas swiftly ensures you get a delightful dining experience without any wait."
          heading="Quick Service"
        />
        <ServiceItem
          image={securePayment}
          para="Our reliable and secure payment system ensures that your online orders are processed with the utmost safety."
          heading="Secure Transaction"
        />
      </div>
    </div>
  );
}

export default Services;
