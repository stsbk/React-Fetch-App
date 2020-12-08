import axios from 'axios';
import store from './Store/globalStore';

const baseURL = 'https://jsonplaceholder.typicode.com/';

const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer',
};

const API = axios.create({
    baseURL,
    headers,
});

API.interceptors.request.use(
    (config) => {
        const modifiedConfig = { ...config };

        modifiedConfig.headers.Authorization = `Bearer ${store.getState().localStorage.authorizationToken}`;

        return modifiedConfig;
    },
    (error) => Promise.reject(error),
);

export default API;
