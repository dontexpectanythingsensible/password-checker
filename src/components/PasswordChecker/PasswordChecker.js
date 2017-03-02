import React from 'react';
import hsimp from 'vendor/hsimp/hsimp.min';

export default class PasswordChecker extends React.Component {
  checkLength (password) {
    if (password.length < 7) {
      console.log('v shortt');
    } else if (password.length < 12) {
      console.log('short');
    } else if (password.length > 15) {
      console.log('long');
    }
  }

  checkOnlyNumbers (password) {
    return password.match(/^[0-9]*$/);
  }

  checkOnlyLetters (password) {
    return password.match(/^[A-Za-z]*$/);
  }

  checkOnlyLowercase (password) {
    return password.match(/^[a-z]*$/);
  }

  checkOnlyUppercase (password) {
    return password.match(/^[A-Z]*$/);
  }

  handleChange = e => {
    console.log(e.target.value);
    // hsimp({
    //   options: {
    //     calculationsPerSecond: 1e10,
    //     good: 31557600e3,
    //     ok: 31557600
    //   },
    //   outputTime: (time, input) => console.log(time, input),
    //   outputChecks: (checks, input) => console.log(checks, input)
    // }, e.target);
    // check length
    this.checkLength(e.target.value);
    // check upper/lower/punctuation/number
    // check common passwords
  }

  render () {
    return (
      <input type='password' onChange={ this.handleChange } placeholder='Your password' />
    );
  }
}
