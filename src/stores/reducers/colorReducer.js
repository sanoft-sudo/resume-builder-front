import { CREATE_COLOR, SELECT_COLOR } from "../type"

const initialState = {
    colors: [ 
    {id:777, colorHead: "#757166", colorHeadings: "#757166", colorLine: "#757166", colorSide:"#524e45", textColor: "#ffffff"},
    {id:888, colorHead: "#81a351", colorHeadings: "#81a351", colorLine: "#81a351", colorSide:"#44736d",  textColor: "#ffffff"},
    {id:999, colorHead: "#6379ba", colorHeadings: "#6379ba", colorLine: "#6379ba", colorSide:"#022075",  textColor: "#ffffff"},
    {id:666, colorHead: "#e6e095", colorHeadings: "#000000", colorLine: "#000000", colorSide:"#dbd144",  textColor: "#000000"},
    {id:555, colorHead: "#de5f5f", colorHeadings: "#de5f5f", colorLine: "#de5f5f", colorSide:"#8c1f1f",  textColor: "#ffffff"},
    {id:555, colorHead: "#E4E0DC", colorHeadings: "#000000", colorLine: "#000000", colorSide:"#8a7e72",  textColor: "#000000"}
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
