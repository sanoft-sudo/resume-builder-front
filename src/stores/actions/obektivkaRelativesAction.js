import { CREATE_OBEKTIVKA_RELATIVES, EDIT_OBEKTIVKA_RELATIVES } from "../type"


export const saveObektivkaRelatives = (obektivka) => dispatch =>{
    dispatch({
        type: CREATE_OBEKTIVKA_RELATIVES,
        payload: obektivka
    })
}

export const editObektivkaRelatives = (obektivka) =>  dispatch =>{

    dispatch({
        type:EDIT_OBEKTIVKA_RELATIVES,
        payload: obektivka
    })
}