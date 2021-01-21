import React, {useState, useRef, useContext} from 'react';
import {useHistory} from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';
import { useTranslation } from "react-i18next";
import {EmployerContext} from "../context/EmployerContext";
import "../styles/JobSearchBanner.css"
import AutocompleteCountry from './autocomleteInputs/AutocompleteCountry';
import { withStyles, makeStyles} from '@material-ui/core/styles';
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import {KeySkillsContext} from "../context/KeySkillsContext";
import MenuItem from '@material-ui/core/MenuItem';
import Select2 from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import { Controller, useForm } from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import { searchFormRequest } from "../stores/actions/searchFormAction";
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
        borderLeftWidth: 2,
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

function JobSearchBanner() {
    const { register, errors, handleSubmit, control, formState } = useForm();
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const classes = useStyles();
    const formRef = useRef()
    const history = useHistory();
  const {employers} = useContext(EmployerContext);
  let jobs = employers;
  const [ searchForm, setSearchForm] = useState({})
  const [selectedJobTitle, setSelectedJobTitle] = useState()
  const [selectedRegion, setSelectedRegion] = useState()

  const handleInputChange = (event) =>{
    setSearchForm({
        ...searchForm,
    ...{[event.target.name]: event.target.value, searchedJobTitle: selectedJobTitle, searchedJobRegion: selectedRegion}
    })
}
console.log("post form >>>>",searchForm);
const onSubmit = (e) => {
    e.preventDefault()
    dispatch(searchFormRequest(searchForm))
    // e.target.reset();
}
    return (
        <div className="jobsearchbanner">
            <div className="form__container">
            <ValidatorForm
                                ref={formRef}
                                className="jobpost__form" id="jobfields" onSubmit={onSubmit}
                                onError={(errors) => console.log(errors)}
                                noValidate
                            >       
                    <div className="row form_row">
                        <div className="col-md-8">
                            <div className="row form__searchRow">
                                <div className="col-md-6">
                                    <label className="labelWhat" htmlFor="free-solo-demo"><h3>{t("banner_find_job_label1")}</h3></label>
                                    <Controller
                                        render={({onChange, value}) =>
                                            <Autocomplete
                                                variant="outlined"
                                                id="free-solo-demo"
                                                options={jobs}
                                                getOptionLabel={(option) => option.job_title}
                                                name="searchedJobTitle"
                                                value={selectedJobTitle}
                                                onChange={((e, newValue)=>{
                                                    setSelectedJobTitle(newValue)
                                                })
                                                }
                                                renderInput={(params) => (
                                                    <TextField
                                                    {...params}
                                                    variant="outlined"
                                                    label={t("banner_find_job_placeholder1")}
                                                    margin="normal"
                                                    InputProps={{ ...params.InputProps, type: 'search', 
                                                    // startAdornment: (
                                                    //     <InputAdornment position="start">
                                                    //       <BusinessCenterIcon/>
                                                    //     </InputAdornment>
                                                    //   ), 
                                                    }}
                                                
                                                />
                                                )}
                                            />
                                        }
                                        name="jobTitle"
                                        control={control}
                                        rules= {{required: true}}
                                    /> 
                                </div>
                                <div className="col-md-6">
                                    <label className="labelWhat" htmlFor="free-solo-2-demo"><h3>{t("banner_find_job_label2")}</h3></label>
                                    <Controller
                                        render={({onChange, value}) =>
                                            <Autocomplete
                                            variant="outlined"
                                            id="free-solo-demo"
                                            options={jobs}
                                            getOptionLabel={(option) => option.country}
                                            name="searchedJobRegion"
                                            value={selectedRegion}
                                            onChange={((e, newValue)=>{
                                                setSelectedRegion(newValue)
                                            })
                                            }
                                            renderInput={(params) => (
                                                <TextField
                                                {...params}
                                                variant="outlined"
                                                label={t("banner_find_job_placeholder2")}
                                                margin="normal"
                                                InputProps={{ ...params.InputProps, type: 'search', 
                                                // startAdornment: (
                                                //     <InputAdornment position="start">
                                                //       <BusinessCenterIcon/>
                                                //     </InputAdornment>
                                                //   ), 
                                                }}
                                            
                                            />
                                            )}
                                        />
                                        }
                                        name="searchedJobRegion"
                                        control={control}
                                        rules= {{required: true}}
                                    />     
                                </div>
                            </div>
                            <label name="salaryLabel" htmlFor="salfrom">Salary</label>
                                <div className="salary_inputs">
                                <div className="row salary_box">
                                    <div className="col-md-4 inp">
                                    <Controller
                                        render={({onChange, value}) =>
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
                                            value={searchForm.fromSalary}
                                            InputProps={{
                                                inputComponent: NumberFormatCustom,
                                              }}
                                            validators={['minNumber:0', 'maxNumber:10000000000', 'required']}
                                            errorMessages={["this field is required"]}
                                            fullWidth
                                        />
                                        }
                                        name="jobTitle"
                                        control={control}
                                        rules= {{required: true}}
                                    />     
                                           
                                    </div>
                                    <div className="col-md-4 inp">
                                    <Controller
                                        render={({onChange, value}) =>
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
                                            value={searchForm.toSalary}
                                            InputProps={{
                                                inputComponent: NumberFormatCustom,
                                              }}
                                            validators={['minNumber:1', 'maxNumber:10000000000', 'required']}
                                            errorMessages={["this field is required"]}
                                            fullWidth
                                        />
                                        }
                                        name="jobTitle"
                                        control={control}
                                        rules= {{required: true}}
                                    />   
                                          
                                    </div>
                                    <div className="col-md-4 inp">
                                    <Controller
                                        render={({onChange, value}) =>
                                        <FormControl variant="outlined" className={classes.formControl}>
                                            <InputLabel id="demo-simple-select-outlined-label">Salary type</InputLabel>
                                            <Select2
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={searchForm.salaryType}
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
                                        }
                                        name="jobTitle"
                                        control={control}
                                        rules= {{required: true}}
                                    />
                                    </div>
                                </div>
                                </div>
                            {/* <div className="row form__salaryRow">
                                <div className="col">
                                  <label className="labelWhat"><h4>Salary</h4></label>
                                  <div className="row">
                                  <div className="col-md-4 salary__range">
                                    <label htmlFor="from">From </label>
                                    <input type="number" id="from" name="fromSalary"/>
                                </div>
                                <div className="col-md-4 salary__range">
                                    <label htmlFor="to">To </label>
                                    <input type="number" id="to" name="toSalary"/>
                                </div>
                                <div className="col-md-4 salary__range">
                                    <label htmlFor="salary__type ">Payment </label>
                                    <select name="salary__type" id="salary__type">
                                        <option key="value" value="0" disabled>Select an option</option>
                                        <option key="value" value="4">hour</option>
                                        <option key="value" value="5">day</option>
                                        <option key="value" value="6">month</option>
                                    </select>
                                </div>
                                  </div>  
                                </div>
                                
                                
                            </div> */}
                        </div>
                        <div className="col-md-4">
                            <button type="submit" className="btn btn-info form__searchButton findJob__buttonFind" htmlFor="findJobSubmit">{t("banner_find_job_find_button1")} <SearchIcon color="white"/></button>
                        </div>
                    </div>
                </ValidatorForm>
            </div>
        </div>
    )
}

export default JobSearchBanner
