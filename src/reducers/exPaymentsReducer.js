import * as actiontype from '../actions/type';
import * as parsejs from '../js/parse';
import * as inputjs from '../js/input';
import * as datajs from '../js/data';

const initialState = {
    selected: 0,
    info: {
        expayments: Array(12).fill(""),
    },
}

export default function (state = initialState, action) {
    switch (action.type) {
        case actiontype.FETCH_EX_PAYMENTS_DATA:
            return state;

        case actiontype.UPDATE_EX_PAYMENTS_SELECTED:
            return {
                ...state,
                selected: action.payload.index,
            }
        case actiontype.UPDATE_EX_PAYMENTS:
            return {
                ...state,
                info: {
                    expayments: datajs.changeIndexData([...state.info.expayments], state.selected, action.payload.input)
                },
            }

        default:
            return state;
    }
}
