import React, { useState } from 'react';
import search from '../../assets/search-bar-icon.png';
import { getOrder } from '../../service/apiRestaurant';
import { useLoaderData, useNavigate } from 'react-router-dom';
function Orders() {
  const [query, setQuery] = useState();
  const order = useLoaderData();
  const navigate = useNavigate();
  console.log(order);
  const date = new Date(order.estimatedDelivery);

  const formattedDate = date.toLocaleString();
  return (
    <div>
      <h1 className=" mt-4 text-center  text-xl font-bold lg:text-3xl">
        Order
      </h1>
      <div className="relative mx-auto mb-7 mt-10 w-[80%] md:w-1/2">
        <input
          placeholder="Search your order"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className=" w- flex w-full rounded-lg border-2 border-orange-500 px-4 py-2 pr-12 focus:outline-none focus:ring focus:ring-orange-300"
        />
        <img
          src={search}
          alt="search bar icon"
          className="absolute right-3 top-[7px] cursor-pointer"
          onClick={() => navigate(`/mulhousienPizza/orders/${query}`)}
        />
      </div>
      <div className="m-2 mx-auto rounded-lg  border-4 border-orange-400 p-2 md:w-[80%] lg:w-[60%] lg:space-y-4 xl:w-[50%]">
        <p className="text-lg md:text-xl  xl:text-2xl ">
          Name: {order.customer}
        </p>
        <p className="text-lg md:text-xl  xl:text-2xl ">
          Order id: {order.id} ✨
        </p>
        <p className="text-lg md:text-xl  xl:text-2xl ">
          Status: {order.status} 🍕{' '}
        </p>
        <p className="text-lg md:text-xl xl:text-2xl ">
          Priority: {order.priority ? 'Yes' : 'No'} ✔
        </p>
        <p className="text-lg md:text-xl  xl:text-2xl ">
          Items: {order.cart.length}
        </p>
        <p className="text-lg md:text-xl  xl:text-2xl ">
          Price: {order.orderPrice} 💸
        </p>
        <p className="text-lg md:text-xl  xl:text-2xl ">
          Expected Delivery At: {formattedDate.split(',')[1]} 🚕
        </p>
      </div>
    </div>
  );
}
export async function loader({ params }) {
  // react router sent some data into the loader function as it calls it and one the property of object that loader recieves is "params" ok
  const order = await getOrder(params.orderId);
  return order;
}
export default Orders;
