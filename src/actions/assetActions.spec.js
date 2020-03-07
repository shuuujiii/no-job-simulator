import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './assetActions';
import * as types from './type';

const middlewares = []
const mockStore = configureStore(middlewares)

const setUp = () => {
    const initialState = {}
    const store = mockStore(initialState)
    return { store }
}
describe('assetActions', () => {

    it('should fetchAssetData', () => {
        const { store } = setUp()
        store.dispatch(actions.fetchAssetData())
        const storeAction = store.getActions()
        const expectedPayload = {
            type: types.FETCH_ASSET_DATA,
        }
        expect(storeAction[0]).toEqual(expectedPayload)
    });
    describe('updateAssets', () => {
        it('should UPDATE_ASSETS', () => {
            const { store } = setUp()
            store.dispatch(actions.updateAssets(1, "9999"))
            const expectedPayload = {
                type: types.UPDATE_ASSETS,
                payload: {
                    key: 1,
                    input: "9999"
                }
            }
            expect(store.getActions()[0]).toEqual(expectedPayload)
        });
        it('should ignore character', () => {
            const { store } = setUp()
            store.dispatch(actions.updateAssets(1, "99a99"))
            const expectedPayload = {
                type: types.UPDATE_ASSETS,
                payload: {
                    key: 1,
                    input: "9999"
                }
            }
            expect(store.getActions()[0]).toEqual(expectedPayload)
        });
    });
    describe('sumAssets', () => {
        it('should SUM_ASSETS', () => {
            const { store } = setUp()
            store.dispatch(actions.sumAssets())
            const expectedPayload = {
                type: types.SUM_ASSETS,
            }
            expect(store.getActions()[0]).toEqual(expectedPayload)
        });
    });

    describe('updateTotal', () => {
        it('should UPDATE_TOTAL', () => {
            const { store } = setUp()
            store.dispatch(actions.updateTotal(2, "1234"))
            const expectedPayload = {
                type: types.UPDATE_TOTAL,
                payload: {
                    key: 2,
                    input: "1234",
                }
            }
            expect(store.getActions()[0]).toEqual(expectedPayload)
        });
    });

})
