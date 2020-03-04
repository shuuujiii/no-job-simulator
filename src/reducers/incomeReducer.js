import * as actiontype from '../actions/type';

const initialState = {
    income: "",
}

export default function (state = initialState, action) {
    switch (action.type) {
        case actiontype.FETCH_INCOME_DATA:
            return state;
        case actiontype.UPDATE_INCOME:
            return {
                ...state,
                income: action.payload.input,
            }
        default:
            return state;
    }
}
