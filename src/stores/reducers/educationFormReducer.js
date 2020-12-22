import { CREATE_EDUCATION, EDIT_EDUCATION, GET_EDUCATIONS } from "../type";

const initialState = {
    educations: [],
    education:{}
}


export const educationReducer = (state = initialState, action) => {
    switch (action.type) {
        // case GET_EDUCATIONS:
        //     return {
        //         ...state, educations: action.payload
        //     }
        case CREATE_EDUCATION:
            return { ...state, educations: state.educations.concat(action.payload) }
        case EDIT_EDUCATION:
            return { ...state, educations: state.educations.concat(action.payload) }
        
    
        default: return state;
            
    }
}