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
            <Link to='/getLibrery' >
              Get librery
            </Link>
          </li>
          <li>
            <Link to='/post-librery' >
              Post librery
            </Link>
          </li>
        </ul>
      </header>
    ); //end return
  } //end Render
} //end App component

export default Header;
