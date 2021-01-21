import { CREATE_OBEKTIVKA_EXPERIENCE, EDIT_OBEKTIVKA_EXPERIENCE } from "../type";


const initialState ={
    experience:[]
}

export const obektivkaExperienceReducer = (state = initialState, action)=>{
    switch (action.type) {
        case CREATE_OBEKTIVKA_EXPERIENCE:
            return {...state, experience: state.experience.concat(action.payload)}
        case EDIT_OBEKTIVKA_EXPERIENCE:
            return {...state, experience: state.experience.concat(action.payload)}
    
        default:return state;
    }
}