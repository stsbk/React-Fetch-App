import {
    FETCH_TODOS_START,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_FAILURE,
    UPDATE_TODOS_START,
    UPDATE_TODOS_FAILURE,
    UPDATE_TODOS_SUCCESS,
    DELETE_TODOS_START,
    DELETE_TODOS_SUCCESS,
    DELETE_TODOS_FAILURE,
    ADD_TODOS_START,
    ADD_TODOS_SUCCESS,
    ADD_TODOS_FAILURE,
} from './types';
import TodosService from '../../Services/TodosService';

const enhancerDispatch = (type, payload = '') => ({ type, payload });

export const fetchTodos = (id) => (dispatch) => {
    dispatch({ type: FETCH_TODOS_START });
    TodosService.fetchTodosByUserId(id)
        .then((resp) => {
            dispatch(enhancerDispatch(FETCH_TODOS_SUCCESS, resp));
        })
        .catch((e) => {
            dispatch(enhancerDispatch(FETCH_TODOS_FAILURE, e));
        });
};

export const updateTodo = (id, params) => (dispatch) => {
    dispatch({ type: UPDATE_TODOS_START, payload: id });
    TodosService.completeTodo(id, params)
        .then((resp) => {
            dispatch(enhancerDispatch(UPDATE_TODOS_SUCCESS, resp));
        })
        .catch((e) => {
            dispatch(enhancerDispatch(UPDATE_TODOS_FAILURE, e));
        });
};

export const deleteTodo = (id) => (dispatch) => {
    dispatch({ type: DELETE_TODOS_START, payload: id });
    TodosService.deleteTodo(id)
        .then(() => {
            dispatch(enhancerDispatch(DELETE_TODOS_SUCCESS, id));
        })
        .catch((e) => {
            dispatch(enhancerDispatch(DELETE_TODOS_FAILURE, e));
        });
};

export const addTodo = (params) => (dispatch) => {
    dispatch({ type: ADD_TODOS_START });
    TodosService.addTodo(params)
        .then((resp) => {
            dispatch(enhancerDispatch(ADD_TODOS_SUCCESS, resp));
        })
        .catch((e) => {
            dispatch(enhancerDispatch(ADD_TODOS_FAILURE, e));
        });
};
