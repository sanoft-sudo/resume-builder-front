import React from 'react';
import TabForRegister from "./TabForRegister";
import "./LoginAndRegister.css"

function LoginAndRegister() {
    return (
        <div className="container">
            <div className="row">
                 <div className="col-md-6 offset-md-3 col-sm-12">
                <div className="card">
                   <TabForRegister/>
                </div>
            </div>
            </div>
           
            
        </div>
    )
}

export default LoginAndRegister
