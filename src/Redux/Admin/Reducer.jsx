import {  FIND_SLOTS, GET_PRICES, UPDATE_PRICES } from "./ActionType"


const initialValues = {
    
    prices : null,
    slots : null,
    updatedPrices : null,
}

export const AdminReducer = ( state = initialValues, {type, payload}) => {

    switch(type) {
        case FIND_SLOTS : 
                return {...state, slots : payload}
        case GET_PRICES : 
                return {...state, prices : payload}
        case UPDATE_PRICES : 
                return {...state, updatedPrices : payload};
        default :
            return {...state}
    }
}