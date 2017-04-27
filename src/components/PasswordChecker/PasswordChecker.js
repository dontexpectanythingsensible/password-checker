import React from 'react';
import classnames from 'classnames';
import commonPasswords from 'services/commonpasswords';

export default class PasswordChecker extends React.Component {
  static propTypes = {
    passwordUpdate: React.PropTypes.func
  };

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
      this.setState({ length: { level: 'error', message: 'very short password' } });
    } else if (password.length < 12) {
      this.setState({ length: { level: 'error', message: 'short password' } });
    } else if (password.length > 15) {
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
      this.setState({
        numbers: {
        }
      });
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
      this.setState({
        letters: {
        }
      });
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
          level: 'error',
          message: 'password has no symbols'
        }
      });
    } else {
      this.setState({
        lettersAndNumbers: {
          level: 'good',
          message: 'Password contains symbols'
        }
      });
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

  checkMixture (password) {
    if (password.length > 1 &&
        this.state.numbers.level !== 'error' &&
        this.state.letters.level !== 'error' &&
        this.state.wordAndNumbers.level !== 'error') {
      this.setState({ mixture: { level: 'good', message: 'Mixture of letters and numbers' } });
    } else {
      this.setState({ mixture: {} });
    }
  }

  handleChange = e => {
    const password = e.target.value;

    this.checkLength(password);
    this.checkOnlyNumbers(password);
    this.checkOnlyLetters(password);
    this.checkOnlyLowercase(password);
    this.checkOnlyUppercase(password);
    this.checkOnlyLettersAndNumbers(password);
    this.checkIsWord(password);
    this.checkIsWordAndNumbers(password);
    this.checkPattern(password);
    this.checkObvious(password);

    // hack - make sure letters/numbers state has been set before calling mix
    setTimeout(() => this.checkMixture(password));
  }

  componentWillUpdate (_nextProps, nextState) {
    // is set really worth it?
    const level = new Set();

    Object.keys(nextState).map(error => {
      if (nextState[error].level) {
        level.add(nextState[error].level);
      }
    });

    if (level.has('error')) {
      this.props.passwordUpdate('error');
    } else if (level.has('good')) {
      this.props.passwordUpdate('good');
    } else {
      this.props.passwordUpdate('');
    }
  }

  renderErrors = (error, i) => {
    if (!error) {
      return null;
    }

    const level = `message--${ this.state[error].level }`;
    const classes = classnames('message', {
      [level]: true
    });

    return this.state[error].message
      ? <div className={ classes } key={ i }>{ this.state[error].message }</div>
      : '';
  }

  render () {
    return (
      <div>
        <input className='password__checker' type='password' onChange={ this.handleChange } placeholder='Your password' />
        { Object.keys(this.state).map(this.renderErrors) }
      </div>
    );
  }
}
