import React, {useState} from 'react';
import "../../../styles/EducationForm.css"
import { withStyles, makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Controller, useForm } from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {savePersonalDev} from "../../../stores/actions/personalDevAction";
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import Fab from '@material-ui/core/Fab';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';

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

function PersonalDevelopment() {
  const [values, setValues] = useState({
    year:'',
  });
  const classes = useStyles();
  const {control } = useForm();
  const personalDevInfo  = useSelector(state => state.personalDevReducer.personalDevInfo);
  const dispatch = useDispatch();
  const [personalD, setPersonalD] =useState({})

  const onSubmit = (e) => {
      e.preventDefault();
    dispatch(savePersonalDev(personalD))
    setPersonalD({})
    e.target.reset()
    setValues("")
  };

  const handleChange = (e)=>{
    // const {name,value} = e.target
    setPersonalD(prev => ({...prev, ...{
       [e.target.name] : e.target.value
     }}))
    }

    return (
      <div className="technical__skillsContainer">
        <div className="achievement__boxContainer">
            {personalDevInfo && 
            personalDevInfo.map((personal, index)=>(
            <div className="achievement__box" key={index}>
              <div className="achievement_boxInfo">
                  <h5 className="tech__skillTitle">{personal.achievement}</h5>
                  <p className="achievement__address">{personal.organizationName} / {personal.address}</p>
                  <p className="achievement__address">{personal.year}</p>
              </div>
              <div className="tech_skillButtons">
                <Fab size="small" color="primary" aria-label="edit"  className={classes.margin}>
                    <EditIcon className="tech__skillEdit"/>
                </Fab>
                <Fab size="small" color="secondary" aria-label="delete" className={classes.margin}>
                    <DeleteOutlineIcon className="tech__skillDelete"/>
                </Fab>
              </div>
            </div>
              )
            )
          }
        </div>
       
        {<form className="educationForm" onSubmit={onSubmit}>
            <Controller
               render={({onChange, value}) =>
                   <ValidationTextField
                      className={"profileInfoFields"}
                      label="Theme"
                      required
                      placeholder="Web dev course"
                      multiline
                      onChange={e => handleChange(e)}
                      variant="outlined"
                      id="achievement"
                      name="theme"
                    />
                  }
                name="theme"
                control={control}
                rules= {{required: true}}
            /> 
            <Controller
                render={({onChange, value}) =>
                   <ValidationTextField
                      className={"profileInfoFields"}
                      label="Organization"
                      required
                      placeholder="Udemy"
                      multiline
                      onChange={e => handleChange(e)}
                      variant="outlined"
                      id="organizationName"
                      name="organizationName"
                    />
                  }
                name="organizationName"
                control={control}
                rules= {{required: true}}
            /> 
            <Controller
                render={({onChange, value}) =>
                   <ValidationTextField
                      className={"profileInfoFields"}
                      label="Address"
                      required
                      placeholder="213, ...Street, Tashkent, Uzb"
                      multiline
                      variant="outlined"
                      onChange={e => handleChange(e)}
                      id="address"
                      name="address"
                    />
                  }
                name="address"
                control={control}
                rules= {{required: true}}
            /> 
            <div className="study__years">
            <Controller
                render={({onChange, value}) =>
                   <ValidationTextField
                      className="profileInfoFields"
                      label="Year"
                      required
                      placeholder="2019"
                      multiline
                      onChange={e => handleChange(e)}
                      variant="outlined"
                      id="year"
                      name="year"
                      InputProps={{
                        inputComponent: NumberFormatCustom,
                      }}
                    />
                  }
                name="year"
                control={control}
                rules= {{required: true}}
            />
            </div>
            <button type="submit" className="btn btn-success btn-block">save</button>
        </form>}
        </div>
    )
}

export default PersonalDevelopment



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
