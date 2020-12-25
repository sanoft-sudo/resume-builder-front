import { GET_NUMBERS_1_100 } from "../type"


const initialState = {
    numbersRank :[],
}

export const numbersReducer = (state = initialState, action) =>{
    switch (action.type) {
        case GET_NUMBERS_1_100:
                return { ...state, numbersRank: action.payload }
        
        default:return state
    }
}