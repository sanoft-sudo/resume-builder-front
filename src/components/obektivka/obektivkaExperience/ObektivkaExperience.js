import React, {useState, useRef} from 'react'
import { withStyles, makeStyles} from '@material-ui/core/styles';
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { useTranslation } from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import { saveObektivkaExperience } from '../../../stores/actions/obektivkaExperienceAction';
import "date-fns";
import Button from '@material-ui/core/Button';
import MyDatePicker from '../../datePicker/MyDatePicker';
import  "../../../styles/ObektivkaFields.css"

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
function ObektivkaExperience() {

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const formRef = useRef();
    const experience = useSelector(state => state.obektivkaExperienceReducer.experience)
    const [obektivka, setObektivka] = useState()
    
  var initialDate = Date.parse(new Date());
  const [fromDate, setFromDate] = useState(initialDate);
  const [toDate, setToDate] = useState(initialDate); 
  const [checked, setChecked] = useState(false)
    const handleCheck =()=>{
        setChecked(!checked);
        {checked ? (
            setObektivka({
          ...obektivka,
          ...{toNow:""}
        })
        ):(
            setObektivka({
            ...obektivka,
            ...{toNow:"to Present", toDate:""}
          })
        )}
        
      }
     
    
      const handleChange1 = (date) => {
        setFromDate(date)
        setObektivka({
          ...obektivka,
          ...{fromDate:date}
        })
      };
        
    const handleChange2 = (date) => {
      setToDate(date);
      !checked ? (
        setObektivka({
            ...obektivka,
            ...{toDate:date}
          })
      ):(
        setObektivka({
          ...obektivka,
          ...{toDate:null}
        })
      )
     
      };
 
    const handleInputChange = (event) =>{
      setObektivka({
        ...obektivka,
        ...{[event.target.name]: event.target.value}
      })
    }
    
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(saveObektivkaExperience(obektivka))
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
                        label="Institution or Company"
                        required
                        placeholder="Institution"
                        multiline
                        defaultValue={obektivka?.companyName}
                        value={obektivka?.companyName}
                        onChange={e => handleInputChange(e)}
                        variant="outlined"
                        id="companyName"
                        name="companyName"
                        validators={["required"]}
                        errorMessages={["Institution name is required"]}
                    /> 
                    <ValidationTextField
                        style={{marginBottom:"30px"}}
                        className={"profileInfoF"}
                        label="Position"
                        required
                        placeholder="Mehnat shuxrati"
                        multiline
                        defaultValue={obektivka?.positionName}
                        value={obektivka?.positionName}
                        onChange={e => handleInputChange(e)}
                        variant="outlined"
                        id="positionName"
                        name="positionName"
                        validators={["required"]}
                        errorMessages={["Position name is required"]}
                    /> 
                   <MyDatePicker 
                        startDate={fromDate} 
                        endDate={toDate} 
                        checked={checked} 
                        handleChange1={handleChange1} 
                        handleChange2={handleChange2} 
                        handleCheck={handleCheck}
                        />
                </div>  
                <Button variant="contained" style={{backgroundColor:"green"}} type="submit">Save</Button>
            </ValidatorForm>
        </div>
    )
}

export default ObektivkaExperience
