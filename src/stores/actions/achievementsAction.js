import { CREATE_ACHIEVEMENTS, EDIT_ACHIEVEMENTS } from "../type"



export const saveAchievement = (achievement) => dispatch =>{

    dispatch({
        type: CREATE_ACHIEVEMENTS,
        payload: achievement
    })
}

export const editAchievement = (achievement) => dispatch =>{

    dispatch({
        type: EDIT_ACHIEVEMENTS,
        payload: achievement
    })
}