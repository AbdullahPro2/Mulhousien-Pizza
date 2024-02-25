import React from 'react';
import { useSelector } from 'react-redux';

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  return (
    <div>
      <h1 className=" mt-4 text-center  text-xl font-bold lg:text-3xl">
        Cart{' '}
      </h1>
    </div>
  );
}

export default Cart;
