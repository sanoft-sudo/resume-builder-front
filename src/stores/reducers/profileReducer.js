import { CREATE_PROFILE_INFO, EDIT_CLICK, EDIT_PROFILE_INFO } from "../type";

const initialState = {
    profileInfo: {}
}
export const profileReducer = (state = initialState, action) =>{
    switch (action.type) {
        case CREATE_PROFILE_INFO:
            return {...state, profileInfo: action.payload}
    
        case EDIT_PROFILE_INFO:
            return {...state, profileInfo: action.payload}

    
        default: return state;
    }
}