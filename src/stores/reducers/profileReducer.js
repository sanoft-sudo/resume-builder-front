import { CREATE_PROFILE_INFO, DELETE_PROFILE_INFO, CLEAR_PROFILE_INFO, GET_PROFILE_INFO, EDIT_PROFILE_INFO } from "../type";

const initialState = {
    profileInfo: {}
}
export const profileReducer = (state = initialState, action) =>{
    switch (action.type) {
        case CREATE_PROFILE_INFO:
            return {...state, profileInfo: action.payload}

        case GET_PROFILE_INFO:
                return {...state, profileInfo:  state.profileInfo.find((profile) => profile.id===action.payload)}

        case DELETE_PROFILE_INFO:
            delete state.profileInfo
                    return {...state}
    
        case EDIT_PROFILE_INFO:
            return {...state, profileInfo: state.profileInfo.find((profile) => profile.id===action.payload)}

        case CLEAR_PROFILE_INFO:
            return {...state, profileInfo: {}}
        default: return state;
    }
}