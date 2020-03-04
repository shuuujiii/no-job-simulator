

import * as actiontype from './type';
import * as inputjs from '../js/input';
import * as parsejs from '../js/parse';
export const fetchExPaymentsData = () => dispatch => {
    dispatch({
        type: actiontype.FETCH_EX_PAYMENTS_DATA,
    })
}

export const updateExpaymentsSelected = (value) => dispatch => {
    dispatch({
        type: actiontype.UPDATE_EX_PAYMENTS_SELECTED,
        payload: { index: parsejs.parseIntZero(value) },
    })
}

export const updateExPayments = (key, value) => dispatch => {
    dispatch({
        type: actiontype.UPDATE_EX_PAYMENTS,
        payload: {
            key: key,
            input: inputjs.InputNumOnly(value),
        }
    })

}
