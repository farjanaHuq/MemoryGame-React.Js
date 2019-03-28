import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./style.css";

function Nav() {
  return (
    <nav class="navbar">
    
        <a className="navbar-brand" href="/">
          Memory-Game
        </a>
        <span class="navbar-text">
           Click an image to begin!
        </span>
        <span class="navbar-text">
           Score: 0 | Top Score: 0
        </span>
        
    </nav>
  );
}

export default Nav;
