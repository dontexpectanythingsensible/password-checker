import React from 'react';

export function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default class PasswordGeneratorView extends React.Component {
  state = {
    password: ''
  }

  componentWillMount () {
    let password = '';

    for (let i = 0; i < 17; i++) {
      password += String.fromCharCode(getRandomInt(32, 122));
    }

    this.setState({ password });
  }

  render () {
    return (
      <div>{ this.state.password }</div>
    );
  }
}
