import React from 'react';
// import hsimp from 'vendor/hsimp/hsimp.min';
import commonPasswords from 'services/commonpasswords';

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

  checkOnlyLettersAndNumbers (password) {
    return password.match(/^[A-Za-z0-9]*$/);
  }

  checkIsWord (password) {
    return password.match(/^[a-zA-Z]{1,16}$/);
  }

  checkIsWordAndACoupleOfNumbers (password) {
    return password.match(/^([a-zA-Z]+[0-9]+|[0-9]+[a-zA-Z]+)$/);
  }

  checkPattern (password) {
    return password.match(/(.+)\1{1,}/);
  }

  checkObvious (password) {
    return commonPasswords.indexOf(password) > -1;
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
    console.log('only numbers', !!this.checkOnlyNumbers(e.target.value));
    console.log('only letters', !!this.checkOnlyLetters(e.target.value));
    console.log('only lower', !!this.checkOnlyLowercase(e.target.value));
    console.log('only upper', !!this.checkOnlyUppercase(e.target.value));
    console.log('no symbols', !!this.checkOnlyLettersAndNumbers(e.target.value));
    console.log('its a word', !!this.checkIsWord(e.target.value));
    console.log('its a word and nums', !!this.checkIsWordAndACoupleOfNumbers(e.target.value));
    console.log('repeat', !!this.checkPattern(e.target.value));
    console.log('obvious', this.checkObvious(e.target.value));
    // check upper/lower/punctuation/number
    // check common passwords
  }

  render () {
    return (
      <input type='password' onChange={ this.handleChange } placeholder='Your password' />
    );
  }
}
