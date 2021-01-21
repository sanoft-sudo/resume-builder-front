import React, {useState, useRef} from 'react';
import  "../../../styles/ObektivkaFields.css"
import ImageUploader from '../../resumeBuilder/imageUploader/ImageUploader';
import { withStyles, makeStyles} from '@material-ui/core/styles';
import { Controller, useForm } from "react-hook-form";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useTranslation } from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import { saveObektivkaRelatives } from '../../../stores/actions/obektivkaRelativesAction';
import "date-fns";
import Button from '@material-ui/core/Button';
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SingleYearPicker from '../../datePicker/SingleYearPicker';

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

const options = [
    {id:"father", name:"Otasi"},
    {id:"mother", name:"Onasi"},
    {id:"elBrother", name:"Akasi"},
    {id:"ltBrother", name:"Ukasi"},
    {id:"elSister", name:"Opasi"},
    {id:"ltSister", name:"Singlisi"},
    {id:"son", name:"O'g'li"},
    {id:"daughter", name:"Qizi"},
    {id:"father-in-law", name:"Qaynotasi"},
    {id:"mother-in-law", name:"Qaynonasi"},
]

function ObektivkaRelatives() {

    const { register, errors, handleSubmit, control, formState } = useForm();
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const classes = useStyles();
    const formRef = useRef();
    const relatives = useSelector(state => state.obektivkaRelativesReducer.relatives)
    const [obektivka, setObektivka] = useState()
    const [isChecked, setIsChecked] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [checked, setChecked] = useState(false);
    const initialDate = Date.parse(new Date());
    const [selectedDate, setSelectedDate] = useState(initialDate)
    const [dethDate, setDethDate] = useState(initialDate)
    const [selectedRelative, setSelectedRelative] = useState()
  // setObektivka(obektiv)
    const handleChange1 =(date)=>{
        setSelectedDate(date)
    }
    const handleChange2 =(date)=>{
        if(checked){
            setDethDate(date)
        }else{
            setDethDate("")
        }
        
    }
  
    const handleChecked1 = (event) => {
      setIsChecked(event.target.checked); //isretierd
    };
    const handleChecked5 = (event) => {
      setChecked(event.target.checked); //isDead
    };
    const handleChecked3 = (event) => {
      setIsChecked2(event.target.checked); //isJuiii
    };
    
   console.log("cheked", checked);
    console.log("isCheked1", isChecked);
    console.log("isCheked2", isChecked2);
    const handleInputChange = (event) =>{
        // let relativeName = selectedRelative.name
     
        setObektivka({
          ...obektivka,
          ...{[event.target.name]: event.target.value, 
            birthDate:selectedDate, relative: selectedRelative,
          isDead: checked, isRetired: isChecked, isJuvenile:isChecked2, dethDate:dethDate}
        })
        // const {name, value} = event.target
        //   obektiv[name]= value
          
      }
      
      const onSubmit = (e) => {
          e.preventDefault()
          dispatch(saveObektivkaRelatives(obektivka))
          // e.target.reset();
      }

    return (
        <div className="obektivka__container">
            <ValidatorForm
                ref={formRef}
                className="obektivka__form" id="obektivka_form1" onSubmit={onSubmit}
                onError={(errors) => console.log(errors)}
                noValidate
            >     
                <div className="obektivka__inputs">
                    <ValidationTextField
                        style={{marginBottom:"30px"}}
                        className={"profileInfoF"}
                        label="Full name"
                        required
                        placeholder="Sanjar Juraev"
                        multiline
                        defaultValue={obektivka?.fullName}
                        value={obektivka?.fullName}
                        onChange={e => handleInputChange(e)}
                        variant="outlined"
                        id="fullName"
                        name="fullName"
                        validators={["required"]}
                        errorMessages={["Full name is required"]}
                    />
                    <Controller
                        render = {({onChange, value}) =>
                            <Autocomplete
                                valiant="outlined"
                                options={options}
                                className="language__autocomlete"
                                getOptionLabel={(option) => option.name}
                                width="100%"
                                id={"relative"}
                                required
                                name={"relative"}
                                value={selectedRelative}
                                onChange={((e, newValue)=>{
                                    setSelectedRelative(newValue)
                                })
                                }
                                renderInput={(params) => (
                                <TextField {...params} label={"Select relative"} variant="outlined" margin="normal" />
                                )}
                            />
                        }
                    name="relative"
                    control={control}
                    rules= {{required: true}}
                    />  
                    <SingleYearPicker handleChange1={handleChange1} takenYear={selectedDate}/>
                    <ValidationTextField
                       style={{marginBottom:"30px"}}
                       className={"profileInfoF"}
                      label="Birth region"
                      required
                      placeholder="Namangan"
                      multiline
                      value={obektivka?.birthRegion}
                        onChange={handleInputChange}
                        variant="outlined"
                        id="birthRegion"
                        name="birthRegion"
                        validators={["required"]} 
                        errorMessages={["This field is required"]}
                    />
                    <ValidationTextField
                       style={{marginBottom:"30px"}}
                       className={"profileInfoF"}
                      label="Birth city or district"
                      required
                      placeholder="Mingbuloq"
                      multiline
                      value={obektivka?.birthCityOrDistrict}
                        onChange={handleInputChange}
                        variant="outlined"
                        id="birthCityOrDistrict"
                        name="birthCityOrDistrict"
                        validators={["required"]} 
                        errorMessages={["This field is required"]}
                    />
                    <Controller
                        render = {({onChange, value}) =>
                          <FormControlLabel
                          control={
                            <Checkbox
                              checked={isChecked2}
                              onChange={handleChecked3}
                              name="isJuvenile"
                              color="primary"
                              value={isChecked2}
                            />
                          }
                          label="Voyaga yetmagan"
                        />
                      }
                      name="isJuvenile"
                      control={control}
                      rules= {{required: true}}
                      />  
                        
                        {
                          isChecked2===false ? (
                            <>
                            <Controller
                        render = {({onChange, value}) =>
                              <FormControlLabel
                          control={
                            <Checkbox
                              checked={isChecked}
                              onChange={handleChecked1}
                              name="isRetired"
                              color="primary"
                              value={isChecked}
                            />
                          }
                          label="Nafaqada"
                        />
                      }
                      name="isRetired"
                      control={control}
                      rules= {{required: true}}
                      />

                    <ValidationTextField
                        style={{marginBottom:"30px"}}
                        className={"profileInfoF"}
                        label="Company"
                        required
                        placeholder="Amazon"
                        multiline
                        defaultValue={obektivka?.currentCompany}
                        value={obektivka?.currentCompany}
                        onChange={e => handleInputChange(e)}
                        variant="outlined"
                        id="currentCompany"
                        name="currentCompany"
                        validators={isChecked2===false ?["required"]:[]} 
                        errorMessages={isChecked2===false ?["Company name is required"] : []}
                    />
                    <ValidationTextField
                        style={{marginBottom:"30px"}}
                        className={"profileInfoF"}
                        label="Position"
                        required
                        placeholder="Front-end Developer"
                        multiline
                        defaultValue={obektivka?.currentPosition}
                        value={obektivka?.currentPosition}
                        onChange={handleInputChange}
                        variant="outlined"
                        id="currentPosition"
                        name="currentPosition"
                        validators={isChecked2===false ?["required"]:[]} 
                        errorMessages={isChecked2===false ?["Company name is required"] : []}
                    />
                    
                            </>
                          ):""
                        }        
                         <Controller
                        render = {({onChange, value}) =>
                    <FormControlLabel
                          control={
                            <Checkbox
                              checked={checked}
                              onChange={handleChecked5}
                              name="isDead"
                              color="primary"
                              value={checked}
                            />
                          }
                          label="Vafot etgan"
                        />
                      }
                      name="dead"
                      control={control}
                      rules= {{required: true}}
                      />
                        {checked ===true?(
                            <SingleYearPicker handleChange1={handleChange2} takenYear={dethDate}/>
                        ):""}
                      {checked ===false ? (
                          <>
                          <ValidationTextField
                          style={{marginBottom:"30px"}}
                          className={"profileInfoF"}
                         label="Region"
                       //   required
                       display={checked===true ? "none" : "block"}
                         placeholder="Namangan"
                         multiline
                         value={obektivka?.region}
                           onChange={handleInputChange}
                           variant="outlined"
                           id="region"
                           name="region"
                           disabled={checked===true ? true : false}
                           validators={checked===false ?["required"] : []} 
                           errorMessages={checked===false ?["This field is required"]:[]}
                       />
                       <ValidationTextField
                          style={{marginBottom:"30px"}}
                          className={"profileInfoF"}
                         label="City or District"
                       //   required
                       display={checked===true ? "none" : "block"}
                         placeholder="Mingbuloq"
                         multiline
                         value={obektivka?.cityOrDistrict}
                           onChange={handleInputChange}
                           variant="outlined"
                           id="cityOrDistrict"
                           name="cityOrDistrict"
                           disabled={checked===true ? true : false}
                           validators={checked===false ?["required"] : []} 
                           errorMessages={checked===false ?["This field is required"]:[]}
                       />
                       <ValidationTextField
                          style={{marginBottom:"30px"}}
                          className={"profileInfoF"}
                         label="Street and house"
                         display={checked===true ? "none" : "block"}
                       //   required
                         placeholder="123 Main Street"
                         multiline
                         value={obektivka?.streetAndHouse}
                           onChange={handleInputChange}
                           variant="outlined"
                           id="streetAndHouse"
                           name="streetAndHouse"
                           disabled={checked===true ? true : false}
                           validators={checked===false ?["required"] : []} 
                           errorMessages={checked===false ?["This field is required"]:[]}
                       />
                       </>
                      ):""}  
                    
                </div>  
                <Button variant="contained" style={{backgroundColor:"green"}} type="submit">Save</Button>
            </ValidatorForm>
           
        </div>
    )
}

export default ObektivkaRelatives
