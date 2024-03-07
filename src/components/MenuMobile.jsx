import React, { useState } from 'react';

const MobileMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    console.log("Hola");
  };

  return (
    <div>
      {/* Icono del menú */}
      <div className="menu-icon md:hidden" onClick={toggleMenu}>
        <svg
          onClick={toggleMenu}
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </div>

      {/* Menú desplegable */}
      <ul
        className={`menu-mobile absolute bg-zinc-50 top-20 left-0 p-5 rounded-b-md w-full flex flex-col gap-4 shadow-lg ${
          isMenuOpen ? 'block' : 'hidden'
        } md:hidden`}
      >
        <li>
          <a className="hover:text-teal-600" href="/">
            Inicio
          </a>
        </li>
        <li>
          <a className="hover:text-teal-600" href="/about">
            Nosotros
          </a>
        </li>
        <li>
          <a
            className="hover:text-teal-600"
            href="https://w.app/Ktl6X9"
            target="_blank"
            rel="noopener noreferrer"
          >
            Catálogo
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
