import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navigo'>
      <nav>
        <div className='logo'>
          <h1><span className='span'>JS.</span> GAMES</h1>
        </div>
        <div className='list'>
          <ul>
            <li>
              <Link className='a' to="/">HOME.</Link>
            </li>
            <li>
              <Link className='a'  to="/content">GAMES.</Link>
            </li>
            <li>
              <Link className='a' to="/about">ABOUT.</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;