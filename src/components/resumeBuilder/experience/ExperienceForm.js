import React, {useState} from 'react';
import "../../../styles/EducationForm.css"
import { withStyles, makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Controller, useForm } from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {saveExperience} from "../../../stores/actions/experienceAction";
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';




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

function ExperienceForm() {
  const [checked, setChecked] = useState(false);  
  const [values, setValues] = useState({
    endYear: '',
    startYear:'',
  });
  const [projectInputList, setProjectInputList] = useState([{project: ""}]);
  const classes = useStyles();
  const {control } = useForm();
  const experience  = useSelector(state => state.experienceReducer.experience);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
      e.preventDefault();
    dispatch(saveExperience(experience))
    setValues({ endYear: '',
    startYear:''})
    setChecked(false)
    setProjectInputList({project:""})
  };

  const toggleChecked = (e) => {
    setChecked((prev) => !prev);
    console.log(e.target.value);
  };

  const handleRemoveProject =(i)=>{
      let list = [...projectInputList];
      list.splice(i, 1);
      setProjectInputList(list);
  }

  const handleAddProject =()=>{
      setProjectInputList([...projectInputList, {project: ""}]);
  }
    
      
    const handleChange = (e)=>{
    const {name, value} = e.target
    
      if(checked===true){
      
           

        setValues({
          endYear:"To present",
          startYear:value
          // ...values,
          // [e.target.name]: e.target.value,
        });
      }
      experience[name]=value
    }

    return (
      <div>
        {<form className="educationForm" onSubmit={onSubmit}>
            <Controller
               render={({onChange, value}) =>
                   <ValidationTextField
                      className={"profileInfoFields"}
                      label="Job title"
                      required
                      placeholder="Web developer"
                      multiline
                      onChange={e => handleChange(e)}
                      variant="outlined"
                      id="jobTitle"
                      name="jobTitle"
                    />
                  }
                name="jobTitle"
                control={control}
                rules= {{required: true}}
            /> 
            <Controller
                render={({onChange, value}) =>
                   <ValidationTextField
                      className={"profileInfoFields"}
                      label="Company name"
                      required
                      placeholder="Amazon"
                      multiline
                      onChange={e => handleChange(e)}
                      variant="outlined"
                      id="companyName"
                      name="companyName"
                    />
                  }
                name="companyName"
                control={control}
                rules= {{required: true}}
            /> 
            <Controller
                render={({onChange, value}) =>
                   <ValidationTextField
                      className={"profileInfoFields"}
                      label="Address"
                      required
                      placeholder="123, Street, Region..."
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
                       name="To present" 
                       onChange={toggleChecked} 
                       value={!checked}
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
            <div className="special_box">
                <Controller
                    render={({onChange, value}) =>
                       <TextField
                         id="aboutMe__text"
                         label="About your job"
                         multiline
                         className="aboutMe__text"
                         rows={6}
                         name="aboutJob"
                         onChange={e => handleChange(e)}
                         value={experience.aboutJob}
                         placeholder="Brief description and responsibility you had in this position." 
                         defaultValue=""
                         variant="outlined"
                       />
                     }
                   name="aboutJob"
                   control={control}
                   rules= {{required: true}}
                 /> 
            </div>
            {projectInputList.map((pro, i) =>{
                return(
                    <div className="special_box2">
                        <Controller
                            render={({onChange, value}) =>
                               <TextField
                                 id="project__text"
                                 label={"Project"}
                                 multiline
                                 className="project__text"
                                 rows={3}
                                 name={"project"}
                                 onChange={e => handleChange(e)}
                                 placeholder="Project you worked" 
                                 defaultValue={pro.project}
                                 variant="outlined"
                               />
                             }
                           name={"project"}
                           control={control}
                           rules= {{required: true}}
                         /> 
                         <div className="button__box">
                             {projectInputList.length !==1 && 
                             <Fab size="small" color="secondary" aria-label="add" onClick={()=> handleRemoveProject(i) } className={classes.margin}>
                               <DeleteOutlineIcon/>
                             </Fab>
                             }
                             {projectInputList.length - 1 ===i && 
                             <Fab size="small" color="primary" aria-label="add" onClick={handleAddProject} className={classes.margin}>
                               <AddIcon/>
                             </Fab>
                             }
                         </div>
                    </div>
                )
            })}
            
            <button type="submit" className="btn btn-success btn-block">save</button>
        </form>}
        </div>
    )
}

export default ExperienceForm



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
