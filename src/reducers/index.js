import { combineReducers } from 'redux';
import simulatorReducer from './simulatorReducer';
import assetReducer from './assetReducer';

const simReducer = combineReducers({
    asset: assetReducer
})

export default combineReducers({
    sim: simReducer
})