import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/Header';
import Footer from 'components/Footer';
import classnames from 'classnames';

import 'styles/core.scss';

export default class CoreLayout extends React.Component {
  static propTypes = {
    strength: PropTypes.string,
    children: PropTypes.element.isRequired
  };

  render () {
    const level = `strength--${ [this.props.strength] }`;
    const classes = classnames('core-layout', {
      [level]: true
    });

    return (
      <div className={ classes }>
        <Header />
        <div className='core-layout__viewport container'>
          { this.props.children }
        </div>

        <Footer />
      </div>
    );
  }
}
