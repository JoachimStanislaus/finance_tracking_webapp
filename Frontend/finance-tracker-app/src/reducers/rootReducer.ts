import {combineReducers} from 'redux'
import { authReducer, registerReducer } from './authReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    register: registerReducer
});

export default rootReducer;