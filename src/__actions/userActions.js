/* eslint-disable no-undef */
import {userConstants} from "../__constants/userConstants";
import {userService} from "../__services/userServices";
import {alertActions} from "./alertActions";
import {history} from '../__helpers/history';

export const userActions = {
    login,
    logout,
    getAll
};

function login(mobile, password) {
    return dispatch => {
        dispatch(request(mobile));

        userService.login(mobile, password)
            .then(
                user => {
                    console.log(user, "action");
                    dispatch(success(user));
                    console.log(history, "history");
                    if (history.location.state === undefined) {
                        if (user.type !== "N")
                            history.push("/main");
                    } else {
                        history.push(history.location.state.from.pathname)
                    }

                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );

        function request(user) {
            return {type: userConstants.LOGIN_REQUEST, user}
        }

        function success(user) {
            return {type: userConstants.LOGIN_SUCCESS, data: user}
        }

        function failure(error) {
            return {type: userConstants.LOGIN_FAILURE, error}
        }

    }
}

function logout() {
    userService.logout();
    return {type: userConstants.LOGOUT};
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() {
        return {type: userConstants.GET_USER_REQUEST}
    }

    function success(users) {
        return {type: userConstants.GET_USER_SUCCESS, users}
    }

    function failure(error) {
        return {
            type: userConstants.GET_USER_FAILURE
            , error
        }
    }
}