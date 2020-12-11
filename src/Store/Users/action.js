import {
    FETCH_USERS_START,
    FETCH_USERS_ERROR,
    FETCH_USERS_SUCCESS,
    DELETE_USER_START,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE,
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
        .then((resp) => {
            dispatch({
                type: DELETE_USER_SUCCESS,
                payload: resp,
            });
        })
        .catch((e) => {
            dispatch({
                type: DELETE_USER_FAILURE,
                payload: e,
            });
        });
};
