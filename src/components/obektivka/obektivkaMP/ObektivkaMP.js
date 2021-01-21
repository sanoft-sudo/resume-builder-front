import React, {useState, useRef} from 'react'
import { withStyles, makeStyles} from '@material-ui/core/styles';
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { useTranslation } from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import { saveObektivkaMP } from '../../../stores/actions/obektivkaMPAction';
import "date-fns";
import Button from '@material-ui/core/Button';
import MyDatePicker from '../../datePicker/MyDatePicker';
import  "../../../styles/ObektivkaFields.css"
import { Controller, useForm } from "react-hook-form";
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


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

function ObektivkaMP() {
    const {control } = useForm();
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const formRef = useRef();
    const state_awards = useSelector(state => state.obektivkaStateAwardReducer.state_awards)
    const [obektivka, setObektivka] = useState()
    
  var initialDate = Date.parse(new Date());
  const [mpStart, setMpStart] = useState(initialDate);
  const [mpEnd, setMpEnd] = useState(initialDate); 
  const [checked, setChecked] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const [disabled, setDisabled] = useState(false)
  
    const handleCheck1 =()=>{
      setIsChecked(!isChecked);
      setDisabled(!disabled)
      {isChecked ? (
        setObektivka({
        ...obektivka,
        ...{isMp:false}
      })
      ):(
        setObektivka({
          ...obektivka,
          ...{isMp:true, mpEnd:"", mpStart:""}
        })
      )}
    }
      const handleCheck2 =()=>{
        setChecked(!checked);
          {checked ? (
            setObektivka({
            ...obektivka,
            ...{toNow:""}
          })
          ):(
            setObektivka({
              ...obektivka,
              ...{toNow:"to Present", mpEnd:""}
            })
          )}
          
        }
    
    
      const handleChange1 = (date) => {
        setMpStart(date)
        setObektivka({
          ...obektivka,
          ...{mpStart:date}
        })
      };
        
    const handleChange2 = (date) => {
      setMpEnd(date);
      !checked ? (
        setObektivka({
            ...obektivka,
            ...{mpEnd:date}
          })
      ):(
        setObektivka({
          ...obektivka,
          ...{mpEnd:null}
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
        dispatch(saveObektivkaMP(obektivka))
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
                        label="MP Position"
                        required
                        placeholder="Mehnat shuxrati"
                        multiline
                        disabled={disabled}
                        defaultValue={obektivka?.mpPosition}
                        value={obektivka?.mpPosition}
                        onChange={e => handleInputChange(e)}
                        variant="outlined"
                        id="mpPosition"
                        name="mpPosition"
                        validators={!isChecked ? ["required"] : []}
                        errorMessages={!isChecked ? ["Award name is required"]:[]}
                    />
                    <Controller
                        render={({onChange, value}) =>
                        <FormGroup>
                        <FormControlLabel
                            control={<Switch checked={isChecked} color="primary" 
                            name="isMpMembership" 
                            onChange={(e)=>handleCheck1(!isChecked)} 
                            value={isChecked}
                            />}
                            label="A'zo emas"
                    />
                   </FormGroup>
                   }
                   name="isMpMembership"
                   control={control}
            /> 
                   <MyDatePicker 
                        startDate={mpStart} 
                        endDate={mpEnd} 
                        checked={checked} 
                        handleChange1={handleChange1} 
                        handleChange2={handleChange2} 
                        handleCheck={handleCheck2}
                        disabled={disabled}
                        />
                </div>  
                <Button variant="contained" style={{backgroundColor:"green"}} type="submit">Save</Button>
            </ValidatorForm>
        </div>
    )
}

export default ObektivkaMP
