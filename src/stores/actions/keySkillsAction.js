import { CREATE_KEYSKILLS, EDIT_KEYSKILLS } from "../type"


export const saveKeySkills = (keyskill) => dispatch =>{
    dispatch({
        type: CREATE_KEYSKILLS,
        payload: keyskill
    })
}

export const editKeySkills = (keyskill) =>  dispatch =>{

    dispatch({
        type:EDIT_KEYSKILLS,
        payload: keyskill
    })
}