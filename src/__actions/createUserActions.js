import {createUserServices} from "../__services/createUserServices";
import {alertActions} from "./alertActions";
import {createUserConstants} from "../__constants/createUserConstants";

export const createUserActions ={
    create_user,
};

function create_user(body){
    return dispatch => {
        dispatch(request(body));

        createUserServices.create_user(body)
            .then(
                newUser_data => {
                    dispatch (success(newUser_data));
                    console.log("User Created Successfully");
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );

        function request(body) {
            return {type: createUserConstants.DATA_REQUEST, body}
        }

        function success(newUser_data) {
            return {type: createUserConstants.DATA_SUCCESS, ManagerData: newUser_data}
        }

        function failure(error) {
            return {type: createUserConstants.DATA_FAILURE, ManagerError: error}
        }
    }
}
