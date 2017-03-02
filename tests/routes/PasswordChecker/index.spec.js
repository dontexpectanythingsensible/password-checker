import PasswordCheckerRoute from 'routes/PasswordChecker';

describe('(Route) PasswordChecker', () => {
  let _component;

  beforeEach(() => {
    _component = PasswordCheckerRoute.component();
  });

  it('Should return a route configuration object', () => {
    expect(typeof PasswordCheckerRoute).to.equal('object');
  });

  it('Should define a route component', () => {
    expect(_component.type).to.equal('div');
  });
});
