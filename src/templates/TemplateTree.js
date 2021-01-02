import React, {useState, createRef} from 'react';
import ProgressBar from '../components/ProgressBar';
import {useDispatch, useSelector} from "react-redux";
import "./templateStyles/TemplateThree.css";
import Pdf from "react-to-pdf";

function TemplateTree() {
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
    return (
        <div className="container">
             <Pdf targetRef={ref} fileName="template-four.pdf" >
                {({toPdf})=> <button onClick={toPdf}>save as pdf</button>}
            </Pdf>
            <div className="templateThree__container" ref={ref}>
                <div className="templateThree__header effect1" style={{backgroundColor:selectedColor.colorHead, color: selectedColor.textColor}}>
                    <div className="templateThree__headerProfile">
                        <p className="templateThree__headerName">
                        {profileInfo.firstName && profileInfo?.firstName+" "+ profileInfo?.lastName}
                        </p>
                        <p className="templateThree__headerJobTitle">
                        {profileInfo?.currentJob}
                        </p>
                    </div>
                    <div className="templateThree__headerSocials">
                            {contact.facebook ? (
                                <div className="social__contacts">
                                     <i class="fab fa-facebook-square" style={{color: selectedColor.textColor}}></i>
                                    <p className="contact__name">
                                    {contact.facebook}
                                    </p>          
                                </div>
                            ): ""}
                            {contact.instagram ? (
                               <div className="social__contacts">
                                    <i class="fab fa-instagram"  style={{color: selectedColor.textColor}}></i>
                                    <p className="contact__name">
                                        {contact.instagram}
                                    </p>
                                </div> 
                            ): ""}
                            {contact.telegram ? (
                                <div className="social__contacts">
                                    <i class="fab fa-telegram-plane"  style={{color: selectedColor.textColor}}></i>
                                    <p className="contact__name">
                                        {contact.telegram}
                                    </p>
                                </div>
                            ): ""}
                            {contact.linkedIn? (
                                <div className="social__contacts">
                                    <i class="fab fa-linkedin"  style={{color: selectedColor.textColor}}></i>
                                    <p className="contact__name">
                                        {contact.linkedIn}
                                    </p>
                                </div>
                            ): ""}
                    </div>

                </div>
                <div className="templateThree__body ">
                    <div className="templateThree__profile">
                        <div className="templateThree__bodyHeadings">
                            <p className="templateThree__bodyHeading"  style={{color:selectedColor.colorHeadings}}>
                               professional profile
                            </p>
                        </div>
                        <div className="tempThree__line" style={{color:selectedColor.colorLine}}></div>
                        
                        <div className="templateThree__bodyContent">
                            <p>{profileInfo?.aboutMe}</p>
                        </div>
                    </div>
                    <div className="templateThree__experience">
                        <div className="templateThree__bodyHeadings">
                            <p className="templateThree__bodyHeading" style={{color:selectedColor.colorHeadings}}>
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
                    <div className="templateThree__personalDev">
                        <div className="templateThree__bodyHeadings">
                            <p className="templateThree__bodyHeading" style={{color:selectedColor.colorHeadings}}>
                                personal development
                            </p>
                        </div>
                        <div className="tempThree__line" style={{color:selectedColor.colorLine}}></div>
                        <div className="templateThree__bodyContent">
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
                <div className="templateThree__right" style={{backgroundColor:selectedColor.colorSide, color: selectedColor.textColor}}>
                    <div className="templateThree__avatar">
                       <img src="../../assets/images/templateImages/mini.jpg" alt=""/>
                    </div>
                    <div className="templateThree__righHeadingContainer">
                            <div className="templateThree__fieldsHeader" style={{backgroundColor:selectedColor.colorHead, color: selectedColor.textColor}}>
                                <p className="templateThree__rightHeadings">contact</p> 
                            </div>
                            {contact.address ? (
                                <div className="templateThree__rightContact">
                                    <i class="fas fa-home"  style={{color: selectedColor.textColor}}></i>
                                    <p className="contact__titles">
                                        {contact.address}
                                    </p>
                                </div>
                            ):""}
                            {contact.email ? (
                                <div className="templateThree__rightContact">
                                   <i class="far fa-envelope"  style={{color: selectedColor.textColor}}></i>
                                    <p className="contact__titles">
                                        {contact.email}
                                    </p>
                                </div>
                            ):""}
                            {contact.phone ? (
                                <div className="templateThree__rightContact">
                                    <i class="fas fa-phone-square-alt"  style={{color: selectedColor.textColor}}></i>
                                    <p className="contact__titles">
                                        {contact.phone}
                                    </p>
                                </div>
                            ):""}
                    </div>
                    <div className="templateThree__righHeadingContainer">
                        <div className="templateThree__fieldsHeader" style={{backgroundColor:selectedColor.colorHead, color: selectedColor.textColor}}>
                            <p className="templateThree__rightHeadings">education</p> 
                        </div>
                            {educations &&
                                educations.map((education, index) =>(
                                <div className="temp__threeUniversity" key={index}>
                                    <div className="temp__threeUniDegreeNMajor">
                                        <p className="temp__threeUniversityDegree">
                                           {education.degree}
                                        </p>
                                       
                                        <p className="temp__threeUniversityMajor">
                                            {education.major}
                                        </p>
                                    </div>
                                    <p className="temp__threeUniversityName">
                                        {education.university}
                                    </p>
                                    <div className="temp__threeEductationYears">
                                        <p className="temp__threeStartYear">
                                            {education.startYear}
                                        </p>
                                        <p className="temp__threeDash">
                                            -
                                        </p>
                                        <p className="temp__threeEndYear">
                                            {education.endYear ? education.endYear : "To present"}
                                        </p>
                                    </div>
                                </div>
                                ))
                            }
                    </div>
                    <div className="templateThree__righHeadingContainer">
                        <div className="templateThree__fieldsHeader" style={{backgroundColor:selectedColor.colorHead, color: selectedColor.textColor}}>
                            <p className="templateThree__rightHeadings">key skills</p>     
                        </div>
                        {keyskillsList &&
                                keyskillsList.map((keyskills, index)=>(
                                <p className="temp__threeSkill" key={index}>
                                   {keyskills.title}
                                </p>
                                ))
                            }
                    </div>
                    <div className="templateThree__righHeadingContainer">
                        <div className="templateThree__fieldsHeader" style={{backgroundColor:selectedColor.colorHead, color: selectedColor.textColor}}>
                           <p className="templateThree__rightHeadings">technical skills</p>       
                        </div>
                        {techSkillsList &&
                                techSkillsList.map((techSkill, index) =>(
                                <div className="temp__threeTechSkill" key={index}>
                                    <p className="temp__threeTechSkillTitle">
                                        {techSkill.tech_skill}
                                    </p>
                                    {/* {progressColors &&
                                        progressColors.map(color =>( */}
                                            <ProgressBar bgcolor ={selectedColor.colorHead} completed={techSkill.tech_skill_rank}/>
                                        {/* ))
                                    } */}
                                   
                                </div>
                                ))
                            }
                    </div>
                    <div className="templateThree__righHeadingContainer">
                        <div className="templateThree__fieldsHeader" style={{backgroundColor:selectedColor.colorHead, color: selectedColor.textColor}}>
                           <p className="templateThree__rightHeadings">achievement</p> 
                        </div>
                        { achievements && achievements.map((achievement, index) =>(
                                <div className="temp__threeAwards">
                                    <p className="temp__threeAwardTitle">
                                        {achievement.achievement}
                                    </p>
                                    <p className="template__threeAward">{achievement.organizationName} / {achievement.address} </p>
                                    <p className="template__threeAward">{achievement.startYear}</p>
                                </div>
                            ))}
                    </div>
                    <div className="templateThree__righHeadingContainer">
                        <div className="templateThree__fieldsHeader" style={{backgroundColor:selectedColor.colorHead, color: selectedColor.textColor}}>
                           <p className="templateThree__rightHeadings">languages</p> 
                        </div>
                        {languagesList &&
                                languagesList.map((language, index)=>(
                                    <div className="temp__threeLanguage">
                                        <p className="temp__threeLangTitle col-sm-5 px-0">
                                            {language.name}
                                        </p>
                                        <p className="temp__threeLaguageStick col-sm-2 px-1">
                                            |
                                        </p>
                                        <p className="temp__threeLangLevel col-sm-5 px-0">
                                            {language.level}
                                        </p>
                                    </div>
                                ))
                            }
                    </div>
                    <div className="templateThree__righHeadingContainer">
                        <div className="templateThree__fieldsHeader" style={{backgroundColor:selectedColor.colorHead, color: selectedColor.textColor}}>
                           <p className="templateThree__rightHeadings">driving licence</p> 
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
            </div>
            
        </div>
    )
}

export default TemplateTree
