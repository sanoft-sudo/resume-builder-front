import React from 'react';
import "../styles/PostView.css";
import Button from '@material-ui/core/Button';
import {useHistory} from "react-router-dom";

function PostView(props) {
    console.log("props>>>", props);
    const {data} = props;
    const history = useHistory();
    return (
        <div className="postview">
            <div className="card__header">
                    <div className="header__content">
                        <p className="job__title">{data.jobTitle}</p>
                        <p className="job__company">{data.companyName}</p>
                        <p className="job__address">{data.country}</p>
                    </div>
                    <div className="apply__button">
                        <Button variant="contained" color="primary" onClick={e => history.push("/buildresume")}>
                            Send Resume
                        </Button>
                    </div>
                </div>
            <div className="card_view">
                <div className="card__body">
                    <p>{data.jobTitle}</p>
                    <p className="job__decs">Job Description</p>
                    <p className="about__job">
                    {data.aboutJob}
                    </p>
                    <p className="job__requires">Responsibilities</p>
                    <p>{data.addRequirement}
                    </p>
                    <p><strong>Job location</strong> : {data.adRegion}</p>
                    <p><strong>Employee Status</strong> : {data.jobCondition}</p>
                    <p><strong>Shift</strong> : {data.isNightShift}</p>
                    <p><strong>Placeto work</strong> : {data.workplace}</p>
                    <p><strong>Job type</strong> : {data.jobType}</p>
                    <p><strong>Salary range</strong> : from $ {data.fromSalary} to $ {data.toSalary} per {data.salaryType}</p>
                    {data.languages &&
                    <div className="language__box">
                        <p><strong>Languages : </strong></p>
                        <div className="languages">
                            {data.languages ?(
                                data.languages?.map(language =>(
                                <p className="laguages__list">{language.label}</p>
                                ))
                            ):""}
                        </div>
                    
                    </div>
                    
                        }
                    {data.skills &&
                    <div className="language__box">
                        <p><strong>Skills : </strong></p>
                        <div className="languages">
                            {data.skills ?(
                                data.skills?.map(skill =>(
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
