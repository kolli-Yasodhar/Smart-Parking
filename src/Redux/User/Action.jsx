import { API_BASE_URL, api } from "../../Config/Config"
import { BOOK_SLOT, CLEAR_SLOT, REQ_USER } from "./ActionType";


export const findReqUser = (jwt) => async (dispatch) => {
    // console.log("J W T -- > ", jwt);
    try {
        console.log("Hello --")
        const res = await api.get(`/api/users/profile`, jwt);

        const reqUser = res.data;

        dispatch({type : REQ_USER, payload : reqUser});

        console.log("Req user found successfully - " , reqUser);
        
    } catch (error) {
        console.log("Error while fetching reqUser ", error);
    }
}

export const bookParkingSlot = (data) => async (dispatch) => {

    try {
        
        const res = await api.post(`/api/slot/book`, data);

        const response = res.data;

        dispatch({type : BOOK_SLOT, payload : response});
        localStorage.setItem("orderId", response.id);
        console.log("Slot Booked Successfully ", response);

    } catch (error) {
        console.log("Error occured while booking a Parking Slot - ", error);
    }

}

export const clearParkingSlot = (data) => async (dispatch) => {
   
    try {
        
        const res = await api.put(`/api/slot/freeup`, data);
       
        const response = res.data;
        
        dispatch({type : CLEAR_SLOT, payload : response});

        console.log("Slot cleared successfully ", response);

    } catch (error) {
        console.log("Error occured while clearing slot ", error);
    }

} 