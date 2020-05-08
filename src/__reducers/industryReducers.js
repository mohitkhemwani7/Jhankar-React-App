import {industryConstants} from "../__constants/industryConstants";

export function industryReducer(state = {}, action) {
    switch (action.type) {
        case industryConstants:
            return {
                loading: true
            };
        case industryConstants.DATA_SUCCESS:
            return {
                industry_data: action.industry_data
            };
        case industryConstants.DATA_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}

export default industryReducer
