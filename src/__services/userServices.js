import {authHeader} from "../__helpers/authHeader";
import {myConfig as config} from '../config'

export const userService = {
    login,
    logout,
    getAll,
    // register
};

function logout() {
    localStorage.removeItem('user');
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (response.status === 200) {
            return data;
        } else {
            logout();
            window.location.reload();
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
    })
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/user/`, requestOptions).then(handleResponse);
}

function login(mobile, password) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({mobile, password})
    };

    return fetch(`${config.apiUrl}/login/`, requestOptions)
        .then(handleResponse)
        .then(
            user => {
                localStorage.setItem('user', JSON.stringify(user));
                return user;
            }
        )
}