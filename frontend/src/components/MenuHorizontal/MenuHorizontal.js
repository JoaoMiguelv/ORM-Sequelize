import React from "react";
import './MenuHorizontal.css';
import {Link, link} from "react-router-dom"


function MenuHorizontal() {
  return (
    <div className="MenuHorizontal">
      <nav className="navMenu">
        <ul>
          <li> <Link to='/'>Home</Link> </li>
          <li> <Link to='/categorias'>Categorias</Link> </li>
          <li> <Link to='/departamentos'>Departamentos</Link> </li>

        </ul>
      </nav>
    </div>
  );
}

export default MenuHorizontal;
