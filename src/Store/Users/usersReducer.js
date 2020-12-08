import {
    FETCH_USERS_START,
    FETCH_USERS_ERROR,
    FETCH_USERS_SUCCESS,
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
                ...store,
                loading: true,
            };
        case FETCH_USERS_SUCCESS:
            return {
                ...store,
                data: payload,
            };
        case FETCH_USERS_ERROR:
            return {
                ...store,
                error: payload,
            };
        default:
            return store;
    }
};
