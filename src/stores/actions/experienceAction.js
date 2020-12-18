import { CREATE_EXPERIENCE, EDIT_EXPERIENCE } from "../type"


export const saveExperience = (experience) => dispatch =>{

    dispatch({
        type: CREATE_EXPERIENCE,
        payload: experience
    })
}

export const editExperience = (experience) => dispatch =>{

    dispatch({
        type: EDIT_EXPERIENCE,
        payload: experience
    })
}