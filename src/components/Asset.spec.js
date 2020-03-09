import React from 'react';
import { shallow } from 'enzyme';
import * as testUtil from '../js/testUtil';
import connectedAssets, { Assets } from './Assets';

const mockfetchAssetDatafn = jest.fn()
const mockupdateAssetsfn = jest.fn()
const mocksumAsset = jest.fn()
const mockUpdateTotal = jest.fn()
const setUp = () => {

    const state = {
        info: {
            money: "1111",
            stock: "2222",
            otherAsset: "3333",
        },
        total: "6666",
    }
    const component = shallow(<Assets
        asset={state}
        fetchAssetData={mockfetchAssetDatafn}
        updateAssets={mockupdateAssetsfn}
        sumAssets={mocksumAsset}
        updateTotal={mockUpdateTotal}
    />)
    return component
}

const component = setUp()


describe('Component did mount', () => {
    it('should call fetchAssetData()', () => {
        expect(mockfetchAssetDatafn.mock.calls.length).toBe(1)
    });
    it('should have h2 title', () => {
        expect(component.find('h2').length).toBe(1)
    });
});

describe('container Assets', () => {

    describe('money PriceRow', () => {
        const moneyWrapper = component.find(testUtil.getDataTestId('money'))
        it('should have money PriceRow', () => {
            expect(moneyWrapper.length).toBe(1)
        });
        it('should call updateAssets when handleChange', () => {
            moneyWrapper.props().handleChange()
            expect(mockupdateAssetsfn.mock.calls.length).toBe(1)
        });
        it('should call sumAsset when handleOnBlur', () => {
            moneyWrapper.props().handleOnBlur()
            expect(mocksumAsset.mock.calls.length).toBe(1)
        });
        it('should show value with comma', () => {
            const value = moneyWrapper.props().value
            expect(value).toBe("1,111")
        });

    });

    describe('stock PriceRow', () => {
        const stockWrapper = component.find(testUtil.getDataTestId('stock'))
        it('should have stock PriceRow', () => {
            expect(stockWrapper.length).toBe(1)
        });
        it('should call updateAssets when handleChange', () => {
            stockWrapper.props().handleChange()
            expect(mockupdateAssetsfn.mock.calls.length).toBe(2)
        });
        it('should call sumAsset when handleOnBlur', () => {
            stockWrapper.props().handleOnBlur()
            expect(mocksumAsset.mock.calls.length).toBe(2)
        });
        it('should show value with comma', () => {
            const value = stockWrapper.props().value
            expect(value).toBe("2,222")
        });
    });

    describe('otherasset PriceRow', () => {
        const otherasset = component.find(testUtil.getDataTestId('otherAsset'))
        it('should have othreasset PriceRow', () => {
            expect(otherasset.length).toBe(1)
        });
        it('should call updateAssets when handleChange', () => {
            otherasset.props().handleChange()
            expect(mockupdateAssetsfn.mock.calls.length).toBe(3)
        });
        it('should call sumAsset when handleOnBlur', () => {
            otherasset.props().handleOnBlur()
            expect(mocksumAsset.mock.calls.length).toBe(3)
        });
        it('should show value with comma', () => {
            const value = otherasset.props().value
            expect(value).toBe("3,333")
        });
    });
    describe('asset PriceRow', () => {
        const asset = component.find(testUtil.getDataTestId('asset'))
        it('should have asset PriceRow', () => {
            expect(asset.length).toBe(1)
        });
        it('should call updateAssets when handleChange', () => {
            asset.props().handleChange()
            expect(mockUpdateTotal.mock.calls.length).toBe(1)
        });
        it('should not call sumAsset when handleOnBlur', () => {
            asset.props().handleOnBlur()
            expect(mocksumAsset.mock.calls.length).toBe(3)
        });
        it('should show value with comma', () => {
            const value = asset.props().value
            expect(value).toBe("6,666")
        });
    });
});
