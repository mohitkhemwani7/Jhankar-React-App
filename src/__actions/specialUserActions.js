import {alertActions} from "./alertActions";
import {specialUserServices} from "../__services/specialUserServices";
import {specialUserConstants} from "../__constants/specialUserConstants";

export const specialUserActions ={
    create_special_user,
};

function create_special_user(body){
    return dispatch => {
        dispatch(request(body));

        specialUserServices.create_special_user(body)
            .then(
                specialUser_data => {
                    dispatch (success(specialUser_data));
                    console.log("User Created Successfully");
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );

        function request(body) {
            return {type: specialUserConstants.DATA_REQUEST, body}
        }

        function success(specialUser_data) {
            return {type: specialUserConstants.DATA_SUCCESS, SuperUserData: specialUser_data}
        }

        function failure(error) {
            return {type: specialUserConstants.DATA_FAILURE, SuperUserError: error}
        }
    }
}
