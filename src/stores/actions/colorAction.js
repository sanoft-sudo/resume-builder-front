import { CREATE_COLOR, SELECT_COLOR } from "../type"



export const saveColor = (color) => dispatch =>{

    dispatch({
        type: CREATE_COLOR,
        payload: color
    })
}
export const selectColor = (color) => dispatch =>{

    dispatch({
        type: SELECT_COLOR,
        payload: color
    })
}