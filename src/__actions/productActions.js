import {productServices} from "../__services/productServices";
import {alertActions} from "./alertActions";
import {productConstants} from "../__constants/productConstants";

export const productActions = {
    getProducts,
};

function getProducts() {
    return dispatch => {
        dispatch(request());

        productServices.getProducts()
            .then(
                data => {
                    console.log("Products added");
                    dispatch(success(data));
                },
                error => {
                    console.log("Products add failure");
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );

        function request() {
            return {type: productConstants.PRODUCT_REQUEST}
        }

        function success(data) {
            return {type: productConstants.PRODUCT_SUCCESS, product_data: data}
        }

        function failure(error) {
            return {type: productConstants.PRODUCT_FAILURE, error}
        }
    }
}
