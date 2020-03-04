import * as actiontype from './type';
import * as inputjs from '../js/input';
export const fetchAssetData = () => dispatch => {
    dispatch({
        type: actiontype.FETCH_ASSET_DATA,
    })
}

export const updateAssets = (key, value) => dispatch => {
    dispatch({
        type: actiontype.UPDATE_ASSETS,
        payload: {
            key: key,
            input: inputjs.InputNumOnly(value),
            display: inputjs.InputComma(value),
        }
    })
}

export const sumAssets = () => dispatch => {
    dispatch({
        type: actiontype.SUM_ASSETS,
    })
}

export const updateTotal = (key, value) => dispatch => {
    dispatch({
        type: actiontype.UPDATE_TOTAL,
        payload: {
            key: key,
            input: inputjs.InputNumOnly(value),
            display: inputjs.InputComma(value),
        }
    })
}

