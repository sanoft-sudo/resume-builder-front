import React, { useState, useEffect, createContext } from 'react';
import axios from "axios";

export const TechnicalSkillsContext = createContext();

const TechnicalSkillsContextProvider = (props) =>{
    const [technicalSkills, setTechnicalSkills] = useState([]);
    useEffect(() => {
        const getTechnicalSkills = async () =>{
             await axios.get('http://localhost:5000/technicalSkills')
            .then(res =>{
                setTechnicalSkills(res.data)
            })
            .catch(err =>{
                console.log(err.message);
            })
        }
        getTechnicalSkills();
    }, []);

    return(
        <TechnicalSkillsContext.Provider value={{technicalSkills, setTechnicalSkills}}>
            {props.children}
        </TechnicalSkillsContext.Provider>
    );
}

export default TechnicalSkillsContextProvider;