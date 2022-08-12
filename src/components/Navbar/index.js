import React, { useState } from 'react';
import Logo from '../../asset/Exigent Logo.png';
import NavItems from './navItems.json';

const Navbar = () => {
  const [expandNav, setexpandNav] = useState(false);

  return (
    <nav className="navigation">
      <img className="Logo" src={Logo} alt="logo" />
      <button
        type="button"
        className="hamburger"
        onClick={() => setexpandNav(!expandNav)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          expandNav ? 'navigation-menu expanded' : 'navigation-menu'
        }
      >
        <ul>

          {NavItems.map((item) => (
            <li key={item.id}>
              {item.navText}
            </li>
          ))}
        </ul>

        <button className="actionButton" type="button"> Button One</button>

      </div>
    </nav>
  );
};

export default Navbar;
