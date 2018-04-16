import app from './app';
import home from './home';

import { reducer as formReducer } from 'redux-form'

import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    app,
    home,
    form: formReducer
});
export default rootReducer;
