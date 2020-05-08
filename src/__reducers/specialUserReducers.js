import {specialUserConstants} from "../__constants/specialUserConstants";

export function specialUserReducers(state = {}, action) {
    switch (action.type) {
        case specialUserConstants:
            return {
                loading: true
            };
        case specialUserConstants.DATA_SUCCESS:
            return {
                SuperUserData: action.SuperUserData
            };
        case specialUserConstants.DATA_FAILURE:
            return {
                SuperUserError: action.SuperUserData
            };
        default:
            return state
    }
}

export default specialUserReducers
