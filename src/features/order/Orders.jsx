import React, { useState } from 'react';
import search from '../../assets/search-bar-icon.png';
import { getOrder } from '../../service/apiRestaurant';
import { useLoaderData, useNavigate } from 'react-router-dom';
function Orders() {
  const [query, setQuery] = useState();
  const order = useLoaderData();
  const navigate = useNavigate();
  console.log(query);
  console.log(order);
  return (
    <div>
      <h1 className=" mt-4 text-center  text-xl font-bold lg:text-3xl">
        Order
      </h1>
      <div className="relative mx-auto mt-10 w-[80%] md:w-1/2 ">
        <input
          placeholder="Search your order"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className=" w- flex w-full rounded-lg border-2 border-orange-500 px-4 py-2 pr-12 focus:outline-none focus:ring focus:ring-orange-300"
        />
        <img
          src={search}
          alt="search bar icon"
          className="absolute right-3 top-[7px] "
          onClick={() => navigate(`/mulhousienPizza/orders/${query}`)}
        />
      </div>
    </div>
  );
}
export async function loader({ params }) {
  // react router sent some data into the loader function as it calls it and one the property of object that loader recieves is "params"
  const order = await getOrder(params.orderId);
  return order;
}
export default Orders;
