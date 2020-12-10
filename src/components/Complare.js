import React, {useContext} from 'react'
import {CandidatesContext} from "../context/CandidatesContext";
function Complare() {
    const {candidates} = useContext(CandidatesContext);
    var jobList = [];
    candidates.map(candidate =>(
        jobList.push(candidate.job_title)
    ));
    console.log("job lists", jobList);
    var result = [];
jobList.forEach(function(item) {
     if(result.indexOf(item) < 0) {
         result.push(item);
     }
});
console.log("unique", result);
    return (
        <div>
            JOblist
        </div>
    )
}

export default Complare
