import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default class DateFormat extends React.Component {
  static propTypes = {
    password: PropTypes.string
  };

  calculateTimeToCrack (password) {
    // totally accurate
    let complexity = 0;

    if (/[a-z]/.test(password)) {
      complexity += 26;
    }
    if (/[A-Z]/.test(password)) {
      complexity += 26;
    }
    if (/[0-9]/.test(password)) {
      complexity += 10;
    }

    // ignores unicode etc
    if (/[^A-z0-9]/.test(password)) {
      complexity += 32;
    }

    const cpuSpeed = 2800000000; // rough calcs per ms of a cpu, 2.8mhz
    const combinations = Math.pow(complexity, password.length);
    const millisecondsToCrack = combinations / cpuSpeed;

    return millisecondsToCrack;
  }

  toCenturies (ms) {
    let time = Math.floor(ms / 3154000000000);
    let suffix = 'centuries';
    if (time < 2) {
      suffix = 'century';
    }

    if (time > 9999) {
      time = Math.floor(time / 10000);
      suffix = 'million years';
    } else if (time > 99) {
      time = Math.floor(time / 100);

      if (time > 1) {
        suffix = 'millenia';
      } else {
        suffix = 'millenium';
      }
    }

    if (time > 999) {
      time = this.formatLongNumber(time);
    }

    return `${ time } ${ suffix }`;
  }

  formatLongNumber (num) {
    // cast to string
    num = '' + num;

    // reverse string - regex remainder ends up at the end ie 4000 -> [400, 0]
    let formatted = num.split('').reverse().join('');

    // split into threes and add commas to format
    formatted = formatted.match(/.{1,3}/g).join(',');

    // re-reverse so string is back in correct direction
    formatted = formatted.split('').reverse().join('');

    return formatted;
  }

  render () {
    if (this.props.password.length) {
      let time = this.calculateTimeToCrack(this.props.password);

      const msInCenturies = 3154000000000;

      if (time > msInCenturies) {
        time = this.toCenturies(time);
      } else {
        time = moment.duration(time).humanize();
      }

      return <div className='password__time'>It would take <span className='password__time-to-crack'>{ time }</span> to crack your password</div>;
    }

    return null;
  }
}
