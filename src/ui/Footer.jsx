import React from 'react';
import Logo from '../assets/logo-no-background.svg';
import instagram from '../assets/instagram.png';
import pinterest from '../assets/pinterest.png';
import linkedin from '../assets/linkedin.png';
import twitter from '../assets/twitter.png';
import github from '../assets/github.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="flex flex-col items-center justify-between gap-5 bg-orange-400 px-4 py-8 md:flex-row md:gap-2">
      <Link to="/mulhousienPizza/">
        <img src={Logo} alt="Mulhousien Pizza" className="w-52  " />
      </Link>

      <ul className="flex gap-3 md:text-xl ">
        <Link to="/mulhousienPizza/">
          <li className={` cursor-pointer justify-center  xl:inline  `}>
            Home
          </li>
        </Link>
        <Link to="/mulhousienPizza/menu">
          <li className={` cursor-pointer justify-center  xl:inline  `}>
            Menu
          </li>
        </Link>
        <Link to="/mulhousienPizza/cart">
          <li className={` cursor-pointer justify-center  xl:inline  `}>
            Cart
          </li>
        </Link>
        <Link to="/mulhousienPizza/orders">
          <li className={` cursor-pointer justify-center  xl:inline  `}>
            Orders
          </li>
        </Link>
      </ul>
      <div className="flex gap-3 ">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="Instagram" className="" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={pinterest} alt="Pinterest" className="" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" className="" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={twitter} alt="Twitter" className="" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" className="" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
