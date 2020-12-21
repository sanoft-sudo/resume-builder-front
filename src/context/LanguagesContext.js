import React, { useState, useEffect, createContext } from 'react';
import axios from "axios";

export const LanguagesContext = createContext();

const LanguagesContextProvider = (props) =>{
    const [languagesUZ, setLanguagesUZ] = useState([]);
    const [languagesRU, setLanguagesRU] = useState([]);
    const [languagesEN, setLanguagesEN] = useState([]);
    
    useEffect(() => {
        const getLanguagesUZ = async () =>{
             await axios.get('http://localhost:5000/languagesUZ')
            .then(res =>{
                console.log("responces succeded", res.data);
                setLanguagesUZ(res.data)
            })
            .catch(err =>{
                console.log(err.message);
            })
        }
        getLanguagesUZ();
    }, []);
    useEffect(() => {
        const getLanguagesRU = async () =>{
             await axios.get('http://localhost:5000/languagesRU')
            .then(res =>{
                setLanguagesRU(res.data)
            })
            .catch(err =>{
                console.log(err.message);
            })
        }
        getLanguagesRU();
    }, []);
    useEffect(() => {
        const getLanguagesEN = async () =>{
             await axios.get('http://localhost:5000/languagesEN')
            .then(res =>{
                setLanguagesEN(res.data)
            })
            .catch(err =>{
                console.log(err.message);
            })
        }
        getLanguagesEN();
    }, []);

    return(
        <LanguagesContext.Provider value={{languagesUZ, languagesRU, languagesEN}}>
            {props.children}
        </LanguagesContext.Provider>
    );
}

export default LanguagesContextProvider;