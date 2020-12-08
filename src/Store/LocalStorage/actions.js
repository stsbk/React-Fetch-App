import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
} from './types';
import AuthService from '../../Services/AuthService';

export const login = (email, password) => (dispatch) => {
    dispatch({ type: LOGIN_START });
    AuthService.login(email, password)
        .then((resp) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: resp,
            });
        })
        .catch((e) => {
            dispatch({
                type: LOGIN_FAILURE,
                payload: e,
            });
        });
};
