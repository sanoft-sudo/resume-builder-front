import { CREATE_CONTACT_INFO, EDIT_CONTACT_INFO } from "../type";

const initialState = {
    contact: {}
}

export const contactReducer = (state = initialState, action) =>{
    switch (action.type) {
        case CREATE_CONTACT_INFO:
            return { ...state, contact: action.payload }
        case EDIT_CONTACT_INFO:
            return { ...state, contact: action.payload }   
    
        default:return state
    }
}