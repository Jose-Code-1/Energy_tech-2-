// src/components/Navbar/Navbar.jsx

import React from 'react';
import './Navbar.css';
import NavbarLogo from './NavbarLogo';
import NavbarMenu from './NavbarMenu';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavbarLogo />
      <NavbarMenu />
    </nav>
  );
};

export default Navbar;