import React from 'react';
import { useDispatch } from 'react-redux';
import { decreaseQuantity, increaseQuantity } from './CartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();
  return (
    <div className="grid grid-cols-[0.4fr_auto_0.5fr]  rounded-lg bg-orange-50 shadow-xl ">
      <div
        className="b flex min-w-[80px] flex-col
      items-center justify-between p-2 "
      >
        <span
          onClick={() => dispatch(increaseQuantity(item))}
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 hover:cursor-pointer hover:bg-orange-200 lg:text-lg "
        >
          +
        </span>
        <span className="lg:text-lg">{item.quantity}</span>
        <span
          onClick={() => dispatch(decreaseQuantity(item))}
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 hover:cursor-pointer hover:bg-orange-200 lg:text-lg"
        >
          -
        </span>
      </div>
      <img
        src={item.imageUrl}
        alt="pizza in cart"
        className="mx-auto my-auto w-40 rounded-md"
      />
      <div className="flex min-w-[120px] flex-col justify-between  px-2 py-6">
        <p className="lg:text-lg">{item.name}</p>
        <p className="lg:text-lg">total: {item.unitPrice * item.quantity}</p>
      </div>
    </div>
  );
}

export default CartItem;
