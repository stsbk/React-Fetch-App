import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { localStorageReducer } from './LocalStorage/localStorageReducer';
import { usersReducer } from './Users/usersReducer';

const store = createStore(combineReducers({
    localStorage: localStorageReducer,
    users: usersReducer,
}), applyMiddleware(thunk));

export default store;
