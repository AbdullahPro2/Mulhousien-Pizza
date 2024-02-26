import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  return (
    <div className="">
      <h1 className=" mt-4 text-center text-xl font-bold lg:text-3xl">Cart</h1>
      <div
        className="flex
      flex-col gap-10 "
      >
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Cart;
