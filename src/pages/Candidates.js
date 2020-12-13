import React from 'react';
import CandidateSearchMain from '../components/CandidateSearchMain';
import JobSearchBanner from "../components/JobSearchBanner";


import "../styles/Candidates.css"

function Candidates() {
    return (
        <div className="candidates">
            <JobSearchBanner/>
            <CandidateSearchMain/>            
        </div>
    )
}

export default Candidates
