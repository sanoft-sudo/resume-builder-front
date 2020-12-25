import { GET_NUMBERS_1_100 } from "../type"
import axios from "axios";



export const getNumbers = () => {
    try {
        return (dispatch) => {
            axios.get('http://localhost:5000/numbersf1t100')
            .then(res =>{
                const numbers1t100 = res.data
                dispatch({
                    type: GET_NUMBERS_1_100,
                    payload: numbers1t100
                })
            }).catch(err =>{
                const errMsg = err.message
            })
        }   
           
    } catch (error) {
        console.log(error.message);
    }  
      
    }