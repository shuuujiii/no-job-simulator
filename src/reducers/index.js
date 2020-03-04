import { combineReducers } from 'redux';
// import simulatorReducer from './simulatorReducer';
import assetReducer from './assetReducer';
import incomeReducer from './incomeReducer';
import paymentsReducer from './paymentsReducer';
import exIncomeReducer from './exIncomeReducer';
import exPaymentsReducer from './exPaymentsReducer';


const simulatorReducers = combineReducers({
    asset: assetReducer,
    income: incomeReducer,
    exincome: exIncomeReducer,
    payments: paymentsReducer,
    expayments: exPaymentsReducer,
})

export default combineReducers({
    sim: simulatorReducers
})