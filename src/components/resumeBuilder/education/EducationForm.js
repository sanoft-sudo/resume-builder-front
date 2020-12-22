import React, {useState} from 'react';
import "../../../styles/EducationForm.css"
import { withStyles, makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Controller, useForm } from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {saveEducation} from "../../../stores/actions/educationFormAction";
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import countries from "i18n-iso-countries";
import uzbek from "i18n-iso-countries/langs/uz.json";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const ValidationTextField = withStyles({
  root: {
    '& input:invalid + fieldset': {
      borderColor: 'ff1100',
      borderWidth: 2,
    },
  },
})(TextField);

function EducationForm() {
  const [checked, setChecked] = useState(false); 
  const initialValue={
     endYear: '',
    startYear:'',
  }
  const [values, setValues] = useState(initialValue);
  const classes = useStyles();
  const {control } = useForm();
  const education  = useSelector(state => state.educationReducer.education);
  const dispatch = useDispatch();
  const [educationFields, setEducationFields] = useState([])
   
 const onSubmit = (e) => {
      e.preventDefault();
    dispatch(saveEducation(educationFields))
    setChecked(false)
    setValues(initialValue)
    e.target.reset()
  };
 
    const handleChange = (e)=>{
     
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
      setEducationFields({
        ...educationFields,
        ...{[e.target.name]: e.target.value}
      })
      // const {name, value} = e.target
      // education[name]=value
      
      console.log("education>>>", education);
    }
    countries.registerLocale(uzbek);
    const uz = countries.getNames("uz", {select: "official"})
    console.log(uz);
    return (
      <div>
        {<form className="educationForm" onSubmit={onSubmit}>
            <Controller
               render={({onChange, value}) =>
                   <ValidationTextField
                      className={"profileInfoFields"}
                      label="Degree"
                      required
                      placeholder="Bachelor's"
                      multiline
                      onChange={e => handleChange(e)}
                      variant="outlined"
                      id="degree"
                      name="degree"
                    />
                  }
                name="degree"
                control={control}
                rules= {{required: true}}
            /> 
            <Controller
                render={({onChange, value}) =>
                   <ValidationTextField
                      className={"profileInfoFields"}
                      label="Major"
                      required
                      placeholder="Computer Science"
                      multiline
                      onChange={e => handleChange(e)}
                      variant="outlined"
                      id="major"
                      name="major"
                    />
                  }
                name="major"
                control={control}
                rules= {{required: true}}
            /> 
            <Controller
                render={({onChange, value}) =>
                   <ValidationTextField
                      className={"profileInfoFields"}
                      label="University"
                      required
                      placeholder="Harvard"
                      multiline
                      variant="outlined"
                      onChange={e => handleChange(e)}
                      id="university"
                      name="university"
                    />
                  }
                name="university"
                control={control}
                rules= {{required: true}}
            /> 
            <div className="study__years">
            <Controller
                render={({onChange, value}) =>
                   <ValidationTextField
                      className="profileInfoFields"
                      label="Start"
                      required
                      value={values.startYear}
                      placeholder="2016"
                      multiline
                      onChange={handleChange}
                      variant="outlined"
                      id="startYear"
                      name="startYear"
                      InputProps={{
                        inputComponent: NumberFormatCustom,
                      }}
                    />
                  }
                name="startYear"
                control={control}
                rules= {{required: true}}
            /> 
            {checked ? " " : ( 
            <Controller
                render={({onChange, value}) =>
                <ValidationTextField
                    label="End"
                    className="profileInfoFields"
                    value={values.endYear}
                    onChange={handleChange}
                    placeholder="2021"
                    required
                    name="endYear"
                    variant="outlined"
                    multiline
                    id="endYear"
                    InputProps={{
                      inputComponent: NumberFormatCustom,
                    }}
              />
                  }
                name="endYear"
                control={control}
                rules= {{required: true}}
            /> 
            )} 
            <Controller
                render={({onChange, value}) =>
                   <FormGroup>
                   <FormControlLabel
                       control={<Switch checked={checked} color="primary" 
                       name="toPresent" 
                       onChange={e=>{setChecked(!checked)}} 
                       value={checked}
                       />}
                       label={checked? "To present" : ""}
                   />
                   </FormGroup>
                   }
                   name="toPresent"
                   control={control}
                   // rules= {{required:false}} 
            />

            </div>
            <button type="submit" className="btn btn-success btn-block">save</button>
        </form>}
        </div>
    )
}

export default EducationForm



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
      minLength="4"
      maxLength="4"
      isNumericString
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
