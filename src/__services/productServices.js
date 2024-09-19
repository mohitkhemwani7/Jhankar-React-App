import {myConfig as config} from '../config'

export const ProductPageServices = {
    getProducts,
};

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (response.status === 200) {
            return data;
        } else if (response.status === 500) {
            console.log("Error");
        }
    })
}

function getProducts(category, kitchenName) {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`${config.apiUrl}/api/products`)
        .then(handleResponse)
}
