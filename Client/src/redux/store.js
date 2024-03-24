import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import myReducer from './reducer';

const rootReducer = combineReducers({
    myReducer
   
});

const middleware = applyMiddleware(thunk);

const store = createStore(rootReducer, middleware);

export default store;

