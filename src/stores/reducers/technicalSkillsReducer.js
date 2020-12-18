import { CREATE_TECH_SKILLS, EDIT_TECH_SKILLS } from "../type"

const initialState = {
    techSkillsList: []
}

export const technicalSkillsReducer = (state = initialState, action) =>{
    switch (action.type) {
        case CREATE_TECH_SKILLS:
            return { ...state, techSkillsList: state.techSkillsList.concat(action.payload) }
        case EDIT_TECH_SKILLS:
            return { ...state, techSkillsList: state.techSkillsList.concat(action.payload) }   
    
        default:return state
    }
}