import { CREATE_PROFILE_INFO, EDIT_CLICK, EDIT_PROFILE_INFO } from "../type"


export const saveProfileInfo = (profileInfo) =>  dispatch => {
    console.log("inAction", profileInfo);
   
    dispatch ({
        type: CREATE_PROFILE_INFO,
        payload: profileInfo
    })
}
export const EditProfileInfo = (profileInfo) =>  dispatch =>{

    dispatch({
        type:EDIT_PROFILE_INFO,
        payload: profileInfo
    })
}
