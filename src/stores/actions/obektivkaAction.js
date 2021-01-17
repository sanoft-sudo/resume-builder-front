import { CREATE_OBEKTIVKA, EDIT_OBEKTIVKA } from "../type"


export const saveObektivka = (obektivka) => dispatch =>{
    dispatch({
        type: CREATE_OBEKTIVKA,
        payload: obektivka
    })
}

export const editObektivka = (obektivka) =>  dispatch =>{

    dispatch({
        type:EDIT_OBEKTIVKA,
        payload: obektivka
    })
}