
import {GET_LANGUAGES_UZ, GET_LANGUAGES_RU, GET_LANGUAGES_EN, SAVE_LANGUAGES } from "../type";
import axios from 'axios';


export const saveLanguage = (language) => async dispatch =>{
    dispatch({
        type: SAVE_LANGUAGES,
        payload: language
    })
}

export const getLanguagUZ = () => {
try {
    return (dispatch) => {
        axios.get('http://localhost:5000/languagesUZ')
        .then(res =>{
            const language_uz = res.data
            console.log("Res.data UZ", language_uz);
            dispatch({
                type: GET_LANGUAGES_UZ,
                payload: language_uz
            })
        }).catch(err =>{
            const errMsg = err.message
        })
    }   
       
} catch (error) {
    console.log(error.message);
}  
  
}
export const getLanguagRU = () => {
try {
    return (dispatch) => {
        axios.get('http://localhost:5000/languagesRU')
        .then(res =>{
            const language_ru = res.data
            console.log("Res.data RU", language_ru);
            dispatch({
                type: GET_LANGUAGES_RU,
                payload: language_ru
            })
        }).catch(err =>{
            const errMsg = err.message
        })
    }   
} catch (error) {
    console.log(error.message);
}  
  
}
export const getLanguagEN = () =>{
try {
    return (dispatch) => {
        axios.get('http://localhost:5000/languagesEN')
        .then(res =>{
            const language_en = res.data
            console.log("Res.data EN", language_en);
            dispatch({
                type: GET_LANGUAGES_EN,
                payload: language_en
            })
        }).catch(err =>{
            const errMsg = err.message
        })
    }   
} catch (error) {
    console.log(error.message);
}  
  
}