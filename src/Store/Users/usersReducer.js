import {
    FETCH_USERS_START,
    FETCH_USERS_ERROR,
    FETCH_USERS_SUCCESS,
    DELETE_USER_START,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE,
} from './types';

const initialState = {
    loading: false,
    data: [],
    error: null,
};

export const usersReducer = (store = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_USERS_START:
            return {
                ...initialState,
                loading: true,
            };
        case FETCH_USERS_SUCCESS:
            return {
                ...initialState,
                data: payload,
            };
        case FETCH_USERS_ERROR:
            return {
                ...initialState,
                error: payload,
            };
        case DELETE_USER_START:
            return {
                ...store,
                loadingItem: payload,
            };
        case DELETE_USER_SUCCESS:
            return {
                ...store,
                data: store.data.filter((user) => user.id !== payload),
                loadingItem: 0,
            };
        case DELETE_USER_FAILURE:
            return {
                ...store,
                loadingItem: 0,
                error: payload,
            };
        default:
            return store;
    }
};
