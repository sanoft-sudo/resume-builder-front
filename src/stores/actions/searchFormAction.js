


export const searchFormRequest = (profileInfo) =>  dispatch => {
   
    dispatch ({
        type: CREATE_PROFILE_INFO,
        payload: profileInfo
    })
}

export const getSearchFormResponse = (id) =>  dispatch => {
   
    dispatch ({
        type: GET_PROFILE_INFO,
        payload: id
    })
}