import React from 'react';
import commonPasswords from 'services/commonpasswords';

export default class PasswordChecker extends React.Component {
  state = {
    length: {},
    numbers: {},
    letters: {},
    lowercase: {},
    uppercase: {},
    lettersAndNumbers: {},
    word: {},
    wordAndNumbers: {},
    pattern: {},
    obvious: {}
  };

  checkLength (password) {
    if (password.length < 7) {
      console.log('v shortt');
      this.setState({ length: { level: 'error', message: 'very short password' } });
    } else if (password.length < 12) {
      console.log('short');
      this.setState({ length: { level: 'error', message: 'short password' } });
    } else if (password.length > 15) {
      console.log('long');
      this.setState({ length: { level: 'good', message: 'password is nice and long' } });
    } else {
      this.setState({ length: {} });
    }
  }

  checkOnlyNumbers (password) {
    if (password.match(/^[0-9]*$/)) {
      this.setState({
        numbers: {
          level: 'error',
          message: 'password only numbers'
        }
      });
    } else {
      this.setState({ numbers: {} });
    }
  }

  checkOnlyLetters (password) {
    if (password.match(/^[A-Za-z]*$/)) {
      this.setState({
        letters: {
          level: 'error',
          message: 'password only letters'
        }
      });
    } else {
      this.setState({ letters: {} });
    }
  }

  checkOnlyLowercase (password) {
    if (password.match(/^[a-z]*$/)) {
      this.setState({
        lowercase: {
          level: 'error',
          message: 'password only lower case'
        }
      });
    } else {
      this.setState({ lowercase: {} });
    }
  }

  checkOnlyUppercase (password) {
    if (password.match(/^[A-Z]*$/)) {
      this.setState({
        uppercase: {
          level: 'error',
          message: 'password only upper case'
        }
      });
    } else {
      this.setState({ uppercase: {} });
    }
  }

  checkOnlyLettersAndNumbers (password) {
    if (password.match(/^[A-Za-z0-9]*$/)) {
      this.setState({
        lettersAndNumbers: {
          level: 'warning',
          message: 'password has no symbols'
        }
      });
    } else {
      this.setState({ lettersAndNumbers: {} });
    }
  }

  checkIsWord (password) {
    if (password.match(/^[a-zA-Z]{1,16}$/)) {
      this.setState({
        word: {
          level: 'error',
          message: 'password is a dictionary word'
        }
      });
    } else {
      this.setState({ word: {} });
    }
  }

  checkIsWordAndNumbers (password) {
    if (password.match(/^([a-zA-Z]+[0-9]+|[0-9]+[a-zA-Z]+)$/)) {
      this.setState({
        wordAndNumbers: {
          level: 'error',
          message: 'password is word and number'
        }
      });
    } else {
      this.setState({ wordAndNumbers: {} });
    }
  }

  checkPattern (password) {
    if (password.match(/(.+)\1{2,}/)) {
      this.setState({
        pattern: {
          level: 'warning',
          message: 'password has a repeating pattern'
        }
      });
    } else {
      this.setState({ pattern: {} });
    }
  }

  checkObvious (password) {
    if (commonPasswords.indexOf(password) > -1) {
      this.setState({
        obvious: {
          level: 'error',
          message: 'password is one of the most common passwords'
        }
      });
    } else {
      this.setState({ obvious: {} });
    }
  }

  handleChange = e => {
    this.checkLength(e.target.value);
    this.checkOnlyNumbers(e.target.value);
    this.checkOnlyLetters(e.target.value);
    this.checkOnlyLowercase(e.target.value);
    this.checkOnlyUppercase(e.target.value);
    this.checkOnlyLettersAndNumbers(e.target.value);
    this.checkIsWord(e.target.value);
    this.checkIsWordAndNumbers(e.target.value);
    this.checkPattern(e.target.value);
    this.checkObvious(e.target.value);
  }

  renderErrors = (error, i) => {
    if (!error) {
      return null;
    }

    return this.state[error].message
      ? <div className={ this.state[error].level } key={ i }>{ this.state[error].message }</div>
      : '';
  }

  render () {
    return (
      <div>
        <input type='password' onChange={ this.handleChange } placeholder='Your password' />
        { Object.keys(this.state).map(this.renderErrors) }
      </div>
    );
  }
}
