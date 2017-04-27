import React from 'react';
import { IndexLink, Link } from 'react-router';

export const Header = () => (
  <nav className='nav'>
    <IndexLink to='/' activeClassName='route--active'>
      Password Strength Checker
    </IndexLink>

    <Link to='/generate' activeClassName='route--active'>
        Generate password
    </Link>
  </nav>
);

export default Header;
