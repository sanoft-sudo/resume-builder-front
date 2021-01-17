import React, {useState, useContext, useRef} from 'react';
import  "../../styles/ObektivkaFields.css";
import ImageUploader from '../resumeBuilder/imageUploader/ImageUploader';
import { withStyles, makeStyles} from '@material-ui/core/styles';
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import NumberFormat from 'react-number-format';
import { Controller, useForm } from "react-hook-form";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import { saveObektivka } from '../../stores/actions/obektivkaAction';
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import Button from '@material-ui/core/Button';


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
function ObektivkaFields() {
  const { register, errors, handleSubmit, control, formState } = useForm();
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const classes = useStyles();
    const formRef = useRef();
    const obektiv = useSelector(state => state.obektivkaReducer.obektiv)
    const [obektivka, setObektivka] = useState()
    const [isChecked, setIsChecked] = useState(false);
   const [selectedDate, setSelectedDate] = useState(
      new Date("2021-01-01")
    );
    console.log(selectedDate);
  
    const handleChange = (event) => {
      setIsChecked(event.target.checked);
    };
    console.log("checked", isChecked);
    
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  

    const handleInputChange = (event) =>{
      setIsChecked(event.target.checked);
      const {name, value} = event.target
        obektiv[name]= value
        
    }
    
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(saveObektivka(obektiv))
        // e.target.reset();
    }

    return (
        <div className="obektivka__container">
            <ValidatorForm
                ref={formRef}
                className="obektivka__form" id="obektivka" onSubmit={onSubmit}
                onError={(errors) => console.log(errors)}
                noValidate
            >     
               <div className="obektivka__imageUploader">
                <ImageUploader/>
                </div>
                <div className="obektivka__inputs">
                    <ValidationTextField
                        style={{marginBottom:"30px"}}
                        className={"profileInfoF"}
                        label="Full name"
                        required
                        placeholder="Sanjar Juraev"
                        multiline
                        defaultValue={obektiv.fullName}
                        onChange={e => handleInputChange(e)}
                        variant="outlined"
                        id="fullName"
                        name="fullName"
                        validators={["required"]}
                        errorMessages={["Full name is required"]}
                    />
                  <label htmlFor="#">Current job</label>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={isChecked}
                              onChange={handleInputChange}
                              name="isWorking"
                              color="primary"
                              value={isChecked}
                            />
                          }
                          label="Vaqtincha ishsiz"
                        />
                            
                      <Controller 
                           render={({onChange, value}) =>
                            <MuiPickersUtilsProvider utils={DateFnsUtils} >
                              <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="dd/MM/yyyy"
                                style={{marginBottom:"20px"}}
                                margin="normal"
                                id="date-picker-inline"
                                label="Select date"
                                required
                                name="currentFromDate"
                                defaultValue={selectedDate}
                                value={selectedDate ? obektiv.currentFromDate = selectedDate:""}
                                onChange={handleDateChange}
                                disabled={isChecked===true? true : false}
                                KeyboardButtonProps={{
                                  "aria-label": "change date"
                                }}
                              />
                            </MuiPickersUtilsProvider>
                          }
                          name="currentFromDate"
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
                        defaultValue={obektiv.currentCompany}
                        onChange={e => handleInputChange(e)}
                        variant="outlined"
                        id="currentCompany"
                        disabled={isChecked===true? true : false}
                        name="currentCompany"
                        validators={isChecked===false ? ["required"] :[ ""]} 
                        errorMessages={isChecked===false ? ["Company name is required"] : [""]}
                    />
                    <ValidationTextField
                        style={{marginBottom:"30px"}}
                        className={"profileInfoF"}
                        label="Position"
                        required
                        placeholder="Front-end Developer"
                        multiline
                        defaultValue={obektiv.currentPosition}
                        onChange={handleInputChange}
                        variant="outlined"
                        id="currentPosition"
                        disabled={isChecked===true? true : false}
                        name="currentPosition"
                        validators={isChecked===false ? ["required"] : []} 
                        errorMessages={isChecked===false ? ["Position name is required"] : [""]}
                    />
                </div>  
                <Button variant="contained" style={{backgroundColor:"green"}} type="onSubmit">Save</Button>
            </ValidatorForm>
           
        </div>
    )
}

export default ObektivkaFields
