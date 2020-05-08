import {createUserConstants} from "../__constants/createUserConstants";

export function createUserReducer(state = {}, action) {
    switch (action.type) {
        case createUserConstants:
            return {
                loading: true
            };
        case createUserConstants.DATA_SUCCESS:
            return {
                ManagerData: action.ManagerData
            };
        case createUserConstants.DATA_FAILURE:
            return {
                ManagerError: action.ManagerError
            };
        default:
            return state
    }
}

export default createUserReducer
