import React, {useContext} from 'react';
import {JobsContext} from "../context/JobsContext";
import {CountriesContext} from "../context/CountriesContext";
import CreateResumeMain from '../components/resumeBuilder/CreateResumeMain';
import Completed from '../components/resumeBuilder/Completed';


function Login() {

    return (
        // <div id="login">
            <div className="row">
                <div className="col">
                    <CreateResumeMain/>
                </div>
                
            </div>
            
            
        // </div>
    )
}

export default Login
