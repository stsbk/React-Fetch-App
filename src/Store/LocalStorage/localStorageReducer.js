import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
} from './types';

const initialState = {
    loading: false,
    error: null,
    user: {},
    authorizationToken: '',
};

export const localStorageReducer = (store = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_START:
            return {
                ...initialState,
                loading: true,
            };
        case LOGIN_SUCCESS:
            return {
                loading: false,
                error: null,
                user: payload.user,
                authorizationToken: payload.authorizationToken,
            };
        case LOGIN_FAILURE:
            return {
                ...initialState,
                error: payload,
            };
        default:
            return store;
    }
};
