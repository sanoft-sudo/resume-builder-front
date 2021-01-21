import { CREATE_OBEKTIVKA_ACADEMIC, EDIT_OBEKTIVKA_ACADEMIC } from "../type"


export const saveObektivkaAcademic = (obektivka) => dispatch =>{
    dispatch({
        type: CREATE_OBEKTIVKA_ACADEMIC,
        payload: obektivka
    })
}

export const editObektivkaAcademic = (obektivka) =>  dispatch =>{

    dispatch({
        type:EDIT_OBEKTIVKA_ACADEMIC,
        payload: obektivka
    })
}