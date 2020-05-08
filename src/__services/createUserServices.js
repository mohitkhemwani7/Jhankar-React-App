import {authHeader} from "../__helpers/authHeader";
import {myConfig as config} from '../config'

export const createUserServices = {
    create_user,
};

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

function create_user(body){
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: body
    };

    return fetch(`${config.apiUrl}/signup/`, requestOptions)
        .then(handleResponse)
        .then(
            user => {
                localStorage.setItem('user', JSON.stringify(user));
                return user;
            }
        )
}
