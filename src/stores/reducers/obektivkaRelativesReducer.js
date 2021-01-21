import { CREATE_OBEKTIVKA_RELATIVES, EDIT_OBEKTIVKA_EXPERIENCE } from "../type";


const initialState ={
    relatives:[],
}

export const obektivkaRelativesReducer = (state = initialState, action)=>{
    switch (action.type) {
        case CREATE_OBEKTIVKA_RELATIVES:
            return {...state, relatives: state.relatives.concat(action.payload)}
        case EDIT_OBEKTIVKA_EXPERIENCE:
            return {...state, relatives: state.relatives.concat(action.payload)}
    
        default:return state;
    }
}