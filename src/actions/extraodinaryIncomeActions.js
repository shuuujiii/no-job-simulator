

import * as actiontype from './type';
import * as inputjs from '../js/input';
import * as parsejs from '../js/parse';

export const fetchExIncomeData = () => dispatch => {
    dispatch({
        type: actiontype.FETCH_EX_INCOME_DATA,
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
        }
    })
}
