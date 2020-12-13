import React from 'react';
import "../styles/JobSearchRight.css";
import PostViewCard from './PostViewCard';

function JobSearchRight() {
    return (
        <div className="jobsearchright">
            <div className="row job__lists">
                <PostViewCard/>
            </div>
        </div>
    )
}

export default JobSearchRight
