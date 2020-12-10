import React, { useState, useEffect, createContext } from 'react';
import axios from "axios";

export const EmployerContext = createContext();

const EmployerContextProvider = (props) =>{
    const [employers, setEmployers] = useState([]);
    useEffect(() => {
        const getEmployers = async () =>{
            await axios.get('http://localhost:5000/postedJob')
            .then(res =>{
                setEmployers(res.data)
            })
            .catch(err =>{
                console.log(err.message);
            })
        }
        getEmployers();
    }, []);

    return(
        <EmployerContext.Provider value={{employers, setEmployers}}>
            {props.children}
        </EmployerContext.Provider>
    );
}

export default EmployerContextProvider;