import {productConstants} from "../__constants/productConstants";

export function productReducers(state = {}, action) {
    switch (action.type) {
        case productConstants:
            return {
                loading: true
            };
        case productConstants.PRODUCT_SUCCESS:
            return {
                product_data: action.product_data
            };
        case productConstants.PRODUCT_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}

