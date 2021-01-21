import { CREATE_OBEKTIVKA_BIRTH, EDIT_OBEKTIVKA_BIRTH } from "../type";


const initialState ={
    obektivkaBirth:{
        birthDate:"",
        birthRegion:"", 
        birthCityOrDistrict:"",
        nationality:"",
        party_membership:"",
    }
}

export const obektivkaBirthReducer = (state = initialState, action)=>{
    switch (action.type) {
        case CREATE_OBEKTIVKA_BIRTH:
            return {...state, ...{obektivkaBirth: action.payload}}
        case EDIT_OBEKTIVKA_BIRTH:
            return {...state, obektivkaBirth: action.payload}
    
        default:return state;
    }
}