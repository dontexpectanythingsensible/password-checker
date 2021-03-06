import React from 'react';
import Slider from 'components/Slider';
import Ad from 'components/Ad';

export function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default class PasswordGeneratorView extends React.Component {
  state = {
    password: '',
    amount: 16
  }

  componentWillMount () {
    this.generate();
  }

  generate = () => {
    let password = '';

    for (let i = 0; i < this.state.amount + 1; i++) {
      password += String.fromCharCode(getRandomInt(32, 122));
    }

    this.setState({ password });
  }

  handleChange = e => {
    const val = +e.target.value;
    this.state[e.target.name] = +val;
    this.generate();
  }

  render () {
    return (
      <div>
        <Ad />
        <span className='password__generated'>{ this.state.password }</span>

        <div className='password__controls'>
          <Slider
            label='Password length'
            step='1'
            min='8'
            max='64'
            value={ this.state.amount }
            onChange={ this.handleChange } />

          <button onClick={ this.generate } className='button'>Create another</button>
        </div>
      </div>
    );
  }
}
