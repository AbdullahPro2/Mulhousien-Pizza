import React from 'react';
import Home from './Home';
import Header from './Header';
import { Outlet } from 'react-router-dom';

function Applayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Applayout;
