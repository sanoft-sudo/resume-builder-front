import { CREATE_SEARCH_FORM } from "../type"


const initialState = {
    searchFormState: {},
    getSearchedForm:[]
}
export const profileReducer = (state = initialState, action) =>{
    switch (action.type) {
        case CREATE_SEARCH_FORM:
            return {...state, searchFormState: action.payload}

        case GET_SEARCH_FORM:
                return {...state, getSearchedForm: action.payload}

        // case GET_:
        //     delete state.profileInfo
        //             return {...state}
    
        // case EDIT_PROFILE_INFO:
        //     return {...state, profileInfo: state.profileInfo.find((profile) => profile.id===action.payload)}

        // case CLEAR_PROFILE_INFO:
        //     return {...state, profileInfo: {}}
        default: return state;
    }
}