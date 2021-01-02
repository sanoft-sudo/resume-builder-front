import React, {createRef, useState} from 'react';
import "./templateStyles/TemplateFour.css";
import ProgressBar from '../components/ProgressBar';
import {useDispatch, useSelector} from "react-redux";
import Pdf from "react-to-pdf";




function TemplateFour() {
const [progressColors, setProgressColors] = useState([
    {id:777, color: "#6a1b9a"},
    {id:888, color: "#32a852"},
    {id:999, color: "#3250a8"},
    {id:666, color: "#dbd144"},
    {id:555, color: "#c42121"},
])
const ref = createRef();

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
const options = {
    orientation: 'portrait',
    unit: 'cm',
    format: [4,2]
};

    return (
        <div className="container">
            <Pdf targetRef={ref} fileName="template-four.pdf"  >
                {({toPdf})=> <button onClick={toPdf}>save as pdf</button>}
            </Pdf>
            <div className="templateFour__container" ref={ref}>
                <div className="templateFour__header" style={{backgroundColor:selectedColor.colorSide, color: selectedColor.textColor}}>
                    <div className="templateFour__headerContacts">
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
                    </div>
                    <div className="templateFour__headerName">
                        <div className="templateFour__headerProfile">
                            <p className="templateFour__headerFullName">
                            {profileInfo.firstName && profileInfo?.firstName+" "+ profileInfo?.lastName}
                            </p>
                            <p className="templateFour__headerJobTitle">
                            {profileInfo?.currentJob}
                            </p>
                        </div>
                    </div>
                    <div className="templateFour__headerSocials">
                    {contact.facebook ? (
                                <div className="social__contactsFour">
                                     <p className="contact__nameFour">
                                    {contact.facebook}
                                    </p>  
                                     <i class="fab fa-facebook-square" style={{color: selectedColor.textColor}}></i>
                                           
                                </div>
                            ): ""}
                            {contact.instagram ? (
                               <div className="social__contactsFour">
                                   <p className="contact__nameFour">
                                        {contact.instagram}
                                    </p>
                                    <i class="fab fa-instagram"  style={{color: selectedColor.textColor}}></i>
                                    
                                </div> 
                            ): ""}
                            {contact.telegram ? (
                                <div className="social__contactsFour">
                                    <p className="contact__nameFour">
                                        {contact.telegram}
                                    </p>
                                    <i class="fab fa-telegram-plane"  style={{color: selectedColor.textColor}}></i>
                                    
                                </div>
                            ): ""}
                            {contact.linkedIn? (
                                <div className="social__contactsFour">
                                    <p className="contact__nameFour">
                                        {contact.linkedIn}
                                    </p>
                                    <i class="fab fa-linkedin"  style={{color: selectedColor.textColor}}></i>
                                    
                                </div>
                            ): ""}
                    </div>
                </div>
                <div className="templateFour__image effect1">
                    <img src="../../assets/images/templateImages/mini.jpg" alt=""/>
                </div>
                <div className="templateFour__body">
                <div className="templateFour__bodyleft" style={{backgroundColor:selectedColor.colorHead, color: selectedColor.textColor}}>
                    <div className="templateFour__righHeadingContainer">
                        <div className="templateFour__fieldsHeader" style={{backgroundColor:selectedColor.colorHead, color: selectedColor.textColor}}>
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
                    <div className="tempFour__line" style={{borderColor: selectedColor.colorSide}}></div>
                    <div className="templateFour__righHeadingContainer">
                        <div className="templateFour__fieldsHeader" style={{backgroundColor:selectedColor.colorHead, color: selectedColor.textColor}}>
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
                    <div className="tempFour__line" style={{borderColor: selectedColor.colorSide}}></div>
                    <div className="templateFour__righHeadingContainer">
                        <div className="templateFour__fieldsHeader" style={{backgroundColor:selectedColor.colorHead, color: selectedColor.textColor}}>
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
                                            <ProgressBar bgcolor ={selectedColor.colorSide} completed={techSkill.tech_skill_rank}/>
                                        {/* ))
                                    } */}
                                   
                                </div>
                                ))
                            }
                    </div>
                    <div className="tempFour__line" style={{borderColor: selectedColor.colorSide}}></div>
                    <div className="templateFour__righHeadingContainer">
                        <div className="templateFour__fieldsHeader" style={{backgroundColor:selectedColor.colorHead, color: selectedColor.textColor}}>
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
                    <div className="tempFour__line" style={{borderColor: selectedColor.colorSide}}></div>
                    <div className="templateFour__righHeadingContainer">
                        <div className="templateFour__fieldsHeader" style={{backgroundColor:selectedColor.colorHead, color: selectedColor.textColor}}>
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
                    <div className="tempFour__line"  style={{borderColor: selectedColor.colorSide}}></div>
                    <div className="templateFour__righHeadingContainer">
                        <div className="templateFour__fieldsHeader" style={{backgroundColor:selectedColor.colorHead, color: selectedColor.textColor}}>
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
                <div className="templateFour__bodyRight">
                    <div className="templateFour__profile">
                        <div className="templateFour__bodyHeadings">
                            <p className="templateFour__bodyHeading"  style={{color:selectedColor.colorHeadings}}>
                               professional profile
                            </p>
                        </div>
                        <div className="tempThree__line" style={{color:selectedColor.colorLine}}></div>
                        
                        <div className="templateThree__bodyContent">
                            <p>{profileInfo?.aboutMe}</p>
                        </div>
                    </div>
                    <div className="templateFour__experience">
                        <div className="templateFour__bodyHeadings">
                            <p className="templateFour__bodyHeading" style={{color:selectedColor.colorHeadings}}>
                                experience
                            </p>
                        </div>
                        <div className="tempThree__line" style={{color:selectedColor.colorLine}}></div>
                        {experiences &&
                                experiences.map((experience, index) =>(

                                    <div key={index} className="template__threeExpJobContainer">
                                    <div className="template__threeExpJobBox">
                                        <p className="template__threeExpJobTitle">
                                            {experience.jobTitle}
                                        </p>
                                    </div>
                                    <div className="template__threeExpJobAddress">
                                        <p className="template__threeExpCompany">
                                            {experience.companyName}
                                        </p>
                                        <p className="template__threeExpDateDash">
                                            /
                                        </p>
                                        <p className="template__threeExpLocation">
                                        {experience.address}
                                        </p>
                                        <p className="template__threeExpDateDash">
                                            /
                                        </p>
                                        <div className="template__threeExpDate">
                                        <p className="template__threeExpStartDate">
                                            {experience.startYear}
                                        </p>
                                        <p className="template__threeExpDateDash">
                                            -
                                        </p>
                                        <p className="template__threeExpEndDate">
                                            {experience.endYear ? experience.endYear: "To present"}
                                        </p>
                                    </div>
                                    </div>
                                    <p className="template__threeProfessionalProfContent">
                                       {experience.aboutJob}
                                    </p>
                                    <p className="template__threeProfessionalProfContentResp">
                                        <ul className="template__threeProfessionalLists">
                                            {experience.projects.map((proj, index)=>(
                                                <li key={index} className="template__threeProfessionalList">
                                                       {proj.project}
                                                 </li> 
                                            ))}
                                            
                                           
                                        </ul>
                                    </p>
                                    
                                </div>

                                ))
                            }
                    </div>
                    <div className="templateFour__personalDev">
                        <div className="templateFour__bodyHeadings">
                            <p className="templateFour__bodyHeading" style={{color:selectedColor.colorHeadings}}>
                                personal development
                            </p>
                        </div>
                        <div className="tempThree__line" style={{color:selectedColor.colorLine}}></div>
                        <div className="templateFour__bodyContent">
                        {personalDevInfo && personalDevInfo.map((personal, index)=>(
                            
                            <div className="template__threeProfDevBox" key={index}>
                                <p className="template__threeExpJobTitle">
                                    {personal.theme}
                                </p>
                                <div>
                                <div className="template__threeProfDevAddress">
                                    <p className="template__threeExpCompany">
                                    {personal.organizationName}
                                    </p>
                                    <p className="template__threeExpDateDash">
                                        /
                                    </p>
                                    <p className="template__threeExpLocation">
                                    {personal.address}
                                    </p>   
                                </div>
                                <div className="template__threeExpDate">
                                    <p className="template__threeExpStartDate">
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
        </div>
    )
}

export default TemplateFour
