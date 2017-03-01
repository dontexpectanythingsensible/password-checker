import React from 'react';
import DuckImage from '../assets/Duck.jpg';
import './PasswordCheckerView.scss';

export const PasswordCheckerView = () => (
  <div>
    <h4>Welcome!</h4>
    <img
      alt='This is a duck, because Redux!'
      className='duck'
      src={ DuckImage } />
  </div>
);

export default PasswordCheckerView;
