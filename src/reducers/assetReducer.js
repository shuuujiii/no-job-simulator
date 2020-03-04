import * as actiontype from '../actions/type';
import * as parsejs from '../js/parse';
import * as inputjs from '../js/input';
import * as calcjs from '../js/calc';

const initialState = {
    info: {
        money: "",
        stock: "",
        otherAsset: "",
    },
    total: "",
}

export default function (state = initialState, action) {
    switch (action.type) {
        case actiontype.FETCH_ASSET_DATA:
            return state;
        case actiontype.UPDATE_ASSETS:
            return {
                ...state,
                info: {
                    ...state.info,
                    [action.payload.key]: action.payload.input,
                },
            }
        case actiontype.SUM_ASSETS:
            let total = calcjs.getObjectValueSum({ ...state.info })
            return {
                ...state,
                total: total,
            }
        case actiontype.UPDATE_TOTAL:
            return {
                ...state,
                total: action.payload.input,
            }
        default:
            return state;
    }
}
