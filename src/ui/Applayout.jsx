import React from 'react';
import Home from './Home';
import Header from './Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from './Footer';
import Loader from './Loader';

function Applayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  return (
    <div className="relative">
      {isLoading && <Loader />}
      <div className="min-h-screen">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Applayout;
