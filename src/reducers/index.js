import { combineReducers } from 'redux';
import simulatorReducer from './simulatorReducer';

export default combineReducers({
    sim: simulatorReducer
})