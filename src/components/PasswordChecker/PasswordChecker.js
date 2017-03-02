import React from 'react';
// import './PasswordCheckerView.scss';

export default class PasswordChecker extends React.Component {
  onChange = e => {
    console.log(e.target.value);
    // check length
    // check upper/lower/punctuation/number
    // check common passwords
  }

  render () {
    return (
      <input type='password' onChange={ this.handleChange } />
    );
  }
}
