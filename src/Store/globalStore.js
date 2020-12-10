import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { localStorageReducer } from './LocalStorage/localStorageReducer';
import { usersReducer } from './Users/usersReducer';
import { todosReducer } from './Todos/todosReducer';

const store = createStore(combineReducers({
    localStorage: localStorageReducer,
    users: usersReducer,
    todos: todosReducer,
}), applyMiddleware(thunk));

export default store;
