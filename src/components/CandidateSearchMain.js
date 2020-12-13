import React from 'react';
import JobSearchList from './JobSearchList';
import "../styles/JobSearchMain.css"
import CandidateSearchRight from './CandidateSearchRight';

function CandidateSearchMain() {
    return (
        <div className="jobsearchmain__container">
            <div className="row">
                <div className="col-md-4">
                    <JobSearchList/>
                </div>
                <div className="col-md-8">
                    <CandidateSearchRight/>
                </div>
            </div>
        </div>
    )
}

export default CandidateSearchMain
