import React, { useState } from 'react';
import Logo from '../assets/logo-no-background.svg';
import menuIcon from '../assets/MenuIcon.png';
import cross from '../assets/CrossIcon.png';
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="relative z-40 flex items-center justify-between bg-orange-400 px-2 py-1 text-sm md:text-base xl:text-lg">
      <img src={Logo} alt="Logo" className="w-56" />

      <div className="w-16">
        {isOpen && (
          <img
            src={cross}
            alt="cross"
            className="absolute right-0 top-[40%] z-10 w-10 cursor-pointer xl:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          />
        )}
        {!isOpen && (
          <img
            src={menuIcon}
            alt="menu icon"
            className="absolute right-0 top-[40%] z-10 w-10 cursor-pointer xl:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          />
        )}
        <ul
          className={`absolute right-0 top-0 flex  h-screen w-[0px] flex-col items-center justify-center gap-16 bg-orange-300  transition-all duration-300 xl:top-[40%] xl:h-auto xl:w-auto xl:flex-row xl:items-start xl:justify-end  xl:gap-8 xl:bg-transparent xl:px-2 xl:text-lg ${
            isOpen ? ' w-[50%] ' : ''
          } `}
        >
          <li
            onClick={() => setIsOpen(false)}
            className={`w-80 justify-center  xl:inline   ${
              isOpen ? 'flex' : 'hidden'
            }`}
          >
            Home
          </li>
          <li
            onClick={() => setIsOpen(false)}
            className={`w-80 justify-center  xl:inline   ${
              isOpen ? 'flex' : 'hidden'
            }`}
          >
            Shop
          </li>
          <li
            onClick={() => setIsOpen(false)}
            className={`w-80 justify-center  xl:inline   ${
              isOpen ? 'flex' : 'hidden'
            }`}
          >
            Cart
          </li>
          <li
            onClick={() => setIsOpen(false)}
            className={`w-80 justify-center  xl:inline   ${
              isOpen ? 'flex' : 'hidden'
            }`}
          >
            Orders
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
