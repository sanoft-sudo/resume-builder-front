import { CREATE_OBEKTIVKA_AWARDS, EDIT_OBEKTIVKA_AWARDS } from "../type";


const initialState ={
    stateAwards:[],
}

export const obektivkaStateAwardReducer = (state = initialState, action)=>{
    switch (action.type) {
        case CREATE_OBEKTIVKA_AWARDS:
            return {...state, stateAwards: state.stateAwards.concat(action.payload)}
        case EDIT_OBEKTIVKA_AWARDS:
            return {...state, stateAwards: state.stateAwards.concat(action.payload)}
    
        default:return state;
    }
}