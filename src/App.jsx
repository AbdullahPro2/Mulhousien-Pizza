import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './ui/Applayout';
import Home from './ui/Home';
import Shop from './ui/Shop';
import Registration from './features/user/Registration';
import Cart from './features/cart/Cart';
import Orders from './features/order/Orders';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/mulhousienPizza/',
        element: <Home />,
      },
      {
        path: '/mulhousienPizza/menu',
        element: <Shop />,
      },
      {
        path: '/mulhousienPizza/cart',
        element: <Cart />,
      },
      {
        path: '/mulhousienPizza/registration',
        element: <Registration />,
      },
      {
        path: '/mulhousienPizza/orders',
        element: <Orders />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
