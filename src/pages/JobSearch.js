import React from 'react';
import JobSearchBanner from '../components/JobSearchBanner';
import JobSearchMain from '../components/JobSearchMain';
import "../styles/JobSearch.css"

function FindAJob() {
    return (
        <div id="jobsearch">
            <JobSearchBanner/>
            <JobSearchMain/>
        </div>
    )
}

export default FindAJob
