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
        expect(component.state('lettersAndNumbers').level).to.match(/warning/);
        expect(component.state('lettersAndNumbers').message).to.match(/password has no symbols/);

        component.instance().checkOnlyLettersAndNumbers('TEST123');
        expect(component.state('lettersAndNumbers').level).to.match(/warning/);
        expect(component.state('lettersAndNumbers').message).to.match(/password has no symbols/);

        component.instance().checkOnlyLettersAndNumbers('TEST%');
        expect(component.state('lettersAndNumbers').level).to.be.undefined;
        expect(component.state('lettersAndNumbers').message).to.be.undefined;
    });
});