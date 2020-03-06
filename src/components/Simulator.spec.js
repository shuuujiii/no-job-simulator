import React from 'react';
import { shallow } from 'enzyme';
import { Simulator } from './Simulator';
import Header from './Header';
import Assets from './Assets';
import RegularIncome from './RegularIncome';
import ExtraodinaryIncome from './ExtraodinaryIncome';
import RegularPayment from './RegularPayment';
import ExtraodinaryPayment from './ExtraodinaryPayment';

const mockfunc = jest.fn()
const enzymeWrapper = shallow(<Simulator fetchData={mockfunc} />)
describe('Simulator', () => {
    it('Should have Header', () => {
        expect(enzymeWrapper.find(Header).length).toBe(1)
    });
    it('Should have Assets', () => {
        expect(enzymeWrapper.find(Assets).length).toBe(1)
    });
    it('Should have RegularIncome', () => {
        expect(enzymeWrapper.find(RegularIncome).length).toBe(1)
    });
    it('Should have ExtraodinaryIncome', () => {
        expect(enzymeWrapper.find(ExtraodinaryIncome).length).toBe(1)
    });
    it('Should have RegularPayment', () => {
        expect(enzymeWrapper.find(RegularPayment).length).toBe(1)
    });
    it('Should have ExtraodinaryPayment', () => {
        expect(enzymeWrapper.find(ExtraodinaryPayment).length).toBe(1)
    });
})
