import React from 'react';
import Home from './Home';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

function Applayout() {
  return (
    <div>
      <div className="min-h-screen">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Applayout;
