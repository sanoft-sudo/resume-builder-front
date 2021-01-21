import { CREATE_OBEKTIVKA_PROFILE, EDIT_OBEKTIVKA_PROFILE } from "../type"

export const saveObektivkaProfile = (obektivka) => dispatch =>{
    dispatch({
        type: CREATE_OBEKTIVKA_PROFILE,
        payload: obektivka
    })
}

export const editObektivkapProfile = (obektivka) =>  dispatch =>{

    dispatch({
        type:EDIT_OBEKTIVKA_PROFILE,
        payload: obektivka
    })
}