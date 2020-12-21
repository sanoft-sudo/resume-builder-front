import { CREATE_DRIVING_L, EDIT_DRIVING_L } from "../type"

const initialState = {
    drLicences: []
}

export const drivingLReducer = (state = initialState, action) =>{
    switch (action.type) {
        case CREATE_DRIVING_L:
            return { ...state, drLicences: state.drLicences.concat(action.payload) }
        case EDIT_DRIVING_L:
            return { ...state, drLicences: state.drLicences.concat(action.payload) }   
    
        default:return state
    }
}