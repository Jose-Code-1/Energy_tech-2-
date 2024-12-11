
// Importamos las librerías necesarias y el componente NavbarItem.
import React from 'react';
import NavbarItem from './NavbarItem';

// Definimos el componente NavbarMenu.
const NavbarMenu = () => {
  return (
    <ul className="navbar-menu">
      {/* Elemento del menú para la página de inicio */}
      <NavbarItem text="Inicio" link="/" />
      {/* Elemento del menú para la página de datos */}
      <NavbarItem text="Datos" link="/datos" />
    </ul>
  );
};

// Exportamos el componente para que se use en Navbar.
export default NavbarMenu;
