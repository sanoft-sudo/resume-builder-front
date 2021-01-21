import React, {useState, useRef} from 'react'
import ImageUploader from '../../resumeBuilder/imageUploader/ImageUploader';
import { withStyles, makeStyles} from '@material-ui/core/styles';
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import {useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import { saveObektivkaProfile } from '../../../stores/actions/obektivkaBirthAction';
import "date-fns";
import Button from '@material-ui/core/Button';
import BirthdayPicker from '../../datePicker/BirthdayPicker';


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
function ObektivkaBirthDateAndPlace() {
    const { register, errors, handleSubmit, control, formState } = useForm();
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const classes = useStyles();
    const formRef = useRef();
    const obektivkaBirth = useSelector(state => state.obektivkaBirthReducer.obektivkaBirth)
    const [obektivka, setObektivka] = useState()
    const initialDate = Date.parse(new Date());
    const [birthday, setBirthday] = useState(initialDate)
    // setObektivka(obektiv)
    const handleChange1 =(date)=>{
        setBirthday(date)
    }

    const handleInputChange = (event) =>{
        setObektivka({
          ...obektivka,
          ...{[event.target.name]: event.target.value, 
            birthDate:birthday,}
        })
        // const {name, value} = event.target
        //   obektiv[name]= value
          
      }
    //   console.log("OBJ>>>", obektiv);
      
      const onSubmit = (e) => {
          e.preventDefault()
          dispatch(saveObektivkaProfile(obektivka))
          // e.target.reset();
      }
  
    return (
        <div className="obektivka__container">
            <ValidatorForm
                ref={formRef}
                className="obektivka__form" id="obektivka_form2" onSubmit={onSubmit}
                onError={(errors) => console.log(errors)}
                noValidate
            >     
               
                <div className="obektivka__inputs">
                   
                    <BirthdayPicker handleChange1={handleChange1} birthday={birthday}/>
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
                    <ValidationTextField
                       style={{marginBottom:"30px"}}
                       className={"profileInfoF"}
                      label="Nationality"
                      required
                      placeholder="Uzbek"
                      multiline
                      value={obektivka?.nationality}
                        onChange={handleInputChange}
                        variant="outlined"
                        id="nationality"
                        name="nationality"
                        validators={["required"]} 
                        errorMessages={["This field is required"]}
                    />
                    <ValidationTextField
                       style={{marginBottom:"30px"}}
                       className={"profileInfoF"}
                      label="Party membership"
                      required
                      placeholder="XDP"
                      multiline
                      value={obektivka?.party_membership}
                        onChange={handleInputChange}
                        variant="outlined"
                        id="party_membership"
                        name="party_membership"
                        validators={["required"]} 
                        errorMessages={["This field is required"]}
                    />
                    
                </div>  
                <Button variant="contained" style={{backgroundColor:"green"}} type="submit">Save</Button>
            </ValidatorForm>
        </div>
    )
}

export default ObektivkaBirthDateAndPlace
