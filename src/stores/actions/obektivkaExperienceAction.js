import { CREATE_OBEKTIVKA_EXPERIENCE, EDIT_OBEKTIVKA_EXPERIENCE } from "../type"


export const saveObektivkaExperience = (obektivka) => dispatch =>{
    dispatch({
        type: CREATE_OBEKTIVKA_EXPERIENCE,
        payload: obektivka
    })
}

export const editObektivkaExperience = (obektivka) =>  dispatch =>{

    dispatch({
        type:EDIT_OBEKTIVKA_EXPERIENCE,
        payload: obektivka
    })
}