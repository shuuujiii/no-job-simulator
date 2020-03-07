import * as types from '../actions/type';
import reducer from './assetReducer';

const initialState = {
    info: {
        money: "",
        stock: "",
        otherAsset: "",
    },
    total: "",
}
describe('assetReducer', () => {
    it('return initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    });
    it('should FETCH_ASSET_DATA', () => {
        const state = {
            info: {
                money: "1111",
                stock: "2222",
                otherAsset: "3333",
            },
            total: "6666",
        }
        const action = {
            type: types.FETCH_ASSET_DATA,
        }
        expect(reducer(state, action)).toEqual(state)
    });

    describe('should UPDATE_ASSETS', () => {
        const state = {
            info: {
                money: "1111",
                stock: "2222",
                otherAsset: "3333",
            },
            total: "6666",
        }
        it('should update info money', () => {
            const action = {
                type: types.UPDATE_ASSETS,
                payload: {
                    key: "money",
                    input: "1212"
                }
            }
            expect(reducer(state, action)).toEqual({
                info: {
                    money: "1212",
                    stock: "2222",
                    otherAsset: "3333",
                },
                total: "6666",
            })
        });
        it('should update info stock', () => {
            const action = {
                type: types.UPDATE_ASSETS,
                payload: {
                    key: "stock",
                    input: "1212"
                }
            }
            expect(reducer(state, action)).toEqual({
                info: {
                    money: "1111",
                    stock: "1212",
                    otherAsset: "3333",
                },
                total: "6666",
            })
        });
        it('should update info otherAsset', () => {
            const action = {
                type: types.UPDATE_ASSETS,
                payload: {
                    key: "otherAsset",
                    input: "1212"
                }
            }
            expect(reducer(state, action)).toEqual({
                info: {
                    money: "1111",
                    stock: "2222",
                    otherAsset: "1212",
                },
                total: "6666",
            })
        });
    });

    it('should SUM_ASSETS', () => {
        const state = {
            info: {
                money: "1111",
                stock: "1212",
                otherAsset: "3333",
            },
            total: "6666",
        }
        const action = {
            type: types.SUM_ASSETS,
        }
        expect(reducer(state, action)).toEqual({
            info: {
                money: "1111",
                stock: "1212",
                otherAsset: "3333",
            },
            total: 5656,
        })
    });

    it('should UPDATE_ASSET', () => {
        const state = {
            info: {
                money: "1111",
                stock: "2222",
                otherAsset: "3333",
            },
            total: "6666",
        }
        const action = {
            type: types.UPDATE_ASSET,
            payload: {
                key: "asset",
                input: "9999"
            }
        }
        expect(reducer(state, action)).toEqual({
            info: {
                money: "1111",
                stock: "2222",
                otherAsset: "3333",
            },
            total: "9999",
        })
    });
});