import React, {createRef, useState} from 'react';
import "./templateStyles/TemplateOne.css";
import ProgressBar from '../components/ProgressBar';
import {useDispatch, useSelector} from "react-redux";
import Pdf from "react-to-pdf";
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import moment from "moment";
const useStyles = makeStyles((theme) => ({
    secondaryTail: {
      backgroundColor: theme.palette.secondary.main,
    },
  }));



function TemplateOne() {
    const classes = useStyles();
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
console.log("Language+flag>>>>", languagesList);


    return (
        <div className="container">
            <div className="templateFirst__container">
                <div className="templateFirst__header" style={{backgroundColor:selectedColor.colorSide, color: selectedColor.textColor}}>
                    <div className="templateFirst__headerContacts">
                    {contact.address ? (
                                <div className="templateFirst__rightContact">
                                    <i class="fas fa-home"  style={{color: selectedColor.textColor}}></i>
                                    <p className="contact__titlesFour">
                                        {contact.address}
                                    </p>
                                </div>
                            ):""}
                            {contact.email ? (
                                <div className="templateFirst__rightContact">
                                   <i class="far fa-envelope"  style={{color: selectedColor.textColor}}></i>
                                    <p className="contact__titlesFour">
                                        {contact.email}
                                    </p>
                                </div>
                            ):""}
                            {contact.phone ? (
                                <div className="templateFirst__rightContact">
                                    <i class="fas fa-phone-square-alt"  style={{color: selectedColor.textColor}}></i>
                                    <p className="contact__titlesFour">
                                        {contact.phone}
                                    </p>
                                </div>
                            ):""}
                    </div>
                    <div className="templateFirst__headerName">
                        <div className="templateFirst__headerProfile">
                            <p className="templateFirst__headerFullName">
                            {profileInfo.firstName && profileInfo?.firstName+" "+ profileInfo?.lastName}
                            </p>
                            {/* <p className="templateFirst__headerJobTitle">
                            {profileInfo?.currentJob}
                            </p> */}
                        </div>
                    </div>
                    <div className="templateFirst__headerSocials">
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
                <div className="templateFirst__image effect1">
                    <img src="../../assets/images/templateImages/mini.jpg" alt=""/>
                </div>
                <div className="templateFirst__body">
                <div className="templateFirst__bodyleft"  style={{borderColor:selectedColor.colorSide}}>
                    <div className="templateFirst__righHeadingContainer">
                        <div className="templateFirst__fieldsHeader" style={{color: selectedColor.colorSide}}>
                            <div className="icon__box" style={{color: selectedColor.colorSide}}>
                               <i class="fas fa-user-graduate"  style={{color: selectedColor.colorSide}}></i> 
                            </div>
                            <p className="templateFirst__lefHeadings">education</p> 
                        </div>
                        <Timeline className="my__timeline">
                        {educations &&
                                educations.map((education, index) =>(
                                <div className="temp_oneOneUniversity" key={index}>
                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineDot className="body__leftTimeLIneDot" style={{backgroundColor:"#ffffff", borderColor:selectedColor.colorSide, color: selectedColor.colorSide}}>
                                                <i class="fas fa-book-reader timeline__icons"  style={{color: selectedColor.colorSide}}></i>
                                            </TimelineDot>
                                            <TimelineConnector style={{backgroundColor: selectedColor.colorSide}}/>
                                        </TimelineSeparator>
                                        <TimelineContent>
                                                <div className="temp_fourUniDegreeNMajor">
                                                    <p className="temp_fourUniversityDegree" style={{color: selectedColor.colorSide}}>
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
                                                        {moment(education.startDate).utc().year()}
                                                    </p>
                                                    <p className="temp_fourDash">
                                                         -
                                                    </p>
                                                    <p className="temp_fourEndYear">
                                                        {education.endDate ? moment(education.endDate).utc().year() : "To present"}
                                                    </p>
                                                </div>
                                        </TimelineContent>
                                    </TimelineItem>
                                    
                                </div>
                                ))
                            }
                            
                        </Timeline>
                           
                    </div>
                    <div className="tempFour__line" style={{borderColor: selectedColor.colorSide}}></div>
                    <div className="templateFirst__righHeadingContainer">
                        <div className="templateFirst__fieldsHeader" style={{color: selectedColor.colorSide}}>
                        <div className="icon__box" style={{color: selectedColor.colorSide}}>
                               <i class="fas fa-key"  style={{color: selectedColor.colorSide}}></i> 
                            </div>
                            <p className="templateFirst__lefHeadings">key skills</p>     
                        </div>
                        <Timeline className="my__timeline">
                        {keyskillsList &&
                                keyskillsList.map((keyskills, index)=>(
                                    <div className="temp_oneOneUniversity" key={index}>
                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineDot className="body__leftTimeLIneDot" style={{backgroundColor:"#ffffff", borderColor:selectedColor.colorSide, color: selectedColor.colorSide}}>
                                                <i class="fas fa-bookmark timeline__icons"  style={{color: selectedColor.colorSide}}></i>
                                            </TimelineDot>
                                            <TimelineConnector style={{backgroundColor: selectedColor.colorSide}}/>
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <p className="temp_fourSkill" key={index}>
                                                {keyskills.title}
                                            </p>
                                        </TimelineContent>
                                    </TimelineItem>
                                    </div>
                                ))
                            }
                        </Timeline>
                    </div>
                    <div className="tempFour__line" style={{borderColor: selectedColor.colorSide}}></div>
                    <div className="templateFirst__righHeadingContainer">
                        <div className="templateFirst__fieldsHeader"  style={{color: selectedColor.colorSide}}>
                        <div className="icon__box" style={{color: selectedColor.colorSide}}>
                               <i class="fas fa-tachometer-alt"  style={{color: selectedColor.colorSide}}></i> 
                            </div>
                           <p className="templateFirst__lefHeadings">technical skills</p>       
                        </div>
                        <Timeline className="my__timeline">
                             {techSkillsList &&
                                techSkillsList.map((techSkill, index) =>(
                                <div className="temp_oneOneUniversity" key={index}>
                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineDot className="body__leftTimeLIneDot" style={{backgroundColor:"#ffffff", borderColor:selectedColor.colorSide, color: selectedColor.colorSide}}>
                                                <i class="fas fa-lightbulb timeline__icons"  style={{color: selectedColor.colorSide}}></i>
                                            </TimelineDot>
                                            <TimelineConnector style={{backgroundColor: selectedColor.colorSide}}/>
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <p className="temp_fourTechSkillTitle">
                                                {techSkill.tech_skill}
                                            </p>
                                            <ProgressBar bgcolor ={selectedColor.colorSide} textColor={selectedColor.textColor} completed={techSkill.tech_skill_rank}/>
                                        </TimelineContent>
                                    </TimelineItem>
                                </div>
                                ))
                            }
                        </Timeline>
                       
                    </div>
                    <div className="tempFour__line" style={{borderColor: selectedColor.colorSide}}></div>
                    <div className="templateFirst__righHeadingContainer">
                        <div className="templateFirst__fieldsHeader"  style={{color: selectedColor.colorSide}}>
                        <div className="icon__box" style={{color: selectedColor.colorSide}}>
                               <i class="fas fa-award"  style={{color: selectedColor.colorSide}}></i> 
                            </div>
                           <p className="templateFirst__lefHeadings">achievement</p> 
                        </div>
                        <Timeline className="my__timeline">
                            { achievements && achievements.map((achievement, index) =>(
                                <div className="temp_oneOneUniversity">
                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineDot className="body__leftTimeLIneDot" style={{backgroundColor:"#ffffff", borderColor:selectedColor.colorSide, color: selectedColor.colorSide}}>
                                                <i class="fas fa-trophy timeline__icons"  style={{color: selectedColor.colorSide}}></i>
                                            </TimelineDot>
                                            <TimelineConnector style={{backgroundColor: selectedColor.colorSide}}/>
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <p className="temp_fourAwardTitle">
                                                {achievement.achievement}
                                            </p>
                                            <p className="template__fourAward">{achievement.organizationName} / {achievement.address} </p>
                                            <p className="template__fourAward">{achievement.startYear}</p>
                                        </TimelineContent>
                                    </TimelineItem>
                                    
                                </div>
                            ))}
                        </Timeline>
                        
                    </div>
                    <div className="tempFour__line" style={{borderColor: selectedColor.colorSide}}></div>
                    <div className="templateFirst__righHeadingContainer">
                        <div className="templateFirst__fieldsHeader" style={{color: selectedColor.colorSide}}>
                        <div className="icon__box" style={{color: selectedColor.colorSide}}>
                               <i class="fas fa-language"  style={{color: selectedColor.colorSide}}></i> 
                            </div>
                           <p className="templateFirst__lefHeadings">languages</p> 
                        </div>
                        <Timeline className="my__timeline">
                             {languagesList &&
                                languagesList.map((language, index)=>(
                                    <div className="temp_oneOneUniversity">
                                        <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineDot className="body__leftTimeLIneDot" style={{backgroundColor:"#ffffff", borderColor:selectedColor.colorSide, color: selectedColor.colorSide}}>
                                                <img className="flag__size" src={language.flag}/>
                                            </TimelineDot>
                                            <TimelineConnector style={{backgroundColor: selectedColor.colorSide}}/>
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <div className="temp_oneoneLanguage" key={index}>
                                                <p className="temp_fourLangTitle col-sm-5 px-0">
                                                    {language.name}
                                                </p>
                                                <p className="temp_fourLangLevel col-sm-5 px-0">
                                                    {language.level}
                                                </p>
                                            </div>
                                        </TimelineContent>
                                    </TimelineItem>
                                    </div>
                                ))
                            }
                        </Timeline>
                    </div>
                    <div className="tempFour__line"  style={{borderColor: selectedColor.colorSide}}></div>
                    <div className="templateFirst__righHeadingContainer">
                        <div className="templateFirst__fieldsHeader"  style={{color: selectedColor.colorSide}}>
                        <div className="icon__box" style={{color: selectedColor.colorSide}}>
                               <i class="fas fa-car"  style={{color: selectedColor.colorSide}}></i> 
                            </div>
                           <p className="templateFirst__lefHeadings">driving licence</p> 
                        </div> 
                        <Timeline className="my__timeline">
                        {drLicences &&
                                drLicences.map((drL, index)=>(
                                    <div className="temp_oneOneUniversity" key={index}>
                                        <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineDot className="body__leftTimeLIneDot" style={{backgroundColor:"#ffffff", borderColor:selectedColor.colorSide, color: selectedColor.colorSide}}>
                                                <i class="fas fa-id-card timeline__icons"  style={{color: selectedColor.colorSide}}></i>
                                            </TimelineDot>
                                            <TimelineConnector style={{backgroundColor: selectedColor.colorSide}}/>
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <p className="temp_fourDrivingLevel col-sm-5 px-0">
                                                {drL.title}
                                            </p>
                                        </TimelineContent>
                                    </TimelineItem>
                                         
                                    </div>
                                ))
                            }
                            </Timeline>
                    </div>
                </div>
                <div className="templateFirst__bodyRight">
                    <div className="templateFirst__profile">
                        <div className="templateFirst__bodyHeadings">
                        <div className="icon__box" style={{color: selectedColor.colorSide}}>
                               <i class="fas fa-user-tie"  style={{color: selectedColor.colorSide}}></i> 
                            </div>
                            <div className="body__headingTitle">
                                <p className="templateFirst__bodyHeading" style={{color:selectedColor.colorHeadings}}>
                                    professional profile
                                </p>
                                <div className="tempThree__line" style={{color:selectedColor.colorLine}}></div>
                            </div>
                        </div>
                        
                        
                        <div className="templateThree__bodyContent">
                            <p>{profileInfo?.aboutMe}</p>
                        </div>
                    </div>
                    <div className="templateFirst__experience">
                        <div className="templateFirst__bodyHeadings">
                        <div className="icon__box" style={{color: selectedColor.colorSide}}>
                               <i class="fas fa-suitcase"  style={{color: selectedColor.colorSide}}></i> 
                            </div>
                            <div className="body__headingTitle">
                                <p className="templateFirst__bodyHeading" style={{color:selectedColor.colorHeadings}}>
                                    experience
                                </p>
                                <div className="tempThree__line" style={{color:selectedColor.colorLine}}></div>
                            </div>
                        </div>
                        <Timeline>
                             {experiences &&
                                experiences.map((experience, index) =>(
                                    <TimelineItem>
                                         <TimelineSeparator>
                                            <TimelineDot className="body__leftTimeLIneDot" style={{backgroundColor:"#ffffff", borderColor:selectedColor.colorSide, color: selectedColor.colorSide}}>
                                                <i class="fas fa-book-reader timeline__icons"  style={{color: selectedColor.colorSide}}></i>
                                            </TimelineDot>
                                            <TimelineConnector style={{backgroundColor: selectedColor.colorSide}}/>
                                        </TimelineSeparator>
                                         <TimelineContent>
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
                                    </TimelineContent>
                                    </TimelineItem>
                                   

                                    

                                ))
                            }
                        </Timeline>
                       
                    </div>
                    <div className="templateFirst__personalDev">
                        <div className="templateFirst__bodyHeadings">
                            <div className="icon__box" style={{color: selectedColor.colorSide}}>
                               <i class="fas fa-user-cog"  style={{color: selectedColor.colorSide}}></i> 
                            </div>
                            <div className="body__headingTitle">
                                <p className="templateFirst__bodyHeading" style={{color:selectedColor.colorHeadings}}>
                                    personal development
                                </p>
                                <div className="tempThree__line" style={{color:selectedColor.colorLine}}></div>
                            </div>
                            
                        </div>
                        
                        <div className="templateFirst__bodyContent">
                        <Timeline>
                        {personalDevInfo && personalDevInfo.map((personal, index)=>(
                             <TimelineItem>
                             <TimelineSeparator>
                                <TimelineDot className="body__leftTimeLIneDot" style={{backgroundColor:"#ffffff", borderColor:selectedColor.colorSide, color: selectedColor.colorSide}}>
                                    <i class="fas fa-book-reader timeline__icons"  style={{color: selectedColor.colorSide}}></i>
                                </TimelineDot>
                                <TimelineConnector style={{backgroundColor: selectedColor.colorSide}}/>
                            </TimelineSeparator>
                             <TimelineContent>
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
                            </TimelineContent>
                            </TimelineItem>
                        )
                        )
                       }
                       </Timeline>
                        </div>
                    </div>
                </div>
                </div>                            
            </div>
        </div>
    )
}

export default TemplateOne
