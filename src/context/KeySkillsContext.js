import React, { useState, useEffect, createContext } from 'react';
import axios from "axios";

export const KeySkillsContext = createContext();

const KeySkillsContextProvider = (props) =>{
    const [keySkills, setKeySkills] = useState([]);
    useEffect(() => {
        const getKeySkills = async () =>{
             await axios.get('http://localhost:5000/keySkills')
            .then(res =>{
                setKeySkills(res.data)
            })
            .catch(err =>{
                console.log(err.message);
            })
        }
        getKeySkills();
    }, []);

    return(
        <KeySkillsContext.Provider value={{keySkills, setKeySkills}}>
            {props.children}
        </KeySkillsContext.Provider>
    );
}

export default KeySkillsContextProvider;