import React, { useState, useEffect, createContext } from 'react';
import axios from "axios";

export const CountriesContext = createContext();

const CountriesContextProvider = (props) =>{
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const getCountries = async () =>{
            await axios.get('http://localhost:5000/countries')
            .then(res =>{
                let data = res.data
                setCountries(data)
            })
            .catch(err =>{
                console.log(err.message);
            })
        }
        getCountries();
    }, []);

    return(
        <CountriesContext.Provider value={{countries, setCountries}}>
            {props.children}
        </CountriesContext.Provider>
    );
}

export default CountriesContextProvider;