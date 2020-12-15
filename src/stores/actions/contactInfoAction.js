import { CREATE_CONTACT_INFO, EDIT_CONTACT_INFO } from "../type"


export const saveContactInfo = (contact) => dispatch =>{
console.log("contact in action");
    dispatch({
        type: CREATE_CONTACT_INFO,
        payload: contact
    })
}

export const EditContactInfo = (contact) =>  dispatch =>{

    dispatch({
        type:EDIT_CONTACT_INFO,
        payload: contact
    })
}