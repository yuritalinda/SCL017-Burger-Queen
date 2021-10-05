import React from "react";
import '../Styles/Navbar.css';

export default function Navbar (){
  return(
    <nav className="navbar-container">
      <ul className="navbar-links" >
        
        <li className="link">Mesa 1</li>
        <li className="link">Mesa 2</li>
        <li className="link">Mesa 3</li>
        <li className="link">Mesa 4</li>
        <li className="link">Mesa 5</li>

      </ul>
    </nav>
  )
}