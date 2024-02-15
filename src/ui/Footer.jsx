import React from 'react';
import Logo from '../assets/logo-no-background.svg';

function Footer() {
  return (
    <div className="flex justify-between bg-orange-400">
      <div>
        <img src={Logo} alt="LOGO" />
      </div>
      <div className="">Main</div>
      <div>Social Links</div>
    </div>
  );
}

export default Footer;
