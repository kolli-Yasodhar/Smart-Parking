import {  api } from "../../Config/Config"
import { SIGN_IN, SIGN_UP } from "./ActionType";


export const signInAction = (data) => async (dispatch) => {
   
    try {
        
        const res = await api.post(`/auth/signin`, data)

        const user = res.data;
        console.log("Sigin Response ", res);

        if(user.token) {
           localStorage.setItem("token", user.token);
        }

        // const token = res.headers.get("Authorization");

        dispatch({
            type : SIGN_IN, payload : user.token
        })

        console.log("Signin successfull ", user);

    } catch (error) {
        console.log("Error occured while sign in user",error);
    }
}

export const signUpAction = (data) => async (dispatch) => {
    try {
        
        const res = await api.post(`/auth/signup`, data);

        const user = res.data;
        if(user.token) {
            localStorage.setItem("token", user.token);
        }

        dispatch({
            type : SIGN_UP, payload : user.token
        })

        console.log("Sign up successfull ==> ", user);
        
    } catch (error) {
        console.log("Error occured while signup ", error);
    }
}

// Logout Action is pending