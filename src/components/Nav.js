/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
    <Link to ='/' className="nav-link">        
      <h3 className='home'>Limbe FC</h3>
    </Link>
    <ul className="navbar-nav  d-flex justify-content-around w-75">
      <Link to ='/players' className="nav-link">
        <li className="nav-item">
          Players
        </li>
      </Link>
      <Link to ='/fixtures' className="nav-link">
        <li className="nav-item">
          Fixtures
        </li>
      </Link>
      <Link to ='/trophies' className="nav-link">
        <li className="nav-item">
          Trophies
        </li>
      </Link>
      <Link to ='/about' className="nav-link">        
        <li className="nav-item">
          About
        </li>
      </Link>
      <Link to='/admin' className="nav-link">        
        <li className="nav-item">
          User Icon
        </li>
      </Link>
    </ul>

  </nav>
);

export default Nav;
