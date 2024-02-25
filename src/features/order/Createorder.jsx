import React from 'react';
import { Form, redirect } from 'react-router-dom';
import { createOrder } from '../../service/apiRestaurant';
const fakeCart = [
  {
    pizzaId: 12,
    name: 'mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 13,
    name: 'mafsediterranean',
    quantity: 1,
    unitPrice: 136,
    totalPrice: 322,
  },
];
function Createorder() {
  const cart = fakeCart;
  return (
    <div>
      <h1 className=" mt-4 text-center  text-xl font-bold lg:text-3xl">
        Ready to place your order
      </h1>
      <Form className="flex flex-col" method="POST">
        <div>
          <label>First Name</label>
          <input name="customer" required type="text" />
        </div>
        <div>
          <label>Phone Number</label>
          <input type="tel" name="phone" required />
        </div>
        <div>
          <label>Address</label>
          <input type="text" name="address" required />
        </div>
        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            htmlFor="priority"
          />
          <label>Want to give your order priority</label>
        </div>
        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button>Order now</button>
        </div>
      </Form>
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
