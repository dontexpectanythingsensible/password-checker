import React from 'react';
import Header from '../../components/Header';
import classnames from 'classnames';

import '../../styles/core.scss';

export default class CoreLayout extends React.Component {
  static propTypes = {
    strength: React.PropTypes.string,
    children: React.PropTypes.element.isRequired
  };

  render () {
    const classes = classnames('container', {
      [this.props.strength]: true
    });

    return (
      <div className={ classes }>
        <Header />
        <div className='core-layout__viewport'>
          { this.props.children }
        </div>
      </div>
    );
  }
}
