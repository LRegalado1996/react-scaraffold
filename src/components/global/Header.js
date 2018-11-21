//dependences
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <ul>
          <li>
            <Link to='/' >
              Home
            </Link>
          </li>
          <li>
            <Link to='/librery' >
              librery
            </Link>
          </li>
        </ul>
      </header>
    ); //end return
  } //end Render
} //end App component

export default Header;
