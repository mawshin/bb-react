import { createStore, applyMiddleware } from 'redux';
import rootReducer from  './reducers';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

const middleware = applyMiddleware(promise(), thunk, logger);

const initialState = {
    
};

export default(initialState) => {
    return createStore(rootReducer, initialState, middleware);
}