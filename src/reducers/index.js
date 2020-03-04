import { combineReducers } from 'redux';
import simulatorReducer from './simulatorReducer';
import assetReducer from './assetReducer';
import incomeReducer from './incomeReducer';
import paymentsReducer from './paymentsReducer';


const simReducer = combineReducers({
    asset: assetReducer,
    income: incomeReducer,
    payments: paymentsReducer,
})

export default combineReducers({
    sim: simReducer
})