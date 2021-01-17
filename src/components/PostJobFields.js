import React, { useState, useContext, useRef}  from 'react';
import { useTranslation } from "react-i18next";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Controller, useForm } from "react-hook-form";
import "../styles/PostJobFields.css";
import PostView1 from './PostView1';
import Select from "react-select"
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import {useDispatch, useSelector} from "react-redux";
import {savePostJob} from "../stores/actions/postJobFieldsAction"
import AutocompleteCountry from './autocomleteInputs/AutocompleteCountry';
import { withStyles, makeStyles} from '@material-ui/core/styles';
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import {KeySkillsContext} from "../context/KeySkillsContext";
import TextField from '@material-ui/core/TextField';
import Autocomplete from "@material-ui/lab/Autocomplete";
import MenuItem from '@material-ui/core/MenuItem';
import Select2 from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

  const ValidationTextField = withStyles({
    root: {
      '& input:valid + fieldset': {
        borderColor: '#00ba5a',
        borderWidth: 2,
      },
      '& input:invalid + fieldset': {
        borderColor: 'ff1100',
        borderWidth: 2,
      },
      '& input:valid:focus + fieldset': {
        borderLeftWidth: 6,
        padding: '8px !important', // override inline-style
      },
    },
  })(TextValidator);

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;
  
    return (
      <NumberFormat
        {...other}
        getInputRef={inputRef}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        isNumericString
      />
    );
  }
  
  NumberFormatCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

function PostJobFields() {
    const { register, errors, handleSubmit, control, formState } = useForm();
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const classes = useStyles();
  const {keySkills} = useContext(KeySkillsContext)
    const techskills = useSelector(state => state.technicalSkillsReducer.techSkillsList)
    const formRef = useRef()
    const [ postForm, setPostForm] = useState({})
    const [phone, setPhone] = useState('');
    const [checked, setChecked] = useState(false);
    const [selRegions, setSelRegions] = useState([])
    const [languagesList, setLanguagesList] = useState([])

    console.log("selected regions", selRegions);
    const toggleChecked = () => {
      setChecked((prev) => !prev);
    };
    const handleInputChange = (event) =>{
        setPostForm({
            ...postForm,
        ...{[event.target.name]: event.target.value}
        })
    }
    console.log("post form >>>>",postForm);
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(savePostJob(postForm))
        // e.target.reset();
        setPhone("")
    }
    const allRegions = [
        { id: '000001', name: "Andijan" },
        { id: '000002', name: "Bukhoro" },
        { id: '000003', name: "Fergana" },
        { id: '000004', name: "Gulistan(Sirdaryo)" },
        { id: '000005', name: "Jizzakh" },
        { id: '000006', name: "Khorezm" },
        { id: '000007', name: "Namangan" },
        { id: '000008', name: "Navai" },
        { id: '000009', name: "Qashqadarya" },
        { id: '000010', name: "Qaraqalpakistan" },
        { id: '000011', name: "Samarqand" },
        { id: '000012', name: "Surkhandarya" },
        { id: '000013', name: "Tashkent" },
        ]
    const languages = [
        {id: 'uz',  name: "Uzbek"},
        {id: 'ru',  name: "Russian"},
        {id: 'en',  name: "English"}
    ]
    
    return (
            <div id="jobPostFields">
                <div className="jobpost__bg">
                        <h2 className="jobpost__title">Create your account to post your job</h2>
                        <div className="row">
                            <div className="col-md-6 fromFields">
                            <ValidatorForm
                                ref={formRef}
                                className="jobpost__form" id="jobfields" onSubmit={onSubmit}
                                onError={(errors) => console.log(errors)}
                                noValidate
                            >              
                                
                                <ValidationTextField
                                    style={{marginBottom:"30px"}}
                                    className={"profileInfoF"}
                                    label="Company"
                                    required
                                    placeholder="Your company name"
                                    multiline
                                    // defaultValue={fromFields.firstName}
                                    value={postForm.company}
                                    onChange={e => handleInputChange(e)}
                                    variant="outlined"
                                    id="company"
                                    name="company"
                                    validators={["required"]}
                                    errorMessages={["Company name is required"]}
                                />
                                          
                                <ValidationTextField
                                    style={{marginBottom:"30px"}}
                                    className={"profileInfoF"}
                                    label="Full name"
                                    required
                                    placeholder="Sanjar Juraev"
                                    multiline
                                    // defaultValue={fromFields.firstName}
                                    value={postForm.fullName}
                                    onChange={e => handleInputChange(e)}
                                    variant="outlined"
                                    id="fullName"
                                    name="fullName"
                                    validators={["required"]}
                                    errorMessages={["Full name is required"]}
                                />
                                          
                                <ValidationTextField
                                    style={{marginBottom:"30px"}}
                                    className={"pofileInfoF"}
                                    label="Email"
                                    required
                                    placeholder="123@example.com"
                                    multiline
                                    variant="outlined"
                                    label="Email"
                                    onChange={e => handleInputChange(e)}
                                    name="email"
                                    type="email"
                                    value={postForm.email}
                                    validators={["required", "isEmail"]}
                                    errorMessages={["this field is required", "email is not valid"]}
                                    fullWidth
                                />
                                          
                                <Controller
                                    as={
                                        <PhoneInput
                                            inputProps={{
                                            name: 'phone',
                                            required: true,
                                            autoFocus: true
                                            }}
                                            country={'uz'}
                                            value={phone ? postForm.phone=phone:''}
                                            onChange={()=> setPhone(phone)}
                                            ref={register({
                                                required: true
                                            })}
                                        /> }
                                        name="phone"
                                        control={control}
                                        rules= {{required: true}}
                                /> 
                                <AutocompleteCountry/>
                                <AutocompleteCountry/>
                                <AutocompleteCountry/>

                                <ValidationTextField
                                    style={{marginBottom:"30px"}}
                                    className={"pofileInfoF"}
                                    label="Street and house"
                                    required
                                    placeholder="123 Main Street"
                                    multiline
                                    // defaultValue={fromFields.firstName}
                                    value={postForm.address_street}
                                    onChange={e => handleInputChange(e)}
                                    variant="outlined"
                                    id="street"
                                    name="address_street"
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                />
                                <ValidationTextField
                                    style={{marginBottom:"30px"}}         
                                    className={"profileInfoF"}
                                    label="Job title"
                                    required
                                    placeholder="Front-end developer"
                                    multiline
                                    // defaultValue={fromFields.firstName}
                                    value={postForm.jobTitle}
                                    onChange={e => handleInputChange(e)}
                                    variant="outlined"
                                    id="jobTitle"
                                    name="jobTitle"
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                />
                                
                                <FormLabel component="legend" style={{fontWeight:700, color:"#000"}}>Where will employee work? <span className="required">*</span></FormLabel> 
                                        <RadioGroup aria-label="position" className="radios"  name="workplace" onChange={e => handleInputChange(e)} >
                                            <FormControlLabel
                                            name="workplace" 
                                            value="At Office"
                                            control={<Radio color="primary" />}
                                            label="At office"
                                            labelPlacement="end"
                                            />
                                            <FormControlLabel
                                            name="workplace" 
                                            value="Multi Location"
                                            control={<Radio color="primary" />}
                                            label="Multi Location"
                                            labelPlacement="end"
                                            />
                                            <FormControlLabel
                                            name="workplace" 
                                            value="Fully Remote"
                                            control={<Radio color="primary" />}
                                            label="Full Remote"
                                            labelPlacement="end"
                                            />
                                            <FormControlLabel 
                                            name="workplace" 
                                            value="On The Road" 
                                            control={<Radio color="primary" />} 
                                            label="On The Road" 
                                            />
                                        </RadioGroup>
                                
                                <div className="radios">
                                
                                    <Autocomplete
                                        style={{marginBottom:"30px"}}
                                        className="keySkills__autocomlete"
                                        multiple
                                        id="tags-outlined"
                                        options={allRegions}
                                        required
                                        getOptionLabel={(option) => option.name}
                                        getOptionSelected={(option, value) => option.name === value.name }
                                        defaultValue={[]}
                                        filterSelectedOptions
                                        // onChange={(e, value) => handleChange(e, value)}
                                        value={selRegions ? postForm.adRegion=selRegions:""}
                                        onChange={(event, newValue) => {
                                          setSelRegions([
                                            ...newValue,
                                          ]);
                                        }}
                                        renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            variant="outlined"
                                            label="Select region to advert"
                                            placeholder="Tashkent..."
                                            validators={["required"]}
                                            errorMessages={["This field is required"]}
                                      />
                                    )}
                                    />    
                                </div>
                                
                                <FormLabel component="legend" style={{fontWeight:700, color:"#000"}}>Is this job full time or part time?<span className="required">*</span></FormLabel> 
                                        <RadioGroup aria-label="position" className="radios" onChange={e => handleInputChange(e)} name="jobCondition" >
                                            <FormControlLabel
                                            name="jobCondition" 
                                            value="Full Time"
                                            control={<Radio color="primary" />}
                                            label="Full Time"
                                            labelPlacement="end"
                                            />
                                            <FormControlLabel
                                            name="jobCondition" 
                                            value="Part Time"
                                            control={<Radio color="primary" />}
                                            label="Part Time"
                                            labelPlacement="end"
                                            />
                                            <FormControlLabel
                                            name="jobCondition" 
                                            value="Part And Full Time"
                                            control={<Radio color="primary" />}
                                            label="Either full-time or part-time"
                                            labelPlacement="end"
                                            />
                                            
                                        </RadioGroup>
                                
                                <FormLabel component="legend" style={{fontWeight:700, color:"#000"}}>Are these additional job types that apply?<span className="required">*</span></FormLabel> 
                                        <RadioGroup aria-label="position" className="radios" onChange={e => handleInputChange(e)} name="jobType" >
                                            <FormControlLabel
                                            name="jobType" 
                                            value="internship"
                                            control={<Radio color="primary" />}
                                            label="Internship"
                                            labelPlacement="end"
                                            />
                                            <FormControlLabel
                                            name="jobType" 
                                            value="temporary"
                                            control={<Radio color="primary" />}
                                            label="Temporary"
                                            labelPlacement="end"
                                            />
                                            <FormControlLabel
                                            name="jobType" 
                                            value="contract"
                                            control={<Radio color="primary" />}
                                            label="Contract"
                                            labelPlacement="end"
                                            />
                                            
                                        </RadioGroup>
                               
                                <label name="salaryLabel" htmlFor="salfrom">Salary</label>

                                <div className="salary_inputs">
                                <div className="row salary_box">
                                    <div className="col-md-4 inp">
                                  
                                        <ValidationTextField
                                            className={"pofileInfoF"}
                                            // required
                                            placeholder="10"
                                            multiline
                                            variant="outlined"
                                            label="Salary from"
                                            onChange={e => handleInputChange(e)}
                                            name="fromSalary"
                                            // type="number"
                                            value={postForm.fromSalary}
                                            InputProps={{
                                                inputComponent: NumberFormatCustom,
                                              }}
                                            validators={['minNumber:0', 'maxNumber:10000000000', 'required']}
                                            errorMessages={["this field is required"]}
                                            fullWidth
                                        />
                                           
                                    </div>
                                    <div className="col-md-4 inp">
                                 
                                        <ValidationTextField
                                            className={"pofileInfoF"}
                                            // required
                                            placeholder="15"
                                            multiline
                                            variant="outlined"
                                            label="Salary to"
                                            onChange={e => handleInputChange(e)}
                                            name="toSalary"
                                            // type="number"
                                            value={postForm.toSalary}
                                            InputProps={{
                                                inputComponent: NumberFormatCustom,
                                              }}
                                            validators={['minNumber:1', 'maxNumber:10000000000', 'required']}
                                            errorMessages={["this field is required"]}
                                            fullWidth
                                        />
                                          
                                    </div>
                                    <div className="col-md-4 inp">
                                        <FormControl variant="outlined" className={classes.formControl}>
                                            <InputLabel id="demo-simple-select-outlined-label">Salary type</InputLabel>
                                            <Select2
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={postForm.salaryType}
                                            name="salaryType"
                                            onChange={e => handleInputChange(e)}
                                            label="Salary type"
                                            >
                                                <MenuItem value="per_hour">per hour</MenuItem>
                                                <MenuItem value="per_day">per day</MenuItem>
                                                <MenuItem value="per_month">per month</MenuItem>
                                                <MenuItem value="per_year">per year</MenuItem>
                                            </Select2>
                                        </FormControl>
                                    </div>
                                </div>
                                <div className="nightShift">
                                    <FormGroup>
                                        <FormControlLabel
                                            control={<Switch checked={checked} color="primary" 
                                            defaultValue={checked} 
                                            name="isNightShift" 
                                            onChange={toggleChecked} 
                                            value={!checked? postForm.jobShift="Day job" : postForm.jobShift="Night job"}
                                            />}
                                            label={checked? "Nightshift" : "Dayshift"}
                                        />
                                    </FormGroup>
                                </div>
                                <div className="additional">
                                    <label name="aboutJob" htmlFor="aboutJob">About job </label>
                                    <textarea name="aboutJob" id="aboutJob" cols="30" rows="7" onChange={e => handleInputChange(e)}></textarea>
                                    <label name="addReqLabel" htmlFor="addRequirement">Additional requirements(if needed) </label>
                                    <textarea name="addRequirement" id="addRequirement" cols="30" rows="7"onChange={e => handleInputChange(e)} ></textarea>
                                </div>
                                <div>
                                <label className="language__title">Skills</label>
                               
                                <Select
                                    defaultValue={[]}
                                    isMulti
                                    name="skills"
                                    options={techskills}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                    // onChange={e => handleInputChange(e)}
                                />
                               
                                <label className="language__title">Languages</label>
                                
                                <Autocomplete
                                        style={{marginBottom:"30px"}}
                                        className="keySkills__autocomlete"
                                        multiple
                                        id="tags-outlined"
                                        options={languages}
                                        required
                                        getOptionLabel={(option) => option.name}
                                        getOptionSelected={(option, value) => option.name === value.name }
                                        defaultValue={[]}
                                        filterSelectedOptions
                                        value={languagesList ? postForm.languages=languagesList:""}
                                        onChange={(event, newValue) => {
                                          setLanguagesList([
                                            ...newValue,
                                          ]);
                                        }}
                                        renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            variant="outlined"
                                            label="Select language"
                                            placeholder="Uzbek"
                                            validators={["required"]}
                                            errorMessages={["This field is required"]}
                                      />
                                    )}
                                    />    
                                   
                                </div>
                                    
                                </div>
                                <button htmlFor="jobfields" className=" btn btn-success postJobFieldButton mt-5" type="submit">Save and Post</button>
                            </ValidatorForm>
                                
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
