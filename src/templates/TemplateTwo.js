import React from 'react';
import "./templateStyles/TemplateOne.css";
import CallIcon from '@material-ui/icons/Call';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import RoomIcon from '@material-ui/icons/Room';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TelegramIcon from '@material-ui/icons/Telegram';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import ProgressBar from '../components/ProgressBar';
import {useDispatch, useSelector} from "react-redux";


function TemplateOne() {
const completed1 = 75;
const completed2 = 85;
const completed3 = 80;

const dispatch = useDispatch();
const profileInfo = useSelector(state => state.profileReducer.profileInfo);
const contact = useSelector(state => state.contactReducer.contact);
const educations = useSelector(state => state.educationReducer.educations)

    return (
        <div className="template__one container">
            <div className="row">
                <div className="col-md-4 template__oneLeft">
                    <div className="template__oneImage">
                        <img src="../../assets/images/templateImages/mini.jpg" alt=""/>
                    </div>
                    <div className="left__box">
                    <div className="template__oneContacts">
                    <p className="tempOne__educationTitle">
                            contacts
                        </p>
                        <div className="template__onePhone">
                           {contact.phone ? <><CallIcon/> <p className="contactP">{contact.phone}</p> </> :""} 
                        </div>
                        <div className="template__oneEmail">
                           {contact.email ? <><MailOutlineIcon/> <p className="contactP">{contact.email}</p> </> : ""} 
                        </div>
                        <div className="template__oneAddress">
                           {contact.address ?<> <RoomIcon/> <p className="contactP">{contact.address}</p></> :""}
                        </div>
                        <div className="template__oneLinkedIn">
                        {contact.linkedIn ?<> <LinkedInIcon/> <p className="contactP">{contact.linkedIn}</p></> :""}
                        </div>
                        <div className="template__oneTelegram">
                        {contact.telegram ?<> <TelegramIcon/> <p className="contactP">{contact.telegram}</p></> :""}
                        </div>
                        <div className="template__oneTelegram">
                        {contact.facebook ?<> <FacebookIcon/> <p className="contactP">{contact.facebook}</p></> :""}
                        </div>
                        <div className="template__oneTelegram">
                        {contact.instagram ?<> <InstagramIcon/> <p className="contactP">{contact.instagram}</p></> :""}
                        </div>
                    </div>
                    <div className="tempOne__line"></div>
                    <div className="template__oneEducation">
                        <p className="tempOne__educationTitle">
                            education
                        </p>
                        <div className="temp__oneUniversity">
                            <div className="temp__oneUniDegreeNMajor">
                                <p className="temp__oneUniversityDegree">
                                    Bachelor's
                                </p>
                                <p className="temp__oneUniSlash">
                                    /
                                </p>
                                <p className="temp__oneUniversityDegree">
                                    Computer Science
                                </p>
                            </div>
                            <p className="temp__oneUniversityName">
                                Harvard University
                            </p>
                            <div className="temp__oneEductationYears">
                                <p className="temp__oneStartYear">
                                    2015
                                </p>
                                <p className="temp__oneDash">
                                    -
                                </p>
                                <p className="temp__oneEndYear">
                                    2019
                                </p>
                            </div>
                        </div> 
                    </div>
                    <div className="tempOne__line"></div>
                    <div className="template__oneSkills">
                        <p className="tempOne__educationTitle">
                            key skills
                        </p>
                        <div className="temp__oneSkillsList">
                            <p className="temp__oneSkill">
                                Front-end Development
                            </p>
                            <p className="temp__oneSkill">
                                Backend Development
                            </p>
                            <p className="temp__oneSkill">
                                Data Base Development
                            </p>
                            <p className="temp__oneSkill">
                                UI and UX Design
                            </p>
                        </div>
                    </div>
                    <div className="tempOne__line"></div>
                    <div className="template__oneTechSkills">
                        <p className="tempOne__educationTitle">
                            technical skills
                        </p>
                        <div className="temp__oneTechSkillsList">
                            <div className="temp__oneTechSkill">
                                <p className="temp__oneTechSkillTitle">
                                    javascripr
                                </p>
                                <ProgressBar bgcolor ={"#6a1b9a"} completed={completed1}/>
                            </div>
                            <div className="temp__oneTechSkill">
                                <p className="temp__oneTechSkillTitle">
                                    react
                                </p>
                                <ProgressBar bgcolor ={"#00695c"} completed={completed2}/>
                            </div>
                            <div className="temp__oneTechSkill">
                                <p className="temp__oneTechSkillTitle">
                                    java
                                </p>
                                <ProgressBar bgcolor ={"#ef6c00"} completed={completed3}/>
                            </div>
                            
                        </div>
                    </div>
                    <div className="tempOne__line"></div>
                    <div className="template__oneAwards">
                        <p className="tempOne__educationTitle">
                        achievements
                        </p>
                        <div className="temp__oneTechSkillsList">
                            <div className="temp__oneAwards">
                                <p className="temp__oneAwardTitle">
                                    Ielts score 6
                                </p>
                                <p className="template__oneAward">british council, uk, tashkent</p>
                                <p className="template__oneAward">2018</p>
                            </div>
                        </div>
                    </div>
                    <div className="tempOne__line"></div>
                    <div className="template__oneLanguages">
                        <p className="tempOne__educationTitle">
                            languages
                        </p>
                        <div className="temp__oneLanguagesList">
                            <div className="temp__oneLanguage">
                                <p className="temp__oneLangTitle">
                                    English
                                </p>
                                <p className="temp__oneLaguageStick">
                                    |
                                </p>
                                <p className="temp__oneLangLevel">
                                    Proficient
                                </p>
                            </div>
                            <div className="temp__oneLanguage">
                                <p className="temp__oneLangTitle">
                                    Turkish
                                </p>
                                <p className="temp__oneLaguageStick">
                                    |
                                </p>
                                <p className="temp__oneLangLevel">
                                    Independent
                                </p>
                            </div>
                            <div className="temp__oneLanguage">
                                <p className="temp__oneLangTitle">
                                    Russian
                                </p>
                                <p className="temp__oneLaguageStick">
                                    |
                                </p>
                                <p className="temp__oneLangLevel">
                                    Basic
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="tempOne__line"></div>
                    <div className="template__oneDrivingLicence">
                        <p className="tempOne__educationTitle">
                            driving licence
                        </p>
                        <div className="temp__oneLanguagesList">
                            <div className="temp__oneLanguage">
                                <p className="temp__oneLangTitle">
                                    class B
                                </p>
                                <p className="temp__oneLaguageStick">
                                    |
                                </p>
                                <p className="temp__oneLangLevel">
                                    12 years
                                </p>
                            </div>
                        </div>
                    </div>
                 
                    </div>
                    
                </div>
                <div className="col-md-8 template__oneRight">
                    <div className="template__oneCandidate">
                        <h2 className="template__oneFullname">
                           {profileInfo.firstName} {profileInfo.lastName}
                        </h2>
                        <div className="template__oneJobTitleContainer">
                            <p className="template__oneJobTitle">
                                {profileInfo.jobTitle}
                            </p>
                            <p className="template__oneJobTitleSlash">
                                /
                            </p>
                            <p className="template__oneJobTitle">
                                UI & UX designer
                            </p>
                        </div>
                        
                    </div>
                    <div className="template__oneMainContent">
                        <div className="template__oneProfessionalProf">
                            <p className="template__oneMainContentTitle">
                                Professional profile
                            </p>
                            <div className="tempOne__line"></div>
                            <p className="template__oneProfessionalProfContent">
                               {profileInfo.aboutMe}
                            </p>
                        </div>
                        <div className="template__oneProfessionalExpr">
                            <p className="template__oneMainContentTitle">
                                experience
                            </p>
                            <div className="tempOne__line"></div>
                            <div className="template__oneExperience">
                                <div className="template__oneExpJobContainer">
                                    <div className="template__oneExpJobBox">
                                        <p className="template__oneExpJobTitle">
                                            backend developer
                                        </p>
                                    </div>
                                    <div className="template__oneExpJobAddress">
                                        <p className="template__oneExpCompany">
                                            AirBnB
                                        </p>
                                        <p className="template__oneExpDateDash">
                                            /
                                        </p>
                                        <p className="template__oneExpLocation">
                                            New york nt usa
                                        </p>
                                        <p className="template__oneExpDateDash">
                                            /
                                        </p>
                                        <div className="template__oneExpDate">
                                        <p className="template__oneExpStartDate">
                                            2019
                                        </p>
                                        <p className="template__oneExpDateDash">
                                            -
                                        </p>
                                        <p className="template__oneExpEndDate">
                                            present
                                        </p>
                                    </div>
                                    </div>
                                    <p className="template__oneProfessionalProfContent">
                                        Brief description and responsibility you had in this position. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, repellat laborum, quia quae, commodi dolorum hic ipsam voluptatibus quaerat obcaecati nostrum facilis culpa architecto minima ex? Excepturi fugit eaque beatae?
                                    </p>
                                    <p className="template__oneProfessionalProfContentResp">
                                        <ul className="template__oneProfessionalLists">
                                            <li className="template__oneProfessionalList">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            </li>
                                            <li className="template__oneProfessionalList">
                                            Consequuntur, repellat laborum, quia quae, commodi dolorum hic ipsam voluptatibus quaerat obcaecati nostrum facilis culpa architecto minima ex.
                                            </li>
                                        </ul>
                                    </p>
                                    
                                </div>
                                <div className="template__oneExpJobContainer">
                                    <div className="template__oneExpJobBox">
                                        <p className="template__oneExpJobTitle">
                                            front-end developer
                                        </p>
                                    </div>
                                    <div className="template__oneExpJobAddress">
                                        <p className="template__oneExpCompany">
                                            AirBnB
                                        </p>
                                        <p className="template__oneExpDateDash">
                                            /
                                        </p>
                                        <p className="template__oneExpLocation">
                                            New york nt usa
                                        </p>
                                        <p className="template__oneExpDateDash">
                                            /
                                        </p>
                                        <div className="template__oneExpDate">
                                        <p className="template__oneExpStartDate">
                                            2018
                                        </p>
                                        <p className="template__oneExpDateDash">
                                            -
                                        </p>
                                        <p className="template__oneExpEndDate">
                                            2019
                                        </p>
                                    </div>
                                    </div>
                                    <p className="template__oneProfessionalProfContent">
                                        Brief description and responsibility you had in this position. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, repellat laborum, quia quae, commodi dolorum hic ipsam voluptatibus quaerat obcaecati nostrum facilis culpa architecto minima ex? Excepturi fugit eaque beatae?
                                    </p>
                                    <p className="template__oneProfessionalProfContentResp">
                                        <ul className="template__oneProfessionalLists">
                                            <li className="template__oneProfessionalList">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            </li>
                                            <li className="template__oneProfessionalList">
                                            Consequuntur, repellat laborum, quia quae, commodi dolorum hic ipsam voluptatibus quaerat obcaecati nostrum facilis culpa architecto minima ex.
                                            </li>
                                            <li className="template__oneProfessionalList">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            </li>
                                        </ul>
                                    </p> 
                                </div>
                                <div className="template__oneExpJobContainer">
                                    <div className="template__oneExpJobBox">
                                        <p className="template__oneExpJobTitle">
                                            UI & UX designer
                                        </p>
                                    </div>
                                    <div className="template__oneExpJobAddress">
                                        <p className="template__oneExpCompany">
                                            AirBnB
                                        </p>
                                        <p className="template__oneExpDateDash">
                                            /
                                        </p>
                                        <p className="template__oneExpLocation">
                                            New york nt usa
                                        </p>
                                        <p className="template__oneExpDateDash">
                                            /
                                        </p>
                                        <div className="template__oneExpDate">
                                        <p className="template__oneExpStartDate">
                                            2017
                                        </p>
                                        <p className="template__oneExpDateDash">
                                            -
                                        </p>
                                        <p className="template__oneExpEndDate">
                                            2018
                                        </p>
                                    </div>
                                    </div>
                                    <p className="template__oneProfessionalProfContent">
                                        Brief description and responsibility you had in this position. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, repellat laborum, quia quae, commodi dolorum hic ipsam voluptatibus quaerat obcaecati nostrum facilis culpa architecto minima ex? Excepturi fugit eaque beatae?
                                    </p>
                                    <p className="template__oneProfessionalProfContentResp">
                                        <ul className="template__oneProfessionalLists">
                                            <li className="template__oneProfessionalList">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            </li>
                                            <li className="template__oneProfessionalList">
                                            Consequuntur, repellat laborum, quia quae, commodi dolorum hic ipsam voluptatibus quaerat obcaecati nostrum facilis culpa architecto minima ex.
                                            </li>
                                            <li className="template__oneProfessionalList">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            </li>
                                        </ul>
                                    </p> 
                                </div>
                            </div>
                            
                        </div>
                        <div className="template__oneProfessionalDev">
                            <p className="template__oneMainContentTitle">
                                Professional development
                            </p>
                            <div className="tempOne__line"></div>
                            <div className="template__oneProfDevBox">
                                <p className="template__oneExpJobTitle">
                                    complete react with hooks
                                </p>
                                <div>
                                <div className="template__oneProfDevAddress">
                                    <p className="template__oneExpCompany">
                                        Udemy
                                    </p>
                                    <p className="template__oneExpDateDash">
                                        /
                                    </p>
                                    <p className="template__oneExpLocation">
                                        London, England
                                    </p>   
                                </div>
                                <div className="template__oneExpDate">
                                    <p className="template__oneExpStartDate">
                                        2019
                                    </p>
                                    <p className="template__oneExpDateDash">
                                        -
                                    </p>
                                    <p className="template__oneExpEndDate">
                                        2020
                                    </p>
                                </div>
                                </div>
                            </div>
                            <div className="template__oneProfDevBox">
                                <p className="template__oneExpJobTitle">
                                    Full-stack web development bootcamp
                                </p>
                                <div>
                                    <div className="template__oneProfDevAddress">
                                        <p className="template__oneExpCompany">
                                            Udemy
                                        </p>
                                        <p className="template__oneExpDateDash">
                                            /
                                        </p>
                                        <p className="template__oneExpLocation">
                                            London, England
                                        </p>   
                                    </div>
                                    <div className="template__oneExpDate">
                                        <p className="template__oneExpStartDate">
                                            2019
                                        </p>
                                        <p className="template__oneExpDateDash">
                                            -
                                        </p>
                                        <p className="template__oneExpEndDate">
                                            2020
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="template__oneProfDevBox">
                                <p className="template__oneExpJobTitle">
                                    Ui & Ux design
                                </p>
                                <div>
                                    <div className="template__oneProfDevAddress">
                                        <p className="template__oneExpCompany">
                                            Udemy
                                        </p>
                                        <p className="template__oneExpDateDash">
                                            /
                                        </p>
                                        <p className="template__oneExpLocation">
                                            London, England
                                        </p>   
                                    </div>
                                    <div className="template__oneExpDate">
                                        <p className="template__oneExpStartDate">
                                            2019
                                        </p>
                                        <p className="template__oneExpDateDash">
                                            -
                                        </p>
                                        <p className="template__oneExpEndDate">
                                            2020
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TemplateOne
