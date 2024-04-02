import { API_BASE_URL, api } from "../../Config/Config"
import { ADD_SLOTS, FIND_SLOTS, GET_PRICES, UPDATE_PRICES } from "./ActionType";


export const addSlots = (data) => async (dispatch) => {

    try {
        
        const res = await api.post(`${API_BASE_URL}/admin/slots/create`, data);

        const response = res.data;
        dispatch({type : ADD_SLOTS, payload : response});

        console.log("Multiple slots added ..", response);

    } catch (error) {
        console.log("Error occured while adding multiple slots  ", error);
    }

}

export const findAllSlots = () => async (dispatch) => {

    try {
        
        const res = await api.get(`${API_BASE_URL}/api/slot/all`);

        const response = res.data;

        dispatch({type : FIND_SLOTS, payload : response});

        console.log("Found all slots successfully ..", response);

    } catch (error) {
        console.log("Error occured while fetching findAllSlots ..", error);
    }

}

export const getPrices = () => async (dispatch) => {
    try {
        
        const res = await api.get(`${API_BASE_URL}/api/prices/`);

        const response = res.data;

        dispatch({type : GET_PRICES, payload : response});

        // console.log("Parking Prices ---> ", response);

    } catch (error) {
        console.log("Error occured while fetching parking prices ", error);
    }
}

export const updateParkingPrices = (data) => async (dispatch) => {
    try {
        
        const res = await api.post(`${API_BASE_URL}/admin/prices/update`, data);

        const response = res.data;

        dispatch({type : UPDATE_PRICES, payload : response});

        console.log("Updated the Parking Prices successfully --> ", response);

    } catch (error) {

        console.log("Error occured while updating the parking prices ", error);

    }
}