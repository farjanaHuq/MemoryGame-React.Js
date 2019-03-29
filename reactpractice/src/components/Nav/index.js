import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./style.css";

class Nav extends Component {
  
  render(){
    return (
      <nav class="navbar navbar-expand-sm  sticky-top">
          <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav  d-flex justify-content-between container">
                <li class="nav-item ">
                <a className="navbar-brand" href="/"> Memory-Game </a>
                </li>
                <li class="nav-item">
                   <span>{this.props.msgForPlayer}</span>
                </li>
                <li class="nav-item">
                  <span>
                    Score: {this.props.score} | Top Score: {this.props.topScore}
                  </span>
                </li>
              </ul>
        </div>       
          
      </nav>
    );
  } 
}

export default Nav;
