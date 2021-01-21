import { CREATE_OBEKTIVKA_LANGUAGES, GET_LANGUAGES_UZ, GET_LANGUAGES_RU, GET_LANGUAGES_EN } from "../type"


const initialState = {
    languages: [],
    languageUZ :[],
    languageRU :[],
    languageEN :[],
}

export const obektivkaLanguageReducer = (state = initialState, action) =>{
    switch (action.type) {
        case CREATE_OBEKTIVKA_LANGUAGES:
            return { ...state, languages: state.languages.concat(action.payload) }

        case GET_LANGUAGES_UZ:
                return { ...state, languageUZ: action.payload }
        case GET_LANGUAGES_RU:
                return { ...state, languageRU: action.payload }
        case GET_LANGUAGES_EN:
                return { ...state, languageEN: action.payload }

    
        default:return state
    }
}