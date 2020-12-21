import { CREATE_PERSONAL_DEV, EDIT_PERSONAL_DEV } from "../type"

export const savePersonalDev = (personalDev) => dispatch =>{

    dispatch({
        type: CREATE_PERSONAL_DEV,
        payload: personalDev
    })
}

export const editPersonalDev = (personalDev) => dispatch =>{

    dispatch({
        type: EDIT_PERSONAL_DEV,
        payload: personalDev
    })
}