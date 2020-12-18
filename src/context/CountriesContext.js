import React, { useState, useEffect, createContext } from 'react';
import axios from "axios";

export const CountriesContext = createContext();

const CountriesContextProvider = (props) =>{
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const getCountries = async () =>{
            await axios.get('https://country.register.gov.uk/records.json?page-size=5000')
            .then(res =>{
                let countryList = res.data;
                setCountries(Object.keys(countryList).map((key) => countryList[key].item[0]))
               
               
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