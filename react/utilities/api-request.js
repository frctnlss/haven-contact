import axios from 'axios';

export const apiRequest = (method, uri, params) => {
    return new Promise((resolve, reject) => {
        axios.request({
            url: process.env.API_URL + uri,
            method: method,
            params: params
        }).then(response => {
            resolve(response.data);
        }).catch(err => {
            reject(err);
        });
    });
};
