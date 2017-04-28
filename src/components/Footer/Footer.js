import React from 'react';

export default class Footer extends React.Component {
  shouldComponentUpdate () {
    return false;
  }

  render () {
    return (
      <footer className='footer'>
        <p>Don't worry, your password is safe and won't be sent anywhere. Although obviously you should avoid typing your password into random websites.</p>
        <p>The estimated time to crack a password is just as an example - this can vary a lot based on the speed of the computer.</p>
        <p>Created by <a href='https://www.dontexpectanythingsensible.uk'>Don't Expect Anything Sensible</a></p>
      </footer>
    );
  }
}
