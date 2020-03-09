import * as actiontype from './type';
import * as inputjs from '../js/input';
export const fetchPaymentsData = () => dispatch => {
    dispatch({
        type: actiontype.FETCH_PAYMENTS_DATA,
    })
}

export const updatePayments = (key, value) => dispatch => {
    dispatch({
        type: actiontype.UPDATE_PAYMENTS,
        payload: {
            key: key,
            input: inputjs.InputNumOnly(value),
        }
    })
}

export const sumPayments = () => dispatch => {
    dispatch({
        type: actiontype.SUM_PAYMENTS,
    })
}

export const updatePayment = (key, value) => dispatch => {
    dispatch({
        type: actiontype.UPDATE_PAYMENT,
        payload: {
            key: key,
            input: inputjs.InputNumOnly(value),
        }
    })
}

