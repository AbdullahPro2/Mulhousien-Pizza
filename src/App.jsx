import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './ui/Applayout';
import Home from './ui/Home';
import Shop, { loader as menuLoader } from './ui/Shop';
import Cart from './features/cart/Cart';
import Orders, { loader as orderLoader } from './features/order/Orders';
import Error from './ui/Error';
import Createorder, {
  action as createOrderAction,
} from './features/order/Createorder';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/Mulhousien-Pizza/',
        element: <Home />,
      },
      {
        path: '/Mulhousien-Pizza/menu',
        element: <Shop />,
        loader: menuLoader,
        errorElement: <Error />,
      },

      {
        path: '/Mulhousien-Pizza/cart',
        element: <Cart />,
      },
      {
        path: '/Mulhousien-Pizza/order/new',
        element: <Createorder />,
        action: createOrderAction,
      },
      {
        path: '/Mulhousien-Pizza/orders/:orderId',
        element: <Orders />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
