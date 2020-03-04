import * as actiontype from './type';
import * as inputjs from '../js/input';
import * as parsejs from '../js/parse';
export const fetchData = () => dispatch => {
    dispatch({
        type: actiontype.FETCH_DATA,
    })
}

// export const updateAssets = (key, value) => dispatch => {
//     dispatch({
//         type: actiontype.UPDATE_ASSETS,
//         payload: {
//             key: key,
//             input: inputjs.InputNumOnly(value),
//             display: inputjs.InputComma(value),
//         }
//     })
// }

// export const sumAssets = () => dispatch => {
//     dispatch({
//         type: actiontype.SUM_ASSETS,
//     })
// }

export const updateIncome = (key, value) => dispatch => {
    dispatch({
        type: actiontype.UPDATE_INCOME,
        payload: {
            key: key,
            input: inputjs.InputNumOnly(value),
            display: inputjs.InputComma(value),
        }
    })
}

export const updateExIncomeSelected = (value) => dispatch => {
    dispatch({
        type: actiontype.UPDATE_EX_INCOME_SELECTED,
        payload: { index: parsejs.parseIntZero(value) },
    })
}
export const updateExIncome = (key, value) => dispatch => {
    dispatch({
        type: actiontype.UPDATE_EX_INCOME,
        payload: {
            key: key,
            input: inputjs.InputNumOnly(value),
            display: inputjs.InputComma(value),
        }
    })
}

export const updatePayments = (key, value) => dispatch => {
    dispatch({
        type: actiontype.UPDATE_PAYMENTS,
        payload: {
            key: key,
            input: inputjs.InputNumOnly(value),
            display: inputjs.InputComma(value),
        }
    })
}

export const sumPayments = () => dispatch => {
    dispatch({
        type: actiontype.SUM_PAYMENTS,
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
            display: inputjs.InputComma(value),
        }
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

