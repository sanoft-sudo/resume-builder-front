import React from 'react'
import ProfileCard from "../components/ProfileCard"

function Login() {
    return (
        <div id="login">
            <div className="row">
                <div className="col-lg-4">
                <ProfileCard/>
            </div>
            <div className="col-lg-4">
                <ProfileCard/>
            </div>
            <div className="col-lg-4">
                <ProfileCard/>
            </div>
            </div>
            
            
        </div>
    )
}

export default Login
