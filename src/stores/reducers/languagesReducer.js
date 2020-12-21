
import {GET_LANGUAGES_UZ, GET_LANGUAGES_RU, GET_LANGUAGES_EN, SAVE_LANGUAGES } from "../type";



const initialState = {
    languagesList: [],
    languageUZ :[],
    languageRU :[],
    languageEN :[],
}

export const languagesReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SAVE_LANGUAGES:
            return { ...state, languagesList: state.languagesList.concat(action.payload) }

        case GET_LANGUAGES_UZ:
                return { ...state, languageUZ: action.payload }
        case GET_LANGUAGES_RU:
                return { ...state, languageRU: action.payload }
        case GET_LANGUAGES_EN:
                return { ...state, languageEN: action.payload }

    
        default:return state
    }
}