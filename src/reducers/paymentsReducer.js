import * as actiontype from '../actions/type';
import * as calcjs from '../js/calc';

const initialState = {
    info: {
        food: "",
        rent: "",
        utility: "",
        communication: "",
        clothes: "",
        daily: "",
        hobby: "",
        education: "",
        transportation: "",
        otherPayment: "",
    },
    total: "",
}

export default function (state = initialState, action) {
    switch (action.type) {
        case actiontype.FETCH_PAYMENTS_DATA:
            return state;
        case actiontype.UPDATE_PAYMENTS:
            return {
                ...state,
                info: {
                    ...state.info,
                    [action.payload.key]: action.payload.input,
                },
            }
        case actiontype.SUM_PAYMENTS:
            let paymentsTotal = calcjs.getObjectValueSum({ ...state.info })
            return {
                ...state,
                total: paymentsTotal,
            }
        case actiontype.UPDATE_PAYMENT:
            return {
                ...state,
                total: action.payload.input,
            }
        default:
            return state;
    }
}
