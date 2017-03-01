import React from 'react';
import './PasswordCheckerView.scss';

export default class PasswordCheckerView extends React.Component {
  onChange = e => {
    console.log(e.target.value);
    // check length
    // check upper/lower/punctuation/number
    // check common passwords
  }

  render () {
    return (
      <div>
        <h4>Welcome!</h4>
        <input type='password' onChange={ this.handleChange } />
      </div>
    );
  }
}
