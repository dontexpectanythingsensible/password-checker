import React from 'react';
import PropTypes from 'prop-types';

export const Slider = props => (
  <div className='slider'>
    <label htmlFor='amount'>{ props.label }</label>
    <input type='range'
      className='slider__range'
      name='amount'
      min={ props.min }
      max={ props.max }
      value={ props.value }
      onChange={ props.onChange } />
    <input type='number'
      className='slider__number'
      name='amount'
      step={ props.step }
      min={ props.min }
      max={ props.max }
      placeholder='1'
      onChange={ props.onChange }
      value={ props.value } />
  </div>
);

Slider.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number.isRequired,
  step: PropTypes.string.isRequired,
  min: PropTypes.string.isRequired,
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number.isRequired]).isRequired,
  onChange: PropTypes.func.isRequired
};
