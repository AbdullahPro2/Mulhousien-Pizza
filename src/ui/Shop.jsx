import React from 'react';
import { getMenu } from '../service/apiRestaurant';
import { useLoaderData } from 'react-router-dom';

function Shop() {
  const menu = useLoaderData();
  console.log(menu);
  return <div>Shop</div>;
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}
export default Shop;
