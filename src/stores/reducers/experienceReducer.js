import { CREATE_EXPERIENCE, EDIT_EXPERIENCE } from "../type";

const initialState = {
    experiences: [],
    experience: {}
}

export const experienceReducer = (state = initialState, action) =>{

    switch (action.type) {
        case CREATE_EXPERIENCE:
            return     { ...state, experiences: state.experiences.concat(action.payload) }
        
        case EDIT_EXPERIENCE:
            return { ...state, experiences: state.experiences.concat(action.payload) }
    
        default: return state;
    }
}