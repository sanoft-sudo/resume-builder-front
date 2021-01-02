

import AuthService from "../../services/auth.service";
import { REGISTER_SUCCESS, SET_MESSAGE } from "../type";

export const register = (username, email, password) => (dispatch) =>{
    return AuthService.register(username, email, password)
    .then((res) =>{
        dispatch({
            type: REGISTER_SUCCESS,
        });

        dispatch({
            type: SET_MESSAGE,
            payload: res.data.message,
        });
        return Promise.resolve();
    })
}