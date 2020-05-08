import {authHeader} from "../__helpers/authHeader";
import {myConfig as config} from '../config';

export const productServices = {
    getProducts,
};

function getProducts() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/listproducts/`, requestOptions)
        .then(handleResponse)
        .then(
            data => {
                return data;
            }
        )
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (response.status === 200) {
            return data;
        } else {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
    })
}
