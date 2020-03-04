import { combineReducers } from 'redux';
import simulatorReducer from './simulatorReducer';
import assetReducer from './assetReducer';
import incomeReducer from './incomeReducer';
import paymentsReducer from './paymentsReducer';
import exIncomeReducer from './exIncomeReducer';


const simReducer = combineReducers({
    asset: assetReducer,
    income: incomeReducer,
    exincome: exIncomeReducer,
    payments: paymentsReducer,
})

export default combineReducers({
    sim: simReducer
})