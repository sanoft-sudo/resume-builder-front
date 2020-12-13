import React, { useState, useEffect, useContext}  from 'react';
import axios from 'axios';
import { useTranslation } from "react-i18next";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Controller, useForm } from "react-hook-form";
import isEmail from "validator/lib/isEmail";
import "../styles/PostJobFields.css";
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import ProfileCardPost from './ProfileCardPost';

function PostJobFields() {
    const { t } = useTranslation();
    const [phone, setPhone] = useState('');
    const [data, setData] = useState({});
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
    const { register, errors, handleSubmit, control, formState } = useForm();
    const onSubmit = (data, e) => {
        console.log("manaaaa>>>", data);
        setData(data);
        // e.target.reset();
        // setPhone("")
    }
    const top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 },
        { title: 'The Dark Knight', year: 2008 },
        { title: '12 Angry Men', year: 1957 },
        { title: "Schindler's List", year: 1993 },
        { title: 'Pulp Fiction', year: 1994 },
        { title: 'The Lord of the Rings: The Return of the King', year: 2003 }]
    
    return (
            <div id="jobPostFields">
                <div className="jobpost__bg">
                        <h2 className="jobpost__title">Create your account to post your job</h2>
                        <div className="row">
                            <div className="col-md-6">
                                <form className="jobpost__form" id="jobfields" onSubmit={handleSubmit(onSubmit)}>               
                                <label name="companyLabel"  htmlFor="company">Your company name <span className="required">*</span></label>
                                <input name="companyName" id="company" ref={register({ required: true})} />
                                <p>{errors?.companyName?.message}</p>

                                <label name="fullNameLabel" htmlFor="fullname">Your full name <span className="required">*</span></label>
                                <input type="text" id="fullname" name="fullName" ref={register({ required: true})}/>
                                <p>{errors.fullName?.message}</p>

                                <label name="emailLabel" htmlFor="email">Your Email <span className="required">*</span></label>
                                <input name="email" id="email"
                                        ref={register({
                                            required: true,
                                            validate: (input) => isEmail(input),
                                        })}
                                        placeholder="Email"
                                />
                                <p>{errors.fullName?.message}</p>

                                <label name="phoneLabel" htmlFor="phone">Your number (optional)</label>
                                <Controller
                                    as={
                                        <PhoneInput
                                    inputProps={{
                                    name: 'phone',
                                    required: true,
                                    autoFocus: true
                                    }}
                                    country={'uz'}
                                    value={phone}
                                    onChange={phone => setPhone({ phone })}
                                /> }
                                name="phone"
                                control={control}
                                rules= {{required: true}}
                                /> 
                                {/* <input type="tel" id="tel" name="tel" ref={register({ required: true})}/> */}

                                <label name="countryLabel" htmlFor="country">Country <span className="required">*</span></label>
                                <input type="text" id="country" name="country" ref={register({ required: true})}/>
                                <p>{errors.country?.message}</p>

                                <label name="industryLabel" htmlFor="industry">Industry <span className="required">*</span></label>
                                <p>Select the industry thst best describes your company.</p>
                                <select name="industry" ref={register}>
                                    <option value="industry1">industry1</option>
                                    <option value="industry2">industry2</option>
                                    <option value="industry3">industry3</option>
                                </select>

                                <label name="jobTitleLabel" htmlFor="jobTitle">Job title <span className="required">*</span></label>
                                <input type="text" id="jobTitle" name="jobTitle" ref={register({ required: true})}/>
                                <p>{errors.jobTitle?.message}</p>

                                <label name="question">Where will employee work? <span className="required">*</span></label>
                                <div className="radios">
                                    <div className="radio__btn">
                                        <input type="radio" id="atoffice" name="workplace" value="atOffice" ref={register({ required: true})}/>
                                        <label name="atofficeLabel " htmlFor="atoffice">At Office</label>
                                    </div>
                                    <div className="radio__btn">
                                        <input type="radio" id="multiloc" name="workplace" value="multilocation" ref={register({ required: true})}/>
                                        <label name="multilocLabel" htmlFor="multiloc">Multi ocations</label>
                                    </div>
                                    <div className="radio__btn">
                                        <input type="radio" id="remote-19" name="workplace" value="remoteDuToCovid"/>
                                        <label name="remoteDueToLabel" htmlFor="remote-19" ref={register({ required: true})}>Remote due to Covid-19</label>
                                    </div>
                                    <div className="radio__btn">
                                        <input type="radio" id="fulRemote" name="workplace" value="fullRemote" ref={register({ required: true})}/>
                                        <label name="fullRemoteLabel" htmlFor="fulRemote">Fully remote</label>

                                    </div>
                                    <div className="radio__btn">
                                        <input type="radio" id="ontheroad" name="workplace" value="onTheRoad" ref={register({ required: true})}/>
                                        <label name="onTheRoadLabel" htmlFor="ontheroad">On the road</label>
                                    </div>
                                </div>
                                
                                <label name="adverLocLabel" htmlFor="advertloc">Where would you like to advertise this job? <span className="required">*</span> </label>
                                <input type="text" id="advertloc" name="adRegion" autoComplete={true}
                                ref={register({ required: true})}
                                />
                                
                                <label>Is this job full time or part time? <span className="required">*</span></label>
                                <div className="radios">
                                    <div className="radio__btn">
                                        <input type="radio" id="full" name="jobCondition" value="fullTime" ref={register({ required: true})}/>
                                    <label name="fullTimeLabel" htmlFor="full">Full time</label>
                                    </div>
                                    <div className="radio__btn">
                                        <input type="radio" id="part" name="jobCondition" value="partTime" ref={register({ required: true})}/>
                                    <label name="partTimeLabel" htmlFor="part">Part time</label>
                                    </div>
                                    <div className="radio__btn">
                                        <input type="radio" id="fullandpart" name="jobCondition" value="partAndFullTime" ref={register({ required: true})}/>
                                    <label name="fullAndPartLabel" htmlFor="fullandpart">Either full-time or paer-time</label>
                                    </div>
                                    
                                </div>

                                <label>Are these additional job types that apply? <span className="required">*</span></label>
                                <div className="radios">
                                    <div className="radio__btn">
                                        <input type="radio" id="internship" name="jobType" value="internship" ref={register({ required: true})}/>
                                        <label name="internshipLabel" htmlFor="internship">Internship</label>
                                    </div>
                                    <div className="radio__btn">
                                        <input type="radio" id="temporary" name="jobType" value="temporary" ref={register({ required: true})}/>
                                        <label name="tempLabel" htmlFor="temporary">Temporary</label>
                                    </div>
                                    <div className="radio__btn">
                                        <input type="radio" id="contract" name="jobType" value="contract" ref={register({ required: true})}/>
                                        <label name="contractLabel" htmlFor="contract">Contract</label>
                                    </div>
                                    
                                </div>
                                <div className="nightShift">
                                    <input type="checkbox" id="nightshift" name="nightshift" value="nightshift" ref={register({ required: false})}/>
                                    <label name="nightShiftLabel" htmlFor="nightshift">Is it nightshift? </label>
                                </div>
                                <label name="salaryLabel" htmlFor="salfrom">Salary</label>

                                <div className="salary_inputs">
                                <div className="row salary_box">
                                    <div className="col-md-4 inp">
                                        <label name="fromLabel" htmlFor="from">From </label>
                                        <input type="number" id="salfrom" name="fromSalary" ref={register({ required: true})}/>
                                    </div>
                                    <div className="col-md-4 inp">
                                        <label name="toLabel" htmlFor="to">To </label>
                                        <input type="number" id="to" name="toSalary" ref={register({ required: true})}/>
                                    </div>
                                    <div className="col-md-4 inp">
                                    <div className="sal_type">
                                        <label name="typeLabel" htmlFor="salaryType">Type </label>
                                        <select name="salaryType" id="salaryType" ref={register({ required: true})}>
                                            <option key="value" value="0" disabled>Select an option</option>
                                            <option key="value" value="hour">hour</option>
                                            <option key="value" value="day">day</option>
                                            <option key="value" value="month">month</option>
                                        </select>
                                    </div> 
                                    </div>
                                </div>
                                <div className="additional">
                                    <label name="aboutJob" htmlFor="aboutJob">About job </label>
                                    <textarea name="aboutJob" id="aboutJob" cols="30" rows="7" ref={register({ required: false})}></textarea>
                                    <label name="addReqLabel" htmlFor="addRequirement">Additional requirements(if needed) </label>
                                    <textarea name="addRequirement" id="addRequirement" cols="30" rows="7" ref={register({ required: false})}></textarea>
                                </div>
                                <div>
                                <Controller
                                    as={
                                    <Autocomplete
                                        multiple
                                        id="size-small-standard-multi"
                                        size="small"
                                        options={top100Films}
                                        name="skills"
                                        getOptionLabel={(option) => option.title}
                                        defaultValue={[top100Films[3]]}
                                        renderInput={(params) => (
                                        <TextField {...params} variant="standard" value={params} name="skills" label="Size small" placeholder="Favorites" />
                                        )}
                                        />
                                            }
                                        name="skills"
                                        control={control}
                                        rules= {{required: true}}
                                /> 
                                </div>
                                    
                                </div>
                                <button htmlFor="jobfields" className=" btn btn-success postJobFieldButton mt-5" type="submit">Save and Post</button>
                            </form>
                                
                            </div>
                            <div className="col-md-6">
                                <ProfileCardPost data={data}/>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde impedit ipsa asperiores nesciunt repudiandae dolor dolores quis eius eaque cupiditate, nihil quod sequi alias itaque labore quae quas reprehenderit ea. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos molestiae id nulla totam cupiditate! Ducimus, maxime, nisi voluptatibus modi, soluta laudantium expedita aliquid voluptate sapiente optio dolor ea asperiores odio!</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita eaque voluptas possimus, pariatur laudantium ut perspiciatis, autem fugit nihil quasi in aliquam doloribus, accusamus voluptatem impedit velit ab inventore magnam.</p>
                        
                </div>
                {
                    
                }
        </div>
    )
  
}

export default PostJobFields
