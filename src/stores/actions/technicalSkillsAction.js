import { CREATE_TECH_SKILLS, EDIT_TECH_SKILLS } from "../type"


export const saveTechSkills = (techskill) => dispatch =>{
    dispatch({
        type: CREATE_TECH_SKILLS,
        payload: techskill
    })
}

export const editTechSkill = (techskill) =>  dispatch =>{

    dispatch({
        type: EDIT_TECH_SKILLS,
        payload: techskill
    })
}