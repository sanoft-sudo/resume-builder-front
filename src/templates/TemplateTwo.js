import React, {useState} from 'react';
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
const [progressColors, setProgressColors] = useState([
    {id:777, color: "#6a1b9a"},
    {id:888, color: "#32a852"},
    {id:999, color: "#3250a8"},
    {id:666, color: "#dbd144"},
    {id:555, color: "#c42121"},
])


const dispatch = useDispatch();
const profileInfo = useSelector(state => state.profileReducer.profileInfo);
const contact = useSelector(state => state.contactReducer.contact);
const educations = useSelector(state => state.educationReducer.educations)
const experiences = useSelector(state => state.experienceReducer.experiences)
const keyskillsList = useSelector(state => state.keySkillsReducer.keyskillsList)
const techSkillsList = useSelector(state => state.technicalSkillsReducer.techSkillsList)
const achievements = useSelector(state => state.achievementsReducer.achievements)
const languagesList = useSelector(state => state.languagesReducer.languagesList)
const drLicences = useSelector(state => state.drivingLReducer.drLicences)
const personalDevInfo  = useSelector(state => state.personalDevReducer.personalDevInfo);
const selectedColor = useSelector(state => state.colorReducer.selectedColor)

let tempBcolor = ""
let tempFcolor = ""


const changeColor =()=>{
    let myColor = selectedColor
    if(myColor==="#6a1b9a"){
        tempFcolor="#fff"
    }
    tempFcolor="#000"
    const myStyle={
        backgroundColor: selectedColor,
        color: tempFcolor
    }
}

    return (
        <div className="template__one container">
            <div className="row">
                <div className="col-md-4 template__oneLeft"  style={{backgroundColor:selectedColor}}>
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
                   
                            <div className="template__oneEducation" >
                                <p className="tempOne__educationTitle">
                                    education
                                </p>
                            {educations &&
                                educations.map((education, index) =>(
                                <div className="temp__oneUniversity" key={index}>
                                    <div className="temp__oneUniDegreeNMajor">
                                        <p className="temp__oneUniversityDegree">
                                           {education.degree}
                                        </p>
                                        <p className="temp__oneUniSlash">
                                            /
                                        </p>
                                        <p className="temp__oneUniversityDegree">
                                            {education.major}
                                        </p>
                                    </div>
                                    <p className="temp__oneUniversityName">
                                        {education.university}
                                    </p>
                                    <div className="temp__oneEductationYears">
                                        <p className="temp__oneStartYear">
                                            {education.startYear}
                                        </p>
                                        <p className="temp__oneDash">
                                            -
                                        </p>
                                        <p className="temp__oneEndYear">
                                            {education.endYear ? education.endYear : "To present"}
                                        </p>
                                    </div>
                                </div>
                                ))
                            }
                            </div>
                       
                    
                    <div className="tempOne__line"></div>
                    <div className="template__oneSkills">
                        <p className="tempOne__educationTitle">
                            key skills
                        </p>
                        <div className="temp__oneSkillsList">
                            {keyskillsList &&
                                keyskillsList.map((keyskills, index)=>(
                                <p className="temp__oneSkill" key={index}>
                                   {keyskills.title}
                                </p>
                                ))
                            }
                        </div>
                    </div>
                    <div className="tempOne__line"></div>
                    <div className="template__oneTechSkills">
                        <p className="tempOne__educationTitle">
                            technical skills
                        </p>
                        <div className="temp__oneTechSkillsList">
                            {techSkillsList &&
                                techSkillsList.map((techSkill, index) =>(
                                <div className="temp__oneTechSkill" key={index}>
                                    <p className="temp__oneTechSkillTitle">
                                        {techSkill.tech_skill}
                                    </p>
                                    {/* {progressColors &&
                                        progressColors.map(color =>( */}
                                            <ProgressBar bgcolor ={"#6a1b9a"} completed={techSkill.tech_skill_rank}/>
                                        {/* ))
                                    } */}
                                   
                                </div>
                                ))
                            }
                            
                        </div>
                    </div>
                    <div className="tempOne__line"></div>
                    <div className="template__oneAwards">
                        <p className="tempOne__educationTitle">
                        achievements
                        </p>
                        <div className="temp__oneTechSkillsList">
                            { achievements && achievements.map((achievement, index) =>(
                                <div className="temp__oneAwards">
                                    <p className="temp__oneAwardTitle">
                                        {achievement.achievement}
                                    </p>
                                    <p className="template__oneAward">{achievement.organizationName} / {achievement.address} </p>
                                    <p className="template__oneAward">{achievement.startYear}</p>
                                </div>
                            ))}
                            
                        </div>
                    </div>
                    <div className="tempOne__line"></div>
                    <div className="template__oneLanguages">
                        <p className="tempOne__educationTitle">
                            languages
                        </p>
                        <div className="temp__oneLanguagesList">
                            {languagesList &&
                                languagesList.map((language, index)=>(
                                    <div className="temp__oneLanguage">
                                        <p className="temp__oneLangTitle">
                                            {language.name}
                                        </p>
                                        <p className="temp__oneLaguageStick">
                                            |
                                        </p>
                                        <p className="temp__oneLangLevel">
                                            {language.level}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="tempOne__line"></div>
                    <div className="template__oneDrivingLicence">
                        <p className="tempOne__educationTitle">
                            driving licence
                        </p>
                        <div className="temp__oneLanguagesList">
                            {drLicences &&
                                drLicences.map((drL, index)=>(
                                    <div className="temp__oneLanguage" key={index}>
                                        <p className="temp__oneLangTitle mt-0">
                                            class | {drL.title}
                                        </p>
                                    </div>
                                ))
                            }
                            
                        </div>
                    </div>
                 
                    </div>
                    
                </div>
                <div className="col-md-8 template__oneRight" >
                    <div className="template__oneCandidate" style={{backgroundColor:selectedColor}}>
                        <h2 className="template__oneFullname">
                           {profileInfo.firstName} {profileInfo.lastName}
                        </h2>
                        <div className="template__oneJobTitleContainer">
                            <p className="template__oneJobTitle">
                                {profileInfo.currentJob}
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
                            {experiences &&
                                experiences.map((experience, index) =>(

                                    <div key={index} className="template__oneExpJobContainer">
                                    <div className="template__oneExpJobBox">
                                        <p className="template__oneExpJobTitle">
                                            {experience.jobTitle}
                                        </p>
                                    </div>
                                    <div className="template__oneExpJobAddress">
                                        <p className="template__oneExpCompany">
                                            {experience.companyName}
                                        </p>
                                        <p className="template__oneExpDateDash">
                                            /
                                        </p>
                                        <p className="template__oneExpLocation">
                                        {experience.address}
                                        </p>
                                        <p className="template__oneExpDateDash">
                                            /
                                        </p>
                                        <div className="template__oneExpDate">
                                        <p className="template__oneExpStartDate">
                                            {experience.startYear}
                                        </p>
                                        <p className="template__oneExpDateDash">
                                            -
                                        </p>
                                        <p className="template__oneExpEndDate">
                                            {experience.endYear ? experience.endYear: "To present"}
                                        </p>
                                    </div>
                                    </div>
                                    <p className="template__oneProfessionalProfContent">
                                       {experience.aboutJob}
                                    </p>
                                    <p className="template__oneProfessionalProfContentResp">
                                        <ul className="template__oneProfessionalLists">
                                            {experience.projects.map((proj, index)=>(
                                                <li key={index} className="template__oneProfessionalList">
                                                       {proj.project}
                                                 </li> 
                                            ))}
                                            
                                           
                                        </ul>
                                    </p>
                                    
                                </div>

                                ))
                            }
                            </div>
                            
                        </div>
                        <div className="template__oneProfessionalDev">
                            <p className="template__oneMainContentTitle">
                                Professional development
                            </p>
                            <div className="tempOne__line"></div>
                            {personalDevInfo && personalDevInfo.map((personal, index)=>(
                            
                                <div className="template__oneProfDevBox" key={index}>
                                <p className="template__oneExpJobTitle">
                                    {personal.achievement}
                                </p>
                                <div>
                                <div className="template__oneProfDevAddress">
                                    <p className="template__oneExpCompany">
                                    {personal.organizationName}
                                    </p>
                                    <p className="template__oneExpDateDash">
                                        /
                                    </p>
                                    <p className="template__oneExpLocation">
                                    {personal.address}
                                    </p>   
                                </div>
                                <div className="template__oneExpDate">
                                    <p className="template__oneExpStartDate">
                                    {personal.year}
                                    </p>
                                </div>
                                </div>
                            </div>
                            )
                            )
                           }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TemplateOne
