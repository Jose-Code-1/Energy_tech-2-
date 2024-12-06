
import React from 'react';
import NavbarItem from './NavbarItem';

const NavbarMenu = () => {
  return (
    <ul className="navbar-menu">
      <NavbarItem text="Inicio" link="/" />
      <NavbarItem text="Acerca de" link="/about" />
      <NavbarItem text="Servicios" link="/services" />
      <NavbarItem text="Contacto" link="/contact" />
    </ul>
  );
};

export default NavbarMenu;