import React, {useState} from 'react';
import "./templateStyles/TemplateTwo.css";
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
console.log("selected color>>>>", selectedColor);


    return (
        <div className="container">
            <div className="template__one">
                
                    <div className="templateFour__bodyleft" style={{backgroundColor:selectedColor.colorSide, color: selectedColor.textColor}}>
                    <div className="template__oneImage">
                        <img src="../../assets/images/templateImages/mini.jpg" alt=""/>
                    </div>

                    <div className="templateFour__righHeadingContainer">
                        <div className="templateFour__fieldsHeader" style={{ color: selectedColor.textColor}}>
                            <p className="templateFour__lefHeadings">contact</p> 
                        </div>
                        <div className="template__oneContacts">
                    {contact.address ? (
                                <div className="templateFour__rightContact">
                                    <i class="fas fa-home"  style={{color: selectedColor.textColor}}></i>
                                    <p className="contact__titlesFour">
                                        {contact.address}
                                    </p>
                                </div>
                            ):""}
                            {contact.email ? (
                                <div className="templateFour__rightContact">
                                   <i class="far fa-envelope"  style={{color: selectedColor.textColor}}></i>
                                    <p className="contact__titlesFour">
                                        {contact.email}
                                    </p>
                                </div>
                            ):""}
                            {contact.phone ? (
                                <div className="templateFour__rightContact">
                                    <i class="fas fa-phone-square-alt"  style={{color: selectedColor.textColor}}></i>
                                    <p className="contact__titlesFour">
                                        {contact.phone}
                                    </p>
                                </div>
                            ):""}
                            {contact.facebook ? (
                                <div className="templateFour__rightContact">
                                    <i class="fab fa-facebook-square" style={{color: selectedColor.textColor}}></i>
                                    <p className="contact__titlesFour">
                                        {contact.facebook}
                                    </p>
                                </div>
                            ):""}
                            {contact.telegram ? (
                                <div className="templateFour__rightContact">
                                    <i class="fab fa-telegram-plane"  style={{color: selectedColor.textColor}}></i>
                                    <p className="contact__titlesFour">
                                        {contact.telegram}
                                    </p>
                                </div>
                            ):""}
                            {contact.instagram ? (
                                <div className="templateFour__rightContact">
                                    <i class="fab fa-instagram"  style={{color: selectedColor.textColor}}></i>
                                    <p className="contact__titlesFour">
                                        {contact.instagram}
                                    </p>
                                </div>
                            ):""}
                            {contact.linkedIn ? (
                                <div className="templateFour__rightContact">
                                     <i class="fab fa-linkedin"  style={{color: selectedColor.textColor}}></i>
                                    <p className="contact__titlesFour">
                                        {contact.linkedIn}
                                    </p>
                                </div>
                            ):""}
                    </div>
                    </div>
                    <div className="tempFour__line"  style={{borderColor: selectedColor.colorHead}}></div>
                    <div className="templateFour__righHeadingContainer">
                        <div className="templateFour__fieldsHeader" style={{ color: selectedColor.textColor}}>
                            <p className="templateFour__lefHeadings">education</p> 
                        </div>
                            {educations &&
                                educations.map((education, index) =>(
                                <div className="temp_fourUniversity" key={index}>
                                    <div className="temp_fourUniDegreeNMajor">
                                        <p className="temp_fourUniversityDegree">
                                           {education.degree}
                                        </p>
                                       
                                        <p className="temp_fourUniversityMajor">
                                            {education.major}
                                        </p>
                                    </div>
                                    <p className="temp_fourUniversityName">
                                        {education.university}
                                    </p>
                                    <div className="temp_fourEductationYears">
                                        <p className="temp_fourStartYear">
                                            {education.startYear}
                                        </p>
                                        <p className="temp_fourDash">
                                            -
                                        </p>
                                        <p className="temp_fourEndYear">
                                            {education.endYear ? education.endYear : "To present"}
                                        </p>
                                    </div>
                                </div>
                                ))
                            }
                    </div>
                    <div className="tempFour__line" style={{borderColor: selectedColor.colorHead}}></div>
                    <div className="templateFour__righHeadingContainer">
                        <div className="templateFour__fieldsHeader" style={{ color: selectedColor.textColor}}>
                            <p className="templateFour__lefHeadings">key skills</p>     
                        </div>
                        {keyskillsList &&
                                keyskillsList.map((keyskills, index)=>(
                                <p className="temp_fourSkill" key={index}>
                                   {keyskills.title}
                                </p>
                                ))
                            }
                    </div>
                    <div className="tempFour__line" style={{borderColor: selectedColor.colorHead}}></div>
                    <div className="templateFour__righHeadingContainer">
                        <div className="templateFour__fieldsHeader" style={{ color: selectedColor.textColor}}>
                           <p className="templateFour__lefHeadings">technical skills</p>       
                        </div>
                        {techSkillsList &&
                                techSkillsList.map((techSkill, index) =>(
                                <div className="temp_fourTechSkill" key={index}>
                                    <p className="temp_fourTechSkillTitle">
                                        {techSkill.tech_skill}
                                    </p>
                                    {/* {progressColors &&
                                        progressColors.map(color =>( */}
                                            <ProgressBar bgcolor ={selectedColor.colorHead} textColor={selectedColor.textColor} completed={techSkill.tech_skill_rank}/>
                                        {/* ))
                                    } */}
                                   
                                </div>
                                ))
                            }
                    </div>
                    <div className="tempFour__line" style={{borderColor: selectedColor.colorHead}}></div>
                    <div className="templateFour__righHeadingContainer">
                        <div className="templateFour__fieldsHeader" style={{color: selectedColor.textColor}}>
                           <p className="templateFour__lefHeadings">achievement</p> 
                        </div>
                        { achievements && achievements.map((achievement, index) =>(
                                <div className="temp_fourAwards">
                                    <p className="temp_fourAwardTitle">
                                        {achievement.achievement}
                                    </p>
                                    <p className="template__fourAward">{achievement.organizationName} / {achievement.address} </p>
                                    <p className="template__fourAward">{achievement.startYear}</p>
                                </div>
                            ))}
                    </div>
                    <div className="tempFour__line" style={{borderColor: selectedColor.colorHead}}></div>
                    <div className="templateFour__righHeadingContainer">
                        <div className="templateFour__fieldsHeader" style={{ color: selectedColor.textColor}}>
                           <p className="templateFour__lefHeadings">languages</p> 
                        </div>
                        {languagesList &&
                                languagesList.map((language, index)=>(
                                    <div className="temp_fourLanguage" key={index}>
                                        <p className="temp_fourLangTitle col-sm-5 px-0">
                                            {language.name}
                                        </p>
                                        <p className="temp_fourLaguageStick col-sm-2 px-1">
                                            |
                                        </p>
                                        <p className="temp_fourLangLevel col-sm-5 px-0">
                                            {language.level}
                                        </p>
                                    </div>
                                ))
                            }
                    </div>
                    <div className="tempFour__line"  style={{borderColor: selectedColor.colorHead}}></div>
                    <div className="templateFour__righHeadingContainer">
                        <div className="templateFour__fieldsHeader" style={{ color: selectedColor.textColor}}>
                           <p className="templateFour__lefHeadings">driving licence</p> 
                        </div> 
                        {drLicences &&
                                drLicences.map((drL, index)=>(
                                    <div className="temp_fourDriving" key={index}>
                                         <p className="temp_fourDrivingTitle col-sm-5 px-0">
                                            CLASS
                                        </p>
                                        <p className="temp_fourDrivingStick col-sm-2 px-1">
                                            |
                                        </p>
                                        <p className="temp_fourDrivingLevel col-sm-5 px-0">
                                            {drL.title}
                                        </p>
                                    </div>
                                ))
                            }
                    </div>
                </div>
        
                <div className="template__oneRight" >
                    <div className="template__oneCandidate" style={{backgroundColor:selectedColor.colorHead, color: selectedColor.textColor}}>
                        <h2 className="template__oneFullname">
                           {profileInfo.firstName && profileInfo?.firstName+" "+ profileInfo?.lastName}
                        </h2>
                        <div className="template__oneJobTitleContainer" style={{backgroundColor:selectedColor.colorHead, color: selectedColor.textColor}}>
                            <p className="template__oneJobTitle">
                                {profileInfo?.currentJob}
                            </p>
                        </div>
                        
                    </div>
                    <div className="template__oneMainContent">
                        <div className="template__oneProfessionalProf">
                            <p className="template__oneMainContentTitle" style={{color:selectedColor.colorHeadings}}>
                                Professional profile
                            </p>
                            <div className="tempThree__line"  style={{color:selectedColor.colorLine}}></div>
                            <p className="template__oneProfessionalProfContent">
                               {profileInfo?.aboutMe}
                            </p>
                        </div>
                        <div className="template__oneProfessionalExpr">
                            <p className="template__oneMainContentTitle" style={{color:selectedColor.colorHeadings}}>
                                experience
                            </p>
                            <div className="tempThree__line"  style={{color:selectedColor.colorLine}}></div>
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
                            <p className="template__oneMainContentTitle" style={{color:selectedColor.colorHeadings}}>
                                Professional development
                            </p>
                            <div className="tempThree__line"  style={{color:selectedColor.colorLine}}></div>
                            {personalDevInfo && personalDevInfo.map((personal, index)=>(
                            
                                <div className="template__oneProfDevBox" key={index}>
                                    <p className="template__oneExpJobTitle">
                                        {personal.theme}
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
