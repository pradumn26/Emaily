import { combineReducers } from 'redux';

import authReducer from './authReducer';

const combinedReducer = combineReducers({
    auth: authReducer
});

export default combinedReducer;