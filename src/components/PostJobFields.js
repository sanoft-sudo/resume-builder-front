import React, { useState, useEffect, useContext}  from 'react';
import axios from 'axios';
import { useTranslation } from "react-i18next";
import "../styles/PostJobFields.css"

function PostJobFields() {
    const { t } = useTranslation();
    const [employer, setEmployer] = useState({
        company_name: "",
        full_name: "",
        emal: "",
        phone: "",
        country: "",
        industry: "",
        job_title: "",
        working_area: "",
        advert_region: "",
        job_condition: "",
        isNightshift: false,
        job_type: "",
        salary_from: 0,
        salary_to:0,
        salary_type: "",
        empoyee_amount: 0
    })
    
    return (
            <div id="jobPostFields">
                <div className="jobpost__bg">
                       <h2 className="jobpost__title">Create your account to post your job</h2>
            <form className="jobpost__form" id="jobfields">               
                <label htmlFor="company">Your company name <span className="required">*</span></label>
                <input type="text" name="companyName" id="company"/>

                <label htmlFor="fullname">Your full name <span className="required">*</span></label>
                <input type="text" id="fullname" name="fullName"/>

                <label htmlFor="email">Your Email <span className="required">*</span></label>
                <input type="email" id="email" name="email"/>

                <label htmlFor="phone">Your number (optional)</label>
                <input type="tel" id="phone" name="phone"/>

                <label htmlFor="country">Country <span className="required">*</span></label>
                <input type="text" id="country" name="country"/>

                <label htmlFor="industry">Industry <span className="required">*</span></label>
                <p>Select the industry thst best describes your company.</p>
                <select name="industry" id="industry">
                    <option key="value" value="0" disabled>Select an option</option>
                    <option key="value" value="1">one</option>
                    <option key="value" value="2">two</option>
                    <option key="value" value="3">three</option>
                </select>

                <label htmlFor="jobTitle">Job title <span className="required">*</span></label>
                <input type="text" id="jobTitle" name="jobTitle" autoComplete={true}/>

                <label>Where will employee work? <span className="required">*</span></label>
                <div className="radios">
                    <div className="radio__btn">
                        <input type="radio" id="atoffice" name="workplace" value="atOffice"/>
                        <label htmlFor="atoffice">At Office</label>
                    </div>
                    <div className="radio__btn">
                        <input type="radio" id="multiloc" name="workplace" value="multilocation"/>
                        <label htmlFor="multiloc">Multi ocations</label>
                    </div>
                    <div className="radio__btn">
                        <input type="radio" id="remote-19" name="workplace" value="remoteDuToCovid"/>
                        <label htmlFor="remote-19">Remote due to Covid-19</label>
                    </div>
                    <div className="radio__btn">
                        <input type="radio" id="fulremote" name="workplace" value="fullRemote"/>
                        <label htmlFor="fulRemote">Fully remote</label>

                    </div>
                    <div className="radio__btn">
                        <input type="radio" id="ontheroad" name="workplace" value="onTheRoad"/>
                        <label htmlFor="ontheroad">On the road</label>
                    </div>
                </div>
                
                <label htmlFor="advertloc">Where would you like to advertise this job? <span className="required">*</span> </label>
                <input type="text" id="advertloc" name="adRegion" autoComplete={true}/>
                
                <label>Is this job full time or part time? <span className="required">*</span></label>
                <div className="radios">
                    <div className="radio__btn">
                        <input type="radio" id="full" name="jobCondition" value="fullTime"/>
                    <label htmlFor="full">Full time</label>
                    </div>
                    <div className="radio__btn">
                        <input type="radio" id="part" name="jobCondition" value="partTime"/>
                    <label htmlFor="part">Part time</label>
                    </div>
                    <div className="radio__btn">
                        <input type="radio" id="fullandpart" name="jobCondition" value="remoteDuToCovid"/>
                    <label htmlFor="fullandpart">Either full-time or paer-time</label>
                    </div>
                    
                </div>

                <label>Are these additional job types that apply? <span className="required">*</span></label>
                <div className="radios">
                    <div className="radio__btn">
                        <input type="radio" id="internship" name="jobType" value="internship"/>
                        <label htmlFor="internship">Internship</label>
                    </div>
                    <div className="radio__btn">
                        <input type="radio" id="temporary" name="jobType" value="temporary"/>
                        <label htmlFor="temporary">Temporary</label>
                    </div>
                    <div className="radio__btn">
                        <input type="radio" id="contract" name="jobType" value="contract"/>
                        <label htmlFor="contract">Contract</label>
                    </div>
                       
                </div>
                <div className="nightShift">
                    <input type="checkbox" id="nightshift" name="nightshift" value="nightshift"/>
                    <label htmlFor="nightshift">Is it nightshift? </label>
                </div>
                <label htmlFor="salfrom">Salary</label>

                <div className="salary_inputs">
                <div className="row salary_box">
                    <div className="col-md-4 inp">
                        <label htmlFor="from">From </label>
                        <input type="number" id="salfrom" name="fromSalary"/>
                    </div>
                    <div className="col-md-4 inp">
                        <label htmlFor="to">To </label>
                        <input type="number" id="to" name="toSalary"/>
                    </div>
                    <div className="col-md-4 inp">
                    <div className="sal_type">
                        <label htmlFor="industry">Type </label>
                        <select name="industry" id="industry">
                            <option key="value" value="0" disabled>Select an option</option>
                            <option key="value" value="4">hour</option>
                            <option key="value" value="5">day</option>
                            <option key="value" value="6">month</option>
                        </select>
                    </div> 
                    </div>
                </div>
                    
                    
                </div>
                
            </form>
            <button htmlFor="jobfields" type="submit">Save and Post</button>
                </div>
        </div>
    )
}

export default PostJobFields
