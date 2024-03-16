import React, { useState, useEffect } from 'react';
import Logo from '../../assets/principal-image.png';
import './header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar el scroll del usuario
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 flex items-center justify-between px-4 py-2 ${
        isScrolled ? 'bg-primary-color' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-8 mr-2 cursor-pointer" />
      </div>
      <div className="flex items-center">
        <button className=" mr-4 cursor-pointer">Iniciar sesión</button>
        <button className=" mr-4 cursor-pointer">Registrarse</button>
        <button className=" mr-4 cursor-pointer">Quiénes somos</button>
        <button className=" cursor-pointer">Soporte</button>
      </div>
    </header>
  );
};

export default Header;