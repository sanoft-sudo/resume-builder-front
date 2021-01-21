import React, {useState, useRef} from 'react'
import { withStyles, makeStyles} from '@material-ui/core/styles';
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { useTranslation } from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import { saveObektiveAwards } from '../../../stores/actions/obektivkaStateAwardAction';
import "date-fns";
import Button from '@material-ui/core/Button';
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

function ObektivkaStateAwards() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const formRef = useRef();
    const state_awards = useSelector(state => state.obektivkaStateAwardReducer.state_awards)
    const [obektivka, setObektivka] = useState([])
    var initialDate = Date.parse(new Date());
    const [selectedYear, setSelectedYear] = useState(initialDate)

    const handleChange1 =(date)=>{
      setSelectedYear(date)
    }
  
 
    const handleInputChange = (event) =>{
      setObektivka({
        ...obektivka,
        ...{[event.target.name]: event.target.value, 
            awardYear:selectedYear}
      })
    }
    
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(saveObektiveAwards(obektivka))
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
                        label="State Award"
                        required
                        placeholder="Mehnat shuxrati"
                        multiline
                        defaultValue={obektivka?.awardName}
                        value={obektivka?.awardName}
                        onChange={e => handleInputChange(e)}
                        variant="outlined"
                        id="awardName"
                        name="awardName"
                        validators={["required"]}
                        errorMessages={["Award name is required"]}
                    /> 
                   <SingleYearPicker takenYear={selectedYear} handleChange1={handleChange1} />
                    
                </div>  
                <Button variant="contained" style={{backgroundColor:"green"}} type="submit">Save</Button>
            </ValidatorForm>
        </div>
    )
}

export default ObektivkaStateAwards
