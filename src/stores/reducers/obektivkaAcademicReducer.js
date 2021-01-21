import { CREATE_OBEKTIVKA_ACADEMIC, EDIT_OBEKTIVKA_ACADEMIC } from "../type";


const initialState ={
    obektivkaAcademic:{
        degree:"",
        graduated_when:"",
        graduated_where:"",
        graduation_shift:false,
        diploma_speciality:"",
        academic_degree:"",
        academic_title:"",
        military_title:"",
    }
}

export const obektivkaAcademicReducer = (state = initialState, action)=>{
    switch (action.type) {
        case CREATE_OBEKTIVKA_ACADEMIC:
            return {...state, ...{obektivkaAcademic: action.payload}}
        case EDIT_OBEKTIVKA_ACADEMIC:
            return {...state, obektivkaAcademic: action.payload}
    
        default:return state;
    }
}