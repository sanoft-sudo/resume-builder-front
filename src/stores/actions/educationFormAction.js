
import {CREATE_EDUCATION, EDIT_EDUCATION} from "../type";


export const saveEducation = (education) => dispatch =>{
    console.log("this is education", education);
    dispatch({
        type: CREATE_EDUCATION,
        payload: education
    })

} 
export const editEducation = (education) => dispatch =>{
    dispatch({
        type: EDIT_EDUCATION,
        payload: education
    })
} 