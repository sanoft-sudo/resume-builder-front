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
                        <p className="job__company">{postjob.companyName}</p>
                        <p className="job__address">{postjob.country}</p>
                    </div>
                    <div className="apply__button">
                        <Button variant="contained" color="primary" onClick={e => history.push("/buildresume")}>
                            Send Resume
                        </Button>
                    </div>
                </div>
            <div className="card_view">
                <div className="card__body">
                    <p>{postjob.jobTitle}</p>
                    <p className="job__decs">Job Description</p>
                    <p className="about__job">
                    {postjob.aboutJob}
                    </p>
                    <p className="job__requires">Responsibilities</p>
                    <p>{postjob.addRequirement}
                    </p>
                    <p><strong>Job location</strong> : {postjob.adRegion}</p>
                    <p><strong>Employee Status</strong> : {postjob.jobCondition}</p>
                    <p><strong>Shift</strong> : {postjob.isNightShift}</p>
                    <p><strong>Placeto work</strong> : {postjob.workplace}</p>
                    <p><strong>Job type</strong> : {postjob.jobType}</p>
                    <p><strong>Salary range</strong> : from $ {postjob.fromSalary} to $ {postjob.toSalary} per {postjob.salaryType}</p>
                    {postjob.languages &&
                    <div className="language__box">
                        <p><strong>Reuired languages : </strong></p>
                        <div className="languages">
                            {postjob.languages ?(
                                postjob.languages?.map(language =>(
                                <p className="laguages__list">{language.label}</p>
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
