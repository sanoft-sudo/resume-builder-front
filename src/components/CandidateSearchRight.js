import React from 'react';
import "../styles/JobSearchRight.css";
import ProfileCard from "../components/ProfileCard"

function CandidateSearchRight() {

    return (
        <div className="jobsearchright">
            <div className="row job__lists">
                <ProfileCard/>
            </div>
        </div>
    )
}

export default CandidateSearchRight
