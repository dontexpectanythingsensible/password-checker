import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Slider from 'components/Slider';

describe('(component) Slider', () => {
  let _props, _component;

  beforeEach(() => {
    _props = {
      min: '1',
      max: '10',
      step: '1',
      onChange: sinon.spy(),
      value: 5,
      label: 'test'
    };

    _component = shallow(<Slider { ..._props } />);
  });

  it('should have a range', () => {
    expect(_component.find('input[type="range"]')).to.exist;
  });

  it('should have a number input', () => {
    expect(_component.find('input[type="number"]')).to.exist;
  });

  it('should render value in both inputs', () => {
    expect(_component.find('input[type="range"]').prop('value')).to.equal(5);
    expect(_component.find('input[type="number"]').prop('value')).to.equal(5);

    _props.value = 2;
    _component.setProps(_props);

    expect(_component.find('input[type="range"]').prop('value')).to.equal(2);
    expect(_component.find('input[type="number"]').prop('value')).to.equal(2);
  });

  it('should call change handler', () => {
    _component.find('input[type="number"]').simulate('change', { target: { value: 6 } });
    _component.update();

    expect(_props.onChange).to.have.been.called;
  });
});
