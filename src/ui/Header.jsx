import React, { useState } from 'react';
import Logo from '../assets/logo-no-background.svg';
import menuIcon from '../assets/MenuIcon.png';
import cross from '../assets/CrossIcon.png';
import { Link } from 'react-router-dom';
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="relative z-40 flex h-16 items-center justify-between bg-orange-300 px-2 py-1 text-sm md:text-base xl:text-lg">
      <img src={Logo} alt="Logo" className="w-52 md:w-60 lg:w-72" />

      <div className="w-16">
        {isOpen && (
          <img
            src={cross}
            alt="cross"
            className="absolute right-0 top-[20%] z-10 w-10 cursor-pointer xl:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          />
        )}
        {!isOpen && (
          <img
            src={menuIcon}
            alt="menu icon"
            className="absolute right-0 top-[20%] z-10 w-10 cursor-pointer xl:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          />
        )}
        <ul
          className={`absolute right-0 top-[-800px] flex h-screen w-[0px] flex-col items-center justify-center gap-16 overflow-hidden bg-orange-300  transition-all duration-300 xl:top-[40%] xl:h-auto xl:w-auto xl:flex-row xl:items-start xl:justify-end  xl:gap-8 xl:bg-transparent xl:px-2 xl:text-lg  ${
            isOpen ? ' top-[0px] w-[50%]  ' : ''
          } `}
        >
          <Link to="/mulhousienPizza/">
            <li
              onClick={() => setIsOpen(false)}
              className={` cursor-pointer justify-center  xl:inline   ${
                isOpen ? 'flex w-80' : 'hidden'
              }`}
            >
              Home
            </li>
          </Link>
          <Link to="/mulhousienPizza/pizzas">
            <li
              onClick={() => setIsOpen(false)}
              className={` cursor-pointer justify-center xl:inline   ${
                isOpen ? 'flex w-80' : 'hidden'
              }`}
            >
              Shop
            </li>
          </Link>
          <Link to="/mulhousienPizza/cart">
            <li
              onClick={() => setIsOpen(false)}
              className={` cursor-pointer justify-center xl:inline   ${
                isOpen ? 'flex w-80' : 'hidden'
              }`}
            >
              Cart
            </li>
          </Link>
          <Link to="/mulhousienPizza/orders">
            <li
              onClick={() => setIsOpen(false)}
              className={` cursor-pointer justify-center xl:inline   ${
                isOpen ? 'flex w-80' : 'hidden'
              }`}
            >
              Orders
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
