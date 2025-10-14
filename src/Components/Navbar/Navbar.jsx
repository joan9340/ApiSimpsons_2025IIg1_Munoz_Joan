import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Navbar.css'

function Navbar() {
  return (
   
    <nav className="navbar">
      <div className="navbar-logo">
        <h2> The Simpsons API</h2>


      </div>

      <ul className="navbar-links">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Inicio
          </NavLink>

        </li>
        <li>
          <NavLink to="/personajes" className={({ isActive }) => isActive ? "active-link" : ""}>Personajes
          </NavLink>
        </li>
        <li>
          <NavLink to="/lugares" className={({ isActive }) => isActive ? "active-link" : ""}>Lugares
          </NavLink>
        </li>
        <li>
          <NavLink to="/episodios" className={({ isActive }) => isActive ? "active-link" : ""}>Episodios
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
