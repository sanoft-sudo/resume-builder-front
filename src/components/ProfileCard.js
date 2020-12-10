import React, {useContext} from 'react';
import "../styles/ProfileCard.css";

import {CandidatesContext} from "../context/CandidatesContext";

function ProfileCard() {
    
    const {candidates} = useContext(CandidatesContext);
    return (
        
            <div className="cards">
            {
                candidates.map(candidate =>(
                <div className="profileCard col-lg-4 col-md-6 col-sm-12">
                    <div key={candidate.id}>
                    <div className="card__header">
                        <div className="profileCard__image">
                            <img className="card__avatar" src={candidate.avatar} alt="profile avatar"/>
                        </div>
                        <div className="profileCard__title">
                            <p className="profileCard__name">
                                {candidate.name}
                            </p>
                            
                            <p className="profileCard__jobTitle">
                                {candidate.job_title}
                            </p>
                                               
                        </div>
                    </div>
                    <div className="profileCard__embaded">
                                <i class="fas fa-crown"></i>
                                <p className="profileCard_topRated">
                                    top rated
                                </p>
                            </div>
                    <div className="card__headerBottom">
                        <p className="card__headerSalary">
                            {candidate.salary_per_hour} / hr
                        </p>
                        <p className="card__headerAddress">
                            {candidate.address}
                        </p>
                    </div>
                    <div className="card__skills">
                        <p className="card__skill">
                            {candidate.skills.first}
                        </p>
                        <p className="card__skill">
                           {candidate.skills.second}
                        </p>
                        <p className="card__skill">
                            {candidate.skills.third}
                        </p>
                       
                    </div>
                    <div className="card__fotter">
                        <button className="cardFooterButton">
                            View profile
                        </button>
                    </div>
            
            </div>
            </div>
                ))
            }
            
            
        </div>
    )
}

export default ProfileCard
