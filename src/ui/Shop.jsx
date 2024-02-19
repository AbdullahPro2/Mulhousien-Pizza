import React from 'react';
import { getMenu } from '../service/apiRestaurant';
import { useLoaderData } from 'react-router-dom';
import Item from './Item';

function Shop() {
  const menu = useLoaderData();
  console.log(menu);
  return (
    <div className="">
      <h1 className=" mt-4 text-center  text-xl font-bold lg:text-3xl">Menu</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {menu.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}
export default Shop;
