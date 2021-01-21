import React, {useState, useRef} from 'react'
import { withStyles, makeStyles} from '@material-ui/core/styles';
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { useForm } from "react-hook-form";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useTranslation } from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import { saveObektivkaAcademic } from '../../../stores/actions/obektivkaAcademicAction';
import "date-fns";
import Button from '@material-ui/core/Button';
import DateYearMonthPicker from '../../datePicker/DateYearMonthPicker';
import  "../../../styles/ObektivkaFields.css"
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
function ObektivkaAcademic() {
    const { register, errors, handleSubmit, control, formState } = useForm();
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const classes = useStyles();
    const formRef = useRef();
    const obektivkaAcademic = useSelector(state => state.obektivkaProfileReducer.obektivkaAcademic)
    const [obektivka, setObektivka] = useState()
    const [isChecked, setIsChecked] = useState(false);
    const initialDate = Date.parse(new Date());
    const [selectedDate, setSelectedDate] = useState(initialDate)

    const handleChange1 =(date)=>{
        setSelectedDate(date)
    }
  
    const handleChecked = (event) => {
      setIsChecked(event.target.checked);
    };
    console.log("checked", isChecked);
    
    const handleInputChange = (event) =>{
      setObektivka({
        ...obektivka,
        ...{[event.target.name]: event.target.value, 
            graduated_when:selectedDate,
          graduation_shift: isChecked}
      })
    }
    
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(saveObektivkaAcademic(obektivka))
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
                        label="Education degree"
                        required
                        placeholder="Bachelor's"
                        multiline
                        defaultValue={obektivka?.degree}
                        value={obektivka?.degree}
                        onChange={e => handleInputChange(e)}
                        variant="outlined"
                        id="degree"
                        name="degree"
                        validators={["required"]}
                        errorMessages={["Degree is required"]}
                    /> 
                    <SingleYearPicker handleChange1={handleChange1} takenYear={selectedDate}/>
                    <ValidationTextField
                        style={{marginBottom:"30px"}}
                        className={"profileInfoF"}
                        label="Institution"
                        // required
                        placeholder="Harvard"
                        multiline
                        // defaultValue={obektivka?.currentCompany}
                        value={obektivka?.graduated_where}
                        onChange={e => handleInputChange(e)}
                        variant="outlined"
                        id="graduated_where"
                        name="graduated_where"
                        validators={["required"]} 
                        errorMessages={["Institution name is required"]}
                    />
                     <FormControlLabel
                          control={
                            <Checkbox
                              checked={isChecked}
                              onChange={handleChecked}
                              name="graduation_shift"
                              color="primary"
                              value={isChecked}
                            />
                          }
                          label={isChecked === true ? "Sirtqi" : "Kunduzgi"}
                        />
                    <ValidationTextField
                        style={{marginBottom:"30px"}}
                        className={"profileInfoF"}
                        label="Speciality by diploma"
                        required
                        placeholder="Economist"
                        multiline
                        // defaultValue={obektivka?.currentPosition}
                        value={obektivka?.diploma_speciality}
                        onChange={handleInputChange}
                        variant="outlined"
                        id="diploma_speciality"
                        name="diploma_speciality"
                        validators={["required"]} 
                        errorMessages={["Speciality is required"]}
                    />
                    <ValidationTextField
                        style={{marginBottom:"30px"}}
                        className={"profileInfoF"}
                        label="Academic degree"
                        required
                        placeholder="Ph.D. in Economics"
                        multiline
                        // defaultValue={obektivka?.currentPosition}
                        value={obektivka?.academic_degree}
                        onChange={handleInputChange}
                        variant="outlined"
                        id="academic_degree"
                        name="academic_degree"
                        validators={["required"]} 
                        errorMessages={["Academic degree is required"]}
                    />
                    <ValidationTextField
                        style={{marginBottom:"30px"}}
                        className={"profileInfoF"}
                        label="Academic title"
                        required
                        placeholder="Professor"
                        multiline
                        // defaultValue={obektivka?.currentPosition}
                        value={obektivka?.academic_title}
                        onChange={handleInputChange}
                        variant="outlined"
                        id="academic_title"
                        name="academic_title"
                        validators={["required"]} 
                        errorMessages={["Academic title is required"]}
                    />
                    <ValidationTextField
                        style={{marginBottom:"30px"}}
                        className={"profileInfoF"}
                        label="Academic title"
                        required
                        placeholder="Professor"
                        multiline
                        // defaultValue={obektivka?.currentPosition}
                        value={obektivka?.military_title}
                        onChange={handleInputChange}
                        variant="outlined"
                        id="military_title"
                        name="military_title"
                        validators={["required"]} 
                        errorMessages={["Academic title is required"]}
                    />
                </div>  
                <Button variant="contained" style={{backgroundColor:"green"}} type="submit">Save</Button>
            </ValidatorForm>
        </div>
    )
}

export default ObektivkaAcademic
