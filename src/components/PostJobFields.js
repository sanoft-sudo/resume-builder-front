import React, { useState, useContext}  from 'react';
import { useTranslation } from "react-i18next";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Controller, useForm } from "react-hook-form";
import isEmail from "validator/lib/isEmail";
import "../styles/PostJobFields.css";
import PostView1 from './PostView1';
import Select from "react-select"
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import {savePostJob} from "../stores/actions/postJobFieldsAction"
import {TechnicalSkillsContext} from "../context/TechnicalSkillsContext";
import { CountriesContext } from '../context/CountriesContext';

const schema = yup.object().shape({
    adRegion: yup.string().required(),
    city: yup.string().required(),
    companyName: yup.string().required(),
    country: yup.string().required(),
    email: yup.string().required(),
    fromSalary: yup.number().positive().integer().required(),
    fullName: yup.string().required(),
    industry: yup.string().required(),
    jobCondition: yup.string().required(),
    jobTitle: yup.string().required(),
    jobType: yup.string().required(),
    region: yup.string().required(),
    salaryType: yup.string().required(),
    workplace: yup.string().required(),
    toSalary: yup.number().positive().integer().required(),
  });

function PostJobFields() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {technicalSkills} = useContext(TechnicalSkillsContext);
    const countries = useContext(CountriesContext)
    console.log("counties", countries);
    const postjob = useSelector(state => state.postjobReducer.postjob)
    const { register, errors, handleSubmit, control, formState } = useForm({resolver: yupResolver(schema)});
    
    const [phone, setPhone] = useState('');
    const [postedData, setPostedData] = useState({});
    const [checked, setChecked] = useState(false);

    const toggleChecked = () => {
      setChecked((prev) => !prev);
    };
    
    const onSubmit = (data, e) => {
        console.log("manaaaa>>>", data);
        dispatch(savePostJob(data))
        setPostedData(data);
        e.target.reset();
        setPhone("")
    }
    const techSkill = [
        { value: 'react', label: 'REACT' },
        { value: 'html', label: 'HTML' },
        { value: 'css', label: 'CSS' },
        { value: 'javascript', label: 'JAVASCRIPT' },
        { value: 'vue', label: 'VUE' },
        { value: 'redux', label: 'REDUX' },
        { value: 'angular', label: 'ANGULAR' },
        { value: 'english teacher', label: 'English teacher' },
        { value: 'nurse', label: 'Nurse' },
        { value: 'accountant', label: 'Accountant' },
        { value: 'cleaner', label: 'Cleaner' }
        ]
    const languages = [
        {value: 'uzbek', label: "Uzbek"},
        {value: 'russian', label: "Russian"},
        {value: 'english', label: "English"}
    ]
    
    return (
            <div id="jobPostFields">
                <div className="jobpost__bg">
                        <h2 className="jobpost__title">Create your account to post your job</h2>
                        <div className="row">
                            <div className="col-md-6">
                                <form className="jobpost__form" id="jobfields" onSubmit={handleSubmit(onSubmit)}>               
                                <label name="companyLabel"  htmlFor="company">Your company name <span className="required">*</span></label>
                                <input name="companyName" id="company" ref={register({ required: true})} />
                                <p className="error__message">{errors?.companyName?.message}</p>

                                <label name="fullNameLabel" htmlFor="fullname">Your full name <span className="required">*</span></label>
                                <input type="text" id="fullname" name="fullName" ref={register({ required: true})}/>
                                <p className="error__message">{errors.fullName?.message}</p>

                                <label name="emailLabel" htmlFor="email">Your Email <span className="required">*</span></label>
                                <input name="email" id="email"
                                        ref={register({
                                            required: true,
                                            validate: (input) => isEmail(input),
                                        })}
                                        placeholder="Email"
                                />
                                <p className="error__message">{errors.email?.message}</p>

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
                                rules= {{required: false}}
                                /> 
                                {/* <input type="tel" id="tel" name="tel" ref={register({ required: true})}/> */}
                                <label name="cityLabel" htmlFor="city">City <span className="required">*</span></label>
                                <input type="text" id="city" name="city" ref={register({ required: true})}/>
                                <p className="error__message">{errors.city?.message}</p>

                                <label name="regionLabel" htmlFor="region">Region <span className="required">*</span></label>
                                <input type="text" id="region" name="region" ref={register({ required: true})}/>
                                <p className="error__message">{errors.region?.message}</p>

                                <label name="countryLabel" htmlFor="country">Country <span className="required">*</span></label>
                                <input type="text" id="country" name="country" ref={register({ required: true})}/>
                                <p className="error__message">{errors.country?.message}</p>

                                <label name="industryLabel" htmlFor="industry">Industry <span className="required">*</span></label>
                                <p>Select the industry thst best describes your company.</p>
                                <select name="industry" ref={register({required:true})}>
                                    <option value="industry1">industry1</option>
                                    <option value="industry2">industry2</option>
                                    <option value="industry3">industry3</option>
                                </select>

                                <label name="jobTitleLabel" htmlFor="jobTitle">Job title <span className="required">*</span></label>
                                <input type="text" id="jobTitle" name="jobTitle" ref={register({ required: true})}/>
                                <p className="error__message">{errors.jobTitle?.message}</p>

                                <label name="question">Where will employee work? <span className="required">*</span></label>
                                <div className="radios">
                                    <div className="radio__btn">
                                        <input type="radio" id="atoffice" name="workplace" value="At Office" ref={register({ required: true})}/>
                                        <label name="atofficeLabel " htmlFor="atoffice">At Office</label>
                                    </div>
                                    <div className="radio__btn">
                                        <input type="radio" id="multiloc" name="workplace" value="Multi-location" ref={register({ required: true})}/>
                                        <label name="multilocLabel" htmlFor="multiloc">Multi Locations</label>
                                    </div>
                                    <div className="radio__btn">
                                        <input type="radio" id="remote-19" name="workplace" value="Remote Due To Covid-19"/>
                                        <label name="remoteDueToLabel" htmlFor="remote-19" ref={register({ required: true})}>Remote due to Covid-19</label>
                                    </div>
                                    <div className="radio__btn">
                                        <input type="radio" id="fulRemote" name="workplace" value="Full Remote" ref={register({ required: true})}/>
                                        <label name="fullRemoteLabel" htmlFor="fulRemote">Fully remote</label>

                                    </div>
                                    <div className="radio__btn">
                                        <input type="radio" id="ontheroad" name="workplace" value="On The Road" ref={register({ required: true})}/>
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
                                        <input type="radio" id="full" name="jobCondition" value="Full Time" ref={register({ required: true})}/>
                                    <label name="fullTimeLabel" htmlFor="full">Full time</label>
                                    </div>
                                    <div className="radio__btn">
                                        <input type="radio" id="part" name="jobCondition" value="Part Time" ref={register({ required: true})}/>
                                    <label name="partTimeLabel" htmlFor="part">Part time</label>
                                    </div>
                                    <div className="radio__btn">
                                        <input type="radio" id="fullandpart" name="jobCondition" value="Part And Full Time" ref={register({ required: true})}/>
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
                                <label name="salaryLabel" htmlFor="salfrom">Salary</label>

                                <div className="salary_inputs">
                                <div className="row salary_box">
                                    <div className="col-md-4 inp">
                                        <label name="fromLabel" htmlFor="from">From </label>
                                        <input type="number" id="salfrom" name="fromSalary" ref={register({ required: true})}/>
                                        <p className="error__message">{errors.fromSalary?.message}</p>
                                    </div>
                                    <div className="col-md-4 inp">
                                        <label name="toLabel" htmlFor="to">To </label>
                                        <input type="number" id="to" name="toSalary" ref={register({ required: true})}/>
                                        <p className="error__message">{errors.toSalary?.message}</p>
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
                                        <p className="error__message">{errors.salaryType?.message}</p>
                                    </div> 
                                    </div>
                                </div>
                                <div className="nightShift">
                                <Controller
                                    as={
                                <FormGroup>
                                <FormControlLabel
                                    control={<Switch checked={checked} color="primary" 
                                    defaultValue={checked} ref={register({required:false})} 
                                    name="isNightShift" 
                                    onChange={toggleChecked} 
                                    value={!checked? "Night job" : "Day job"}
                                    />}
                                    label={checked? "Nightshift" : "Dayshift"}
                                />
                                </FormGroup>
                                }
                                name="isNightShift"
                                control={control}
                                // rules= {{required:false}} 
                         />
                                </div>
                                <div className="additional">
                                    <label name="aboutJob" htmlFor="aboutJob">About job </label>
                                    <textarea name="aboutJob" id="aboutJob" cols="30" rows="7" ref={register({ required: false})}></textarea>
                                    <label name="addReqLabel" htmlFor="addRequirement">Additional requirements(if needed) </label>
                                    <textarea name="addRequirement" id="addRequirement" cols="30" rows="7" ref={register({ required: false})}></textarea>
                                </div>
                                <div>
                                <label className="language__title">Skills</label>
                                 <Controller
                                    as={
                                <Select
                                    defaultValue={[]}
                                    isMulti
                                    name="skills"
                                    options={technicalSkills}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                />
                                    }
                                    name="skills"
                                    control={control}
                                    rules= {{required: true}}
                                />
                                <p className="error__message">{errors.skills?.message}</p>
                                <label className="language__title">Languages</label>
                                <Controller
                                    as={
                                <Select
                                    defaultValue={[]}
                                    isMulti
                                    name="languages"
                                    options={languages}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                />
                                    }
                                    name="languages"
                                    control={control}
                                    rules= {{required: true}}
                                />
                                <p className="error__message">{errors.languages?.message}</p>      

                               
                                </div>
                                    
                                </div>
                                <button htmlFor="jobfields" className=" btn btn-success postJobFieldButton mt-5" type="submit">Save and Post</button>
                            </form>
                                
                            </div>
                            <div className="col-md-6">
                                <PostView1/>
                            </div>
                        </div>
                        
                </div>
                {
                    
                }
        </div>
    )
  
}

export default PostJobFields
