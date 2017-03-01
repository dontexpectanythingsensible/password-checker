import React from 'react';
import PasswordCheckerView from 'routes/PasswordChecker/components/PasswordCheckerView';
import { render } from 'enzyme';

describe('(View) PasswordChecker', () => {
  let _component;

  beforeEach(() => {
    _component = render(<PasswordCheckerView />);
  });

  it('Renders a welcome message', () => {
    const welcome = _component.find('h4');
    expect(welcome).to.exist;
    expect(welcome.text()).to.match(/Welcome!/);
  });
});
