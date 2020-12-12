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

const initialState = {
    loading: false,
    data: [],
    error: null,
    loadingItem: 0,
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
        case CHANGE_USER_START:
            return {
                ...store,
                loadingItem: payload,
            };
        case CHANGE_USER_SUCCESS:
            return {
                ...store,
                data: store.data.map((user) => {
                    if (user.id === payload.id) {
                        return payload;
                    }

                    return user;
                }),
                loadingItem: 0,
            };
        case CHANGE_USER_FAILURE:
            return {
                ...store,
                loadingItem: 0,
                error: payload,
            };
        case ADD_USER_START:
            return {
                ...store,
                loading: true,
            };
        case ADD_USER_SUCCESS:
            return {
                ...store,
                data: [
                    payload,
                    ...store.data,
                ],
                loading: false,
            };
        case ADD_USER_FAILURE:
            return {
                ...store,
                loading: false,
                error: payload,
            };
        default:
            return store;
    }
};
