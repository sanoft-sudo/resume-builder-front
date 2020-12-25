import { CREATE_TECH_SKILLS, DELETE_TECH_SKILLS, EDIT_TECH_SKILLS, GET_SELECTED_TECH_SKILLS } from "../type"

const initialState = {
    techSkillsList: [],
    selectedTechSkill:{}
}

export const technicalSkillsReducer = (state = initialState, action) =>{
    switch (action.type) {
        case CREATE_TECH_SKILLS:
            return { ...state, techSkillsList: state.techSkillsList.concat(action.payload) }

        case EDIT_TECH_SKILLS:
            const list = state.techSkillsList;
            const index = list.findIndex(i => i.id===action.payload.id)
            list.splice(index, 1, action.payload)
            return {techSkillsList: list}

        case DELETE_TECH_SKILLS:
            return{...state,
            techSkillsList: state.techSkillsList.filter((skill, index) => index !==action.payload)
            }

        case GET_SELECTED_TECH_SKILLS:
            return{...state,
            selectedTechSkill: state.techSkillsList.find((skill) => skill.id ===action.payload)
            }

        default:return state
    }
}   