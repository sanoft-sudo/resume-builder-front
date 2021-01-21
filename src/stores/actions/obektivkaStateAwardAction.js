import { CREATE_OBEKTIVKA_AWARDS, EDIT_OBEKTIVKA_AWARDS } from "../type"


export const saveObektiveAwards = (obektivka) => dispatch =>{
    dispatch({
        type: CREATE_OBEKTIVKA_AWARDS,
        payload: obektivka
    })
}

export const editObektiveAwards = (obektivka) =>  dispatch =>{

    dispatch({
        type:EDIT_OBEKTIVKA_AWARDS,
        payload: obektivka
    })
}