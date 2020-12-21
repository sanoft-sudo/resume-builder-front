import { CREATE_ACHIEVEMENTS, EDIT_ACHIEVEMENTS } from "../type"

const initialState = {
    achievements: []
}

export const achievementsReducer = (state = initialState, action) =>{
    switch (action.type) {
        case CREATE_ACHIEVEMENTS:
            return { ...state, achievements: state.achievements.concat(action.payload) }
        case EDIT_ACHIEVEMENTS:
            return { ...state, achievements: state.achievements.concat(action.payload) }   
    
        default:return state
    }
}