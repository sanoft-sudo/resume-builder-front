import React, {useContext} from 'react';
import "../styles/ProfileCard.css";

import {EmployerContext} from "../context/EmployerContext";

function ProfileCardPost(data) {
    
    const {employers} = useContext(EmployerContext);
    const employer = data;
    return (
        
            <div className="cards">
            {/* {
                data.map(employer =>( */}
                <div className="profileCard col-lg-6 col-md-12 col-sm-12">
                    <div key={employer.id}>
                    <div className="card__header">
                        <div className="profileCard__image">
                            <img className="card__avatar" src={employer?.avatar} alt="profile avatar"/>
                        </div>
                        <div className="profileCard__title">
                            <p className="profileCard__name">
                                {employer.company}
                            </p>
                            
                            <p className="profileCard__jobTitle">
                                {employer.job_title}
                            </p>
                                               
                        </div>
                    </div>
                    <div className="profileCard__embaded">
                                {/* <i class="fas fa-crown"></i>
                                <p className="profileCard_topRated">
                                    top rated
                                </p> */}
                            </div>
                    <div className="card__headerBottom">
                        <p className="card__headerSalary">
                            {employer.fromSalary} / {employer.salaryType}
                        </p>
                        <p className="card__headerAddress">
                            {employer.country}
                        </p>
                    </div>
                    <div className="card__headerBottom">
                        <p className="card__headerSalary">
                            {employer.jobType}
                        </p>
                        <p className="card__headerAddress">
                            {employer.jobCondition}
                        </p>
                    </div>
                    {/* <div className="card__skills">
                        <p className="card__skill">
                            {employer.skills.first}
                        </p>
                        <p className="card__skill">
                           {employer.skills.second}
                        </p>
                        <p className="card__skill">
                            {employer.skills.third}
                        </p>
                       
                    </div> */}
                    <div className="card__fotter">
                        <button className="cardFooterButton">
                            View profile
                        </button>
                    </div>
            
            </div>
            </div>
                {/* ))
            }
             */}
            
        </div>
    )
}

export default ProfileCardPost
