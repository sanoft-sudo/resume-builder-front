import { CREATE_OBEKTIVKA_BIRTH, EDIT_OBEKTIVKA_BIRTH } from "../type"

export const saveObektivkaProfile = (obektivka) => dispatch =>{
    dispatch({
        type: CREATE_OBEKTIVKA_BIRTH,
        payload: obektivka
    })
}

export const editObektivkapProfile = (obektivka) =>  dispatch =>{

    dispatch({
        type:EDIT_OBEKTIVKA_BIRTH,
        payload: obektivka
    })
}