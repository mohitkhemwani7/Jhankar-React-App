import {industryServices} from "../__services/industryServices";
import {alertActions} from "./alertActions";
import {industryConstants} from "../__constants/industryConstants";

export const industryActions = {
    getIndustry,
};

function getIndustry() {
    return dispatch => {
        dispatch(request());

        industryServices.getIndustry()
            .then(
                data => {
                    dispatch(success(data));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );

        function request() {
            return {type: industryConstants.DATA_REQUEST}
        }

        function success(data) {
            return {type: industryConstants.DATA_SUCCESS, industry_data: data}
        }

        function failure(error) {
            return {type: industryConstants.DATA_FAILURE, error}
        }
    }
}
