import React from "react";
import "./style.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'

library.add(faBookOpen)

const NavBar = props => (
    <nav className="navbar is-info" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <div className="navbar-item">
        <FontAwesomeIcon className="book-logo" icon="book-open"/>
      </div>
    </div>
  
    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <a className="navbar-item">
          Home
        </a>
          </div>
        </div>
  </nav>
);
export default NavBar;