import React from 'react';
import { addToCart } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';

function Item({ item }) {
  const dispatch = useDispatch();
  const ingredient = item.ingredients.join(', ');
  return (
    <div className="flex flex-col justify-between space-y-2  p-4">
      <img src={item.imageUrl} alt={`${item.name}`} className="rounded-lg" />
      <div className="space-y-1">
        <h3 className="text-xl">{item.name}</h3>
        <p className="font-thin italic">{ingredient}</p>
        <p className="font-bold">${item.unitPrice}</p>
      </div>
      <button
        className="self-baseline bg-orange-400  p-2 text-white hover:bg-orange-300 hover:text-black"
        onClick={() => dispatch(addToCart(item))}
      >
        ADD TO CART
      </button>
    </div>
  );
}

export default Item;
