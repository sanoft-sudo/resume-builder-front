import { CREATE_KEYSKILLS, EDIT_KEYSKILLS } from "../type";

const initialState = {
    keyskillsList: []
}

export const keySkillsReducer = (state = initialState, action) =>{
    switch (action.type) {
        case CREATE_KEYSKILLS:
            return { ...state, keyskillsList: state.keyskillsList.concat(action.payload) }
        case EDIT_KEYSKILLS:
            return { ...state, keyskillsList: state.keyskillsList.concat(action.payload) }   
    
        default:return state
    }
}