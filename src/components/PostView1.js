import React from 'react';
import "../styles/PostView.css";
import Button from '@material-ui/core/Button';
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

function PostView() {
    const postjob = useSelector(state => state.postjobReducer.postjob)
    
    const history = useHistory();
    return (
        <div className="postview">
            <div className="card__header">
                    <div className="header__content">
                        <p className="job__title">{postjob.jobTitle}</p>
                        <p className="job__company">{postjob.company}</p>
                        <p className="job__address">{postjob.address_street}</p>
                    </div>
                    <div className="apply__button">
                        <Button variant="contained" color="primary" onClick={e => history.push("/buildresume")}>
                            Send Resume
                        </Button>
                    </div>
                </div>
            <div className="card_view">
                <div className="card__body">
                    <p style={{textTransform:"capitalize"}}>{postjob.jobTitle}</p>
                    <p className="job__decs"><strong>Job Description</strong></p>
                    <p className="about__job">
                    {postjob.aboutJob}
                    </p>
                    <p className="job__requires"><strong>Responsibilities</strong></p>
                    <p>{postjob.addRequirement}
                    </p>
                    <p><strong>Job location</strong> : <ul>{postjob.adRegion && postjob.adRegion?.map(adreg =>(
                        <li key={adreg.id}>{ adreg.name}</li>
                        ))}
                       
                        </ul> </p>
                    <p><strong>Employee Status</strong> : {postjob.jobCondition}</p>
                    <p><strong>Shift</strong> : {postjob.jobShift}</p>
                    <p><strong>Placeto work</strong> : {postjob.workplace}</p>
                    <p><strong>Job type</strong> : {postjob.jobType}</p>
                    <p><strong>Salary range</strong> : from $ {postjob.fromSalary} to $ {postjob.toSalary} per {postjob.salaryType}</p>
                    {postjob.languages &&
                    <div className="language__box">
                        <p><strong>Reuired languages : </strong></p>
                        <div className="languages">
                            {postjob.languages ?(
                                postjob.languages?.map(language =>(
                                <p className="laguages__list" key={language.id}>{language.name}</p>
                                ))
                            ):""}
                        </div>
                    
                    </div>
                    
                        }
                    {postjob.skills &&
                    <div className="language__box">
                        <p><strong>Reuired skills : </strong></p>
                        <div className="languages">
                            {postjob.skills ?(
                                postjob.skills?.map(skill =>(
                                <p className="laguages__list">{skill.label}</p>
                                ))
                            ):""}
                        </div>
                    
                    </div>
                    
                        }
                    <div className="about__company">
                        <p>
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default PostView
