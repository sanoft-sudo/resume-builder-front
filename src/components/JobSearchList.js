import React, {useEffect, useState} from 'react';
import "../styles/JobSearchList.css";
import axios from "axios";
import InfoIcon from '@material-ui/icons/Info';

function JobSearchList() {
    const[ jobTitles, setJobTitles] = useState([]);

    useEffect(() => {
        const getList = async () =>{
             await axios.get('http://localhost:5000/jobList')
            .then(res =>{
                setJobTitles(res.data)
            })
            .catch(err =>{
                console.log(err.message);
            })
        }
        getList();
    }, []);

    console.log("joblist", jobTitles);
    return (
        <div className="jobsearchlist">
            <div className="row">
                <div className="col">
                    <h2>Last Updates</h2>
                    <select name="salary__type" id="salary__type">
                        <option key="value" value="0" disabled selected>Select an option</option>
                        <option key="value" value="day">1 day</option>
                        <option key="value" value="3 days">3 days</option>
                        <option key="value" value="Week">Week</option>
                        <option key="value" value="2 weeks">2 Weeks</option>
                        <option key="value" value="month">month</option>
                        <option key="value" value="2 months">2 months</option>
                        <option key="value" value="6 months">6 months</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col aviability">
                    <div className="aviability__icon">
                       <h2 className="aviability__title">Aviability </h2><InfoIcon/> 
                    </div>
                    <div>
                        <input type="checkbox" className="map__titles" id="readyToWork" name="readyToWork" value="readyToWork"/><label  htmlFor="readyToWork"><span className="jobtitles__span">Ready to work</span></label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h2>Job Titles</h2>
                            {
                                jobTitles.map(job =>(
                                    <div className="row jobsearchlist__map">
                                        <div className="first__column">
                                            <input type="checkbox" className="map__titles" id={job.id} name={job.id} value={job.title}/><label  htmlFor={job.id}><span className="jobtitles__span">{job.title}</span></label>
                                        </div>
                                        <div className="second__column">15+</div>
                                    </div>
                                ))
                            }
                        
                </div>
            </div>
            
        </div>
    )
}

export default JobSearchList
