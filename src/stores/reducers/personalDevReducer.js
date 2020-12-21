import { CREATE_PERSONAL_DEV, EDIT_PERSONAL_DEV } from "../type"


const initialState = {
    personalDevInfo: []
}

export const personalDevReducer = (state = initialState, action) =>{
    switch (action.type) {
        case CREATE_PERSONAL_DEV:
            return { ...state, personalDevInfo: state.personalDevInfo.concat(action.payload) }
        case EDIT_PERSONAL_DEV:
            return { ...state, personalDevInfo: state.personalDevInfo.concat(action.payload) }   
    
        default:return state
    }
}