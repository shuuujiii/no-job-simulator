import { combineReducers } from 'redux';
import simulatorReducer from './simulatorReducer';
import assetReducer from './assetReducer';
import paymentsReducer from './paymentsReducer';

const simReducer = combineReducers({
    asset: assetReducer,
    payments: paymentsReducer,
})

export default combineReducers({
    sim: simReducer
})