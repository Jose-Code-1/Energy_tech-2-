// src/components/Navbar/NavbarLogo.jsx

import React from 'react';

const NavbarLogo = () => {
  return (
    <div className="navbar-logo" style={styles.navbarLogo}>
      <img 
        src="/src/assets/logo.svg" 
        alt="Logo"
        style={styles.logo} 
      /> {/* Usamos el archivo SVG como imagen normal */}
      Energy tech
    </div>
  );
};

const styles = {
  navbarLogo: {
    display: 'flex',
    alignItems: 'left',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#333',
  },
  logo: {
    width: '100px', // Ajusta el tamaño del logo
    height: '100px',
    marginRight: '10px', // Espaciado entre el logo y el texto
  },
};

export default NavbarLogo;
