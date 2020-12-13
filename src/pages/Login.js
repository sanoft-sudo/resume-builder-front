import React, {useContext} from 'react'
import ProfileCard from "../components/ProfileCard";
import {JobsContext} from "../context/JobsContext";
import {CountriesContext} from "../context/CountriesContext";
import PostViewCard from '../components/PostViewCard';
function Login() {

    const {jobList} = useContext(JobsContext);
    const {countries} = useContext(CountriesContext);

    console.log("jobs", jobList);
    console.log("countries", countries);
    return (
        // <div id="login">
            <div className="row d-flex">
                {/* <ProfileCard/> */}
                <PostViewCard/>
                <PostViewCard/>
                <PostViewCard/>
            </div>
            
            
        // </div>
    )
}

export default Login
