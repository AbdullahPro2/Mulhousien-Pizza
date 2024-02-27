import React from 'react';
import { Form, redirect, useNavigate } from 'react-router-dom';
import { createOrder } from '../../service/apiRestaurant';
import { useSelector } from 'react-redux';

function Createorder() {
  const cart = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();
  return (
    <div>
      <h1 className=" mb-10 mt-4  text-center text-xl font-bold lg:text-3xl">
        Ready to place your order
      </h1>
      {cart.length > 0 ? (
        <Form
          className="mx-auto flex flex-col gap-4 px-6 py-2 md:w-[80%] lg:w-[60%] lg:gap-10 xl:w-[50%]"
          method="POST"
        >
          <div className="flex flex-col">
            <label>First Name</label>
            <input
              name="customer"
              required
              type="text"
              className="rounded-md border-2  border-orange-500 xs:h-8 md:h-10"
            />
          </div>
          <div className="flex flex-col">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              className="rounded-md border-2  border-orange-500 xs:h-8 md:h-10"
            />
          </div>
          <div className="flex flex-col">
            <label>Address</label>
            <input
              type="text"
              name="address"
              required
              className="rounded-md border-2  border-orange-500 xs:h-8 md:h-10"
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="priority"
              id="priority"
              htmlFor="priority"
              className="h-7 w-7"
            />
            <label>Want to give your order priority</label>
          </div>
          <div>
            <input type="hidden" name="cart" value={JSON.stringify(cart)} />
            <button className="self-baseline rounded-lg  bg-orange-400 p-2 text-white hover:bg-orange-300 hover:text-black">
              Order now
            </button>
          </div>
        </Form>
      ) : (
        <>
          <p className="mt-20 text-center text-2xl">Your cart is empty!</p>
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

// When the form will be submitted the react router will then call this action function and will pass in the request that was submitted
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'on',
  };

  const newOrder = await createOrder(order);
  return redirect(`/mulhousienPizza/orders/${newOrder.id}`);
}

export default Createorder;
