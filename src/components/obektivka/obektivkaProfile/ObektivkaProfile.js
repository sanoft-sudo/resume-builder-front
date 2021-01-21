import React, {useState, useRef} from 'react';
import  "../../../styles/ObektivkaFields.css"
import ImageUploader from '../../resumeBuilder/imageUploader/ImageUploader';
import { withStyles, makeStyles} from '@material-ui/core/styles';
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import NumberFormat from 'react-number-format';
import { useForm } from "react-hook-form";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import { saveObektivkaProfile } from '../../../stores/actions/obektivkaProfileAction';
import "date-fns";
import Button from '@material-ui/core/Button';
import DateYearMonthPicker from '../../datePicker/DateYearMonthPicker';
import ObektivkaImageUploader from '../obektivkaImageUploader/ObektivkaImageUploader';


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
function ObektivkaProfile() {
  const { register, errors, handleSubmit, control, formState } = useForm();
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const classes = useStyles();
    const formRef = useRef();
    const obektivkaProfile = useSelector(state => state.obektivkaProfileReducer.obektivkaProfile)
    const [obektivka, setObektivka] = useState()
    const [isChecked, setIsChecked] = useState(false);
    const initialDate = Date.parse(new Date());
    const [selectedDate, setSelectedDate] = useState(initialDate)
  // setObektivka(obektiv)
    const handleChange1 =(date)=>{
        setSelectedDate(date)
    }
  
    const handleChecked = (event) => {
      setIsChecked(event.target.checked);
    };
    console.log("checked", isChecked);
    
    // const handleDateChange = (date) => {
    //   setSelectedDate(date);
    // };
  

    const handleInputChange = (event) =>{
      setObektivka({
        ...obektivka,
        ...{[event.target.name]: event.target.value, 
          currentFromDate:selectedDate,
        isWorking: isChecked}
      })
      // const {name, value} = event.target
      //   obektiv[name]= value
        
    }
    console.log("OBJ>>>", obektivka);
    
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(saveObektivkaProfile(obektivka))
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
               <div className="obektivka__imageUploader">
                <ObektivkaImageUploader/>
                </div>
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
                  <label htmlFor="#">Current job</label>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={isChecked}
                              onChange={handleChecked}
                              name="isWorking"
                              color="primary"
                              value={isChecked}
                            />
                          }
                          label="Vaqtincha ishsiz"
                        />
                            
                    <DateYearMonthPicker handleChange1={handleChange1} selectedDate={selectedDate}/>
                    <ValidationTextField
                        style={{marginBottom:"30px"}}
                        className={"profileInfoF"}
                        label="Company"
                        // required
                        placeholder="Amazon"
                        multiline
                        // defaultValue={obektivka?.currentCompany}
                        value={isChecked === false ? obektivka?.currentCompany : ""}
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
                        // required
                        placeholder="Front-end Developer"
                        multiline
                        // defaultValue={obektivka?.currentPosition}
                        value={isChecked === false ? obektivka?.currentPosition : ""}
                        onChange={handleInputChange}
                        variant="outlined"
                        id="currentPosition"
                        disabled={isChecked===true? true : false}
                        name="currentPosition"
                        validators={isChecked===false ? ["required"] : []} 
                        errorMessages={isChecked===false ? ["Position name is required"] : [""]}
                    />
                </div>  
                <Button variant="contained" style={{backgroundColor:"green"}} type="submit">Save</Button>
            </ValidatorForm>
           
        </div>
    )
}

export default ObektivkaProfile
