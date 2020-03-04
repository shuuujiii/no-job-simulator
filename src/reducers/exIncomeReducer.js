import * as actiontype from '../actions/type';
import * as datajs from '../js/data';

const initialState = {
    selected: 0,
    info: {
        exincome: Array(12).fill(""),
    },
}

export default function (state = initialState, action) {
    switch (action.type) {
        case actiontype.FETCH_EX_INCOME_DATA:
            return state;
        case actiontype.UPDATE_EX_INCOME_SELECTED:
            return {
                ...state,
                selected: action.payload.index,
            }
        case actiontype.UPDATE_EX_INCOME:
            return {
                ...state,
                info: {
                    exincome: datajs.changeIndexData([...state.info.exincome], state.selected, action.payload.input)
                },
            }
        default:
            return state;
    }
}
