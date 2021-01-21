import { CREATE_OBEKTIVKA_PROFILE, EDIT_OBEKTIVKA_PROFILE } from "../type";

const initialState ={
    obektivkaProfile:{
        fullName:"",
        isWorking: false,
        currentFromDate:"",
        currentCompany:"",
        currentPosition:"",
    }
}

export const obektivkaProfileReducer = (state = initialState, action)=>{
    switch (action.type) {
        case CREATE_OBEKTIVKA_PROFILE:
            return {...state, ...{obektivkaProfile: action.payload}}
        case EDIT_OBEKTIVKA_PROFILE:
            return {...state, obektivkaProfile: action.payload}
    
        default:return state;
    }
}