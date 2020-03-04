import * as actiontype from './type';
import * as inputjs from '../js/input';
export const fetchIncomeData = () => dispatch => {
    dispatch({
        type: actiontype.FETCH_INCOME_DATA,
    })
}

export const updateIncome = (key, value) => dispatch => {
    dispatch({
        type: actiontype.UPDATE_INCOME,
        payload: {
            key: key,
            input: inputjs.InputNumOnly(value),
        }
    })
}


