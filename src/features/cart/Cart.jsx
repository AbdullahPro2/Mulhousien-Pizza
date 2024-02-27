import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();
  console.log(cart);

  return (
    <div className="">
      <h1 className=" mb-10 mt-4 text-center text-xl font-bold lg:text-3xl">
        Cart
      </h1>
      {cart.length > 0 ? (
        <div>
          <div className="mx-auto grid gap-5 px-4 py-1 md:w-[50%] md:p-3 xl:p-10">
            {cart.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </div>
          <button
            className="mx-auto my-5 flex self-baseline rounded-md bg-orange-400 p-2 text-white hover:bg-orange-300 hover:text-black"
            onClick={() => navigate('/mulhousienPizza/order/new')}
          >
            Place Order
          </button>
        </div>
      ) : (
        <>
          <p className="mt-20 text-center text-2xl">Cart Empty !</p>
          <button
            className="mx-auto my-5 flex self-baseline rounded-md bg-orange-400 p-2 text-white hover:bg-orange-300 hover:text-black"
            onClick={() => navigate('/mulhousienPizza/menu')}
          >
            Shop your meal now 👉
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
