import React, {useContext} from 'react';
import {JobsContext} from "../context/JobsContext";
import {CountriesContext} from "../context/CountriesContext";
import CreateResumeMain from '../components/resumeBuilder/CreateResumeMain';
import Completed from '../components/resumeBuilder/Completed';


function Login() {

    const {jobList} = useContext(JobsContext);
    const {countries} = useContext(CountriesContext);

    console.log("jobs", jobList);
    console.log("countries", countries);
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
