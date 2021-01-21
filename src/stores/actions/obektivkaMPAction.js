import { CREATE_OBEKTIVKA_MP, EDIT_OBEKTIVKA_MP } from "../type"


export const saveObektivkaMP = (obektivka) => dispatch =>{
    dispatch({
        type: CREATE_OBEKTIVKA_MP,
        payload: obektivka
    })
}

export const editObektivkaMP = (obektivka) =>  dispatch =>{

    dispatch({
        type:EDIT_OBEKTIVKA_MP,
        payload: obektivka
    })
}