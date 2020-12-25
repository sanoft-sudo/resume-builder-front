import { CREATE_TECH_SKILLS, DELETE_TECH_SKILLS, EDIT_TECH_SKILLS, GET_SELECTED_TECH_SKILLS } from "../type"


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

export const getSelectedTechSkill = (id) =>  dispatch =>{

    dispatch({
        type: GET_SELECTED_TECH_SKILLS,
        payload: id
    })
}

export const deleteTechSkill = (index) =>  dispatch =>{
    dispatch({
        type: DELETE_TECH_SKILLS,
        payload: index
    })
}