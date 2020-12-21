import { CREATE_DRIVING_L, EDIT_DRIVING_L } from "../type"

export const saveDrLicence = (drlicence) => dispatch =>{
    dispatch({
        type: CREATE_DRIVING_L,
        payload: drlicence
    })
}

export const editDrLicence = (drlicence) =>  dispatch =>{

    dispatch({
        type:EDIT_DRIVING_L,
        payload: drlicence
    })
}