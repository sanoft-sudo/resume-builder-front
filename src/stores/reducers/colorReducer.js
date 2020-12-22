import { CREATE_COLOR, SELECT_COLOR } from "../type"

const initialState = {
    colors: [ 
    {id:777, color: "#6a1b9a"},
    {id:888, color: "#32a852"},
    {id:999, color: "#3250a8"},
    {id:666, color: "#dbd144"},
    {id:555, color: "#c42121"},
    {id:555, color: "#E4E0DC"}
],
    selectedColor:{}
}

export const colorReducer = (state = initialState, action) =>{
    switch (action.type) {
        case CREATE_COLOR:
            return { ...state, colors: state.colors.concat(action.payload) }
        case SELECT_COLOR:
            return { ...state, selectedColor: action.payload}
        default:return state
    }
}
