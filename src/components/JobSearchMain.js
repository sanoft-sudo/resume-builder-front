import React from 'react';
import JobSearchList from './JobSearchList';
import "../styles/JobSearchMain.css"
import JobSearchRight from './JobSearchRight';

function JobSearchMain() {
    return (
        <div className="jobsearchmain__container">
            <div className="row">
                <div className="col-md-3">
                    <JobSearchList/>
                </div>
                <div className="col-md-9">
                    <JobSearchRight/>
                </div>
            </div>
        </div>
    )
}

export default JobSearchMain
