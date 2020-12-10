import React, { useState, useEffect, createContext } from 'react';
import axios from "axios";

export const CandidatesContext = createContext();

const CandidatesContextProvider = (props) =>{
    const [candidates, setCandidates] = useState([]);
    useEffect(() => {
        const getCandidates = async () =>{
             await axios.get('http://localhost:5000/postedResume')
            .then(res =>{
                setCandidates(res.data)
            })
            .catch(err =>{
                console.log(err.message);
            })
        }
        getCandidates();
    }, []);

    return(
        <CandidatesContext.Provider value={{candidates, setCandidates}}>
            {props.children}
        </CandidatesContext.Provider>
    );
}

export default CandidatesContextProvider;