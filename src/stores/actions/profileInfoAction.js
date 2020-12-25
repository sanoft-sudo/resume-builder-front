import { CREATE_PROFILE_INFO, DELETE_PROFILE_INFO, EDIT_CLICK, EDIT_PROFILE_INFO, GET_PROFILE_INFO } from "../type"


export const saveProfileInfo = (profileInfo) =>  dispatch => {
   
    dispatch ({
        type: CREATE_PROFILE_INFO,
        payload: profileInfo
    })
}

export const getProfileInfo = (id) =>  dispatch => {
   
    dispatch ({
        type: GET_PROFILE_INFO,
        payload: id
    })
}

export const deleteProfileInfo = (id) =>  dispatch => {
   
    dispatch ({
        type: DELETE_PROFILE_INFO,
        payload: id
    })
}

export const editProfileInfo = (profileInfo) =>  dispatch =>{

    dispatch({
        type:EDIT_PROFILE_INFO,
        payload: profileInfo
    })
}

export const clearProfileInfo = (profileInfo) =>  dispatch =>{

    dispatch({
        type:EDIT_PROFILE_INFO,
        payload: profileInfo
    })
}
