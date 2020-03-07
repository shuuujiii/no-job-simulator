import * as actiontype from './type';
import * as inputjs from '../js/input';
export const fetchAssetData = () => ({
    type: actiontype.FETCH_ASSET_DATA,
})

export const updateAssets = (key, value) => ({
    type: actiontype.UPDATE_ASSETS,
    payload: {
        key: key,
        input: inputjs.InputNumOnly(value),
    }
})

export const sumAssets = () =>
    ({
        type: actiontype.SUM_ASSETS,
    })

export const updateTotal = (key, value) =>
    ({
        type: actiontype.UPDATE_TOTAL,
        payload: {
            key: key,
            input: inputjs.InputNumOnly(value),
        }
    })

