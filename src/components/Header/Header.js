import React from 'react';
import { IndexLink, Link } from 'react-router';
import './Header.scss';

export const Header = () => (
  <div>
    <IndexLink to='/' activeClassName='route--active'>
      Password Strength Checker
    </IndexLink>

    {' · '}

    <Link to='/generate' activeClassName='route--active'>
        Generate password
    </Link>

    {' · '}
    
    <Link to='/counter' activeClassName='route--active'>
      Counter
    </Link>
  </div>
);

export default Header;
