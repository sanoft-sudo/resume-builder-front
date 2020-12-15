import { CREATE_POSTJOB, EDIT_POSTJOB } from "../type";


const initialState = {
    postjob: {}
}

export const postjobReducer = (state = initialState, action)=>{
    switch (action.type) {
        case CREATE_POSTJOB:
            return {...state, postjob: action.payload}
        case EDIT_POSTJOB:
            return {...state, postjob: action.payload}
    
        default:return state;
    }
}