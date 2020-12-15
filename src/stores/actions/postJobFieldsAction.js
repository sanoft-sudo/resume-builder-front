import { CREATE_POSTJOB, EDIT_POSTJOB } from "../type";

export const savePostJob = (postjob) => dispatch =>{

    console.log("POST JOB IN ACTION", postjob);
    dispatch({
        type: CREATE_POSTJOB,
        payload: postjob
    })
}

export const EditPostJob = (postjob) => dispatch =>{

    dispatch({
        type: EDIT_POSTJOB,
        payload: postjob
    })
}