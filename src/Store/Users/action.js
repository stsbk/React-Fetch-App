import {
    FETCH_USERS_START,
    FETCH_USERS_ERROR,
    FETCH_USERS_SUCCESS,
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
