import {userConstants} from "../__constants/userConstants";

export function users(state = {}, action) {
    switch (action.type) {
    case userConstants:
        return {
        loading: true
        };
    case userConstants.GET_USER_SUCCESS:
        return {
        items: action.users
        };
    case userConstants.GET_USER_FAILURE:
        return {
        error: action.error
        };
    default:
        return state
    }
}