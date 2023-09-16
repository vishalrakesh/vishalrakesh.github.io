import React from 'react';
import { Link } from 'react-router-dom';

import Hamburger from './Hamburger';
import routes from '../../data/routes';

// Websites Navbar, displays routes defined in 'src/data/routes'
const Navigation = () => (
  <header id="header">
    <h1 className="index-link">
      {routes.filter((l) => l.index).map((l) => (
        <Link key={l.label} to={l.path}>{l.label}</Link>
      ))}
    </h1>
    <nav className="links">
      <ul>
        {routes.filter((l) => !l.index).map((l) => (
          <li key={l.label}>
            <Link to={l.path}>{l.label}</Link>
          </li>
        ))}
        <li> <a href="https://travel.doshidhruv.com" rel="noreferrer" target="_blank">Travel </a> </li>
        <li> <a href="https://blog.doshidhruv.com" rel="noreferrer" target="_blank">BLOGS </a> </li>
        <li> <Link to="/contact">CONTACT</Link> </li>
      </ul>
    </nav>
    <Hamburger />
  </header>
);

export default Navigation;
