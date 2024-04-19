import {  FIND_SLOTS, GET_PRICES, GET_PRICES_BY_TYPE, UPDATE_PRICES } from "./ActionType"


const initialValues = {
    
    prices : null,
    slots : null,
    updatedPrices : null,
    priceByType : 0,
}

export const AdminReducer = ( state = initialValues, {type, payload}) => {

    switch(type) {
        case FIND_SLOTS : 
                return {...state, slots : payload}
        case GET_PRICES : 
                return {...state, prices : payload}
        case UPDATE_PRICES : 
                return {...state, updatedPrices : payload};
        case GET_PRICES_BY_TYPE : 
                return {...state, priceByType : payload};
        default :
            return {...state}
    }
}