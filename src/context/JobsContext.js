import React, { useState, useEffect, createContext } from 'react';
import axios from "axios";

export const JobsContext = createContext();

const JobsContextProvider = (props) =>{
    const [jobList, setJobList] = useState([]);
    useEffect(() => {
        const getJobList = async () =>{
            await axios.get('http://localhost:5000/jobs')
            .then(res =>{
                setJobList(res.data)
            })
            .catch(err =>{
                console.log(err.message);
            })
        }
        getJobList();
    }, []);

    return(
        <JobsContext.Provider value={{jobList, setJobList}}>
            {props.children}
        </JobsContext.Provider>
    );
}

export default JobsContextProvider;