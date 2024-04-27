import { BOOK_SLOT, CLEAR_SLOT, REQ_USER } from "./ActionType"


const initialValues = {
    user : null,
    bookedSlot : null,
    occupancyStatus : false,
}

export const UserReducer = (state = initialValues, {type, payload}) => {
    if(type === REQ_USER) {
        return {...state, user : payload}
    } 
    else if (type === BOOK_SLOT) {
        return {...state, bookedSlot : payload}
    }
    else if (type === CLEAR_SLOT) {
        return {...state, occupancyStatus : true}
    }
    

    return {...state}
}