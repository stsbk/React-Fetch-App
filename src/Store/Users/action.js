import {
    FETCH_USERS_START,
    FETCH_USERS_ERROR,
    FETCH_USERS_SUCCESS,
    DELETE_USER_START,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE,
    CHANGE_USER_START,
    CHANGE_USER_SUCCESS,
    CHANGE_USER_FAILURE,
    ADD_USER_START,
    ADD_USER_SUCCESS,
    ADD_USER_FAILURE,
} from './types';
import UsersService from '../../Services/UsersService';

export const usersFetch = () => (dispatch) => {
    dispatch({ type: FETCH_USERS_START });
    UsersService.getAll()
        .then((resp) => {
            dispatch({
                type: FETCH_USERS_SUCCESS,
                payload: resp,
            });
        })
        .catch((e) => {
            dispatch({
                type: FETCH_USERS_ERROR,
                payload: e,
            });
        });
};

export const deleteUser = (id) => (dispatch) => {
    dispatch({ type: DELETE_USER_START, payload: id });
    UsersService.deleteUser(id)
        .then(() => {
            dispatch({
                type: DELETE_USER_SUCCESS,
                payload: id,
            });
        })
        .catch((e) => {
            dispatch({
                type: DELETE_USER_FAILURE,
                payload: e,
            });
        });
};

export const changeUserName = (id, params) => (dispatch) => {
    dispatch({ type: CHANGE_USER_START, payload: id });
    UsersService.changeUserName(id, params)
        .then((resp) => {
            dispatch({
                type: CHANGE_USER_SUCCESS,
                payload: resp,
            });
        })
        .catch((e) => {
            dispatch({
                type: CHANGE_USER_FAILURE,
                payload: e,
            });
        });
};

export const addUser = (params) => (dispatch) => {
    dispatch({ type: ADD_USER_START });
    UsersService.addNewUser(params)
        .then((resp) => {
            dispatch({
                type: ADD_USER_SUCCESS,
                payload: resp,
            });
        })
        .catch((e) => {
            dispatch({
                type: ADD_USER_FAILURE,
                payload: e,
            });
        });
};
