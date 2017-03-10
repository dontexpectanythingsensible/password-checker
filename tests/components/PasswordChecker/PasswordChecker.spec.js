import React from 'react';
import { mount } from 'enzyme';
import PasswordChecker from 'components/PasswordChecker';

describe('(component) PasswordChecker', () => {
  let component;

  beforeEach(() => {
    component = mount(<PasswordChecker />);
  });

  it('should check length', () => {
    expect(component.state('length').level).to.be.undefined;

    component.instance().checkLength('123456');
    expect(component.state('length').level).to.match(/error/);
    expect(component.state('length').message).to.match(/very short password/);

    component.instance().checkLength('1');
    expect(component.state('length').level).to.match(/error/);
    expect(component.state('length').message).to.match(/very short password/);

    component.instance().checkLength('1234567');
    expect(component.state('length').level).to.match(/error/);
    expect(component.state('length').message).to.match(/short password/);

    component.instance().checkLength('1234567891234');
    expect(component.state('length').level).to.be.undefined;
    expect(component.state('length').message).to.be.undefined;

    component.instance().checkLength('averylongpasswordindeed');
    expect(component.state('length').level).to.match(/good/);
    expect(component.state('length').message).to.match(/password is nice and long/);
  });

  it('should check if password contains only numbers', () => {
    expect(component.state('numbers').level).to.be.undefined;

    component.instance().checkOnlyNumbers('1234567');
    expect(component.state('numbers').level).to.match(/error/);
    expect(component.state('numbers').message).to.match(/password only numbers/);

    component.instance().checkOnlyNumbers('1234567t');
    expect(component.state('numbers').level).to.be.undefined;
    expect(component.state('numbers').message).to.be.undefined;

    component.instance().checkOnlyNumbers('test');
    expect(component.state('numbers').level).to.be.undefined;
    expect(component.state('numbers').message).to.be.undefined;
  });

  it('should check if password contains only letters', () => {
    expect(component.state('letters').level).to.be.undefined;

    component.instance().checkOnlyLetters('test');
    expect(component.state('letters').level).to.match(/error/);
    expect(component.state('letters').message).to.match(/password only letters/);

    component.instance().checkOnlyLetters('test7');
    expect(component.state('letters').level).to.be.undefined;
    expect(component.state('letters').message).to.be.undefined;
  });

  it('should check if password contains only lowercase letters', () => {
    expect(component.state('lowercase').level).to.be.undefined;

    component.instance().checkOnlyLowercase('test');
    expect(component.state('lowercase').level).to.match(/error/);
    expect(component.state('lowercase').message).to.match(/password only lower case/);

    component.instance().checkOnlyLowercase('Test');
    expect(component.state('lowercase').level).to.be.undefined;
    expect(component.state('lowercase').message).to.be.undefined;
  });

  it('should check if password contains only uppercase letters', () => {
    expect(component.state('uppercase').level).to.be.undefined;

    component.instance().checkOnlyUppercase('TEST');
    expect(component.state('uppercase').level).to.match(/error/);
    expect(component.state('uppercase').message).to.match(/password only upper case/);

    component.instance().checkOnlyUppercase('Test');
    expect(component.state('uppercase').level).to.be.undefined;
    expect(component.state('uppercase').message).to.be.undefined;
  });

  it('should check if password contains only letters', () => {
    expect(component.state('lettersAndNumbers').level).to.be.undefined;

    component.instance().checkOnlyLettersAndNumbers('TEST');
    expect(component.state('lettersAndNumbers').level).to.match(/error/);
    expect(component.state('lettersAndNumbers').message).to.match(/password has no symbols/);

    component.instance().checkOnlyLettersAndNumbers('TEST123');
    expect(component.state('lettersAndNumbers').level).to.match(/error/);
    expect(component.state('lettersAndNumbers').message).to.match(/password has no symbols/);

    component.instance().checkOnlyLettersAndNumbers('TEST%');
    expect(component.state('lettersAndNumbers').level).to.match(/good/);
    expect(component.state('lettersAndNumbers').message).to.match(/Password contains symbols/);
  });

  it('should check if password is a word', () => {
    expect(component.state('word').level).to.be.undefined;

    component.instance().checkIsWord('test');
    expect(component.state('word').level).to.match(/error/);
    expect(component.state('word').message).to.match(/password is a dictionary word/);
  });

  it('should check if password is a word with numbers', () => {
    expect(component.state('wordAndNumbers').level).to.be.undefined;

    component.instance().checkIsWordAndNumbers('test123');
    expect(component.state('wordAndNumbers').level).to.match(/error/);
    expect(component.state('wordAndNumbers').message).to.match(/password is word and number/);

    component.instance().checkIsWordAndNumbers('test');
    expect(component.state('wordAndNumbers').level).to.be.undefined;
    expect(component.state('wordAndNumbers').message).to.be.undefined;
  });

  it('should check if password has a pattern', () => {
    expect(component.state('pattern').level).to.be.undefined;

    component.instance().checkPattern('testestestest');
    expect(component.state('pattern').level).to.match(/warning/);
    expect(component.state('pattern').message).to.match(/password has a repeating pattern/);

    component.instance().checkPattern('testeste');
    expect(component.state('pattern').level).to.be.undefined;
    expect(component.state('pattern').message).to.be.undefined;
  });

  it('should check if password is obvious', () => {
    expect(component.state('obvious').level).to.be.undefined;

    component.instance().checkObvious('password');
    expect(component.state('obvious').level).to.match(/error/);
    expect(component.state('obvious').message).to.match(/password is one of the most common passwords/);

    component.instance().checkObvious('paswrod!12');
    expect(component.state('obvious').level).to.be.undefined;
    expect(component.state('obvious').message).to.be.undefined;
  });

  it('should render', () => {
    expect(component.find('input')).to.exist;
    expect(component.find('input').prop('type')).to.equal('password');
    expect(component.find('input').prop('placeholder')).to.equal('Your password');
  });
});
