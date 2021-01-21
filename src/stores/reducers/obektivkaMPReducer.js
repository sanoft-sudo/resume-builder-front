import { CREATE_OBEKTIVKA_MP, EDIT_OBEKTIVKA_MP } from "../type";



const initialState ={
    mp:[
        {mpStart:"", mpEnd:"", mpPosition:"", isMp:false}
    ],
}

export const obektivkaMPReducer = (state = initialState, action)=>{
    switch (action.type) {
        case CREATE_OBEKTIVKA_MP:
            return {...state, mp: state.mp.concat(action.payload)}
        case EDIT_OBEKTIVKA_MP:
            return {...state, mp: state.mp.concat(action.payload)}
    
        default:return state;
    }
}