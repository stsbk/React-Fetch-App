import {
    FETCH_TODOS_START,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_FAILURE,
    UPDATE_TODOS_START,
    UPDATE_TODOS_SUCCESS,
    UPDATE_TODOS_FAILURE,
    DELETE_TODOS_START,
    DELETE_TODOS_SUCCESS,
    DELETE_TODOS_FAILURE,
    ADD_TODOS_START, ADD_TODOS_SUCCESS, ADD_TODOS_FAILURE,
} from './types';

const initialState = {
    loading: false,
    loadingItem: 0,
    data: [],
    error: null,
};

export const todosReducer = (store = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_TODOS_START:
            return {
                ...initialState,
                loading: true,
            };
        case FETCH_TODOS_SUCCESS:
            return {
                ...initialState,
                data: payload,
            };
        case FETCH_TODOS_FAILURE:
            return {
                ...initialState,
                error: payload,
            };
        case UPDATE_TODOS_START:
            return {
                ...store,
                loadingItem: payload,
            };
        case UPDATE_TODOS_SUCCESS:
            return {
                ...store,
                data: store.data.map((todo) => {
                    if (todo.id === payload.id) {
                        return payload;
                    }

                    return todo;
                }),
                loadingItem: 0,
            };
        case UPDATE_TODOS_FAILURE:
            return {
                ...store,
                loadingItem: 0,
                error: payload,
            };
        case DELETE_TODOS_START:
            return {
                ...store,
                loadingItem: payload,
            };
        case DELETE_TODOS_SUCCESS:
            return {
                ...store,
                data: store.data.filter((todo) => todo.id !== payload),
                loadingItem: 0,
            };
        case DELETE_TODOS_FAILURE:
            return {
                ...store,
                loadingItem: 0,
                error: payload,
            };
        case ADD_TODOS_START:
            return {
                ...store,
                loadingItem: payload,
            };
        case ADD_TODOS_SUCCESS:
            return {
                ...store,
                loadingItem: 0,
                data: [
                    payload,
                    ...store.data,
                ],
            };
        case ADD_TODOS_FAILURE:
            return {
                ...store,
                loadingItem: 0,
                error: payload,
            };
        default:
            return store;
    }
};
