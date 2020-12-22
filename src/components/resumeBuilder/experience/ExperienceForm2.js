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
  const initialDate={
    endYear: '',
    startYear:'',
  }
  const [values, setValues] = useState(initialDate);
  const [projectInputList, setProjectInputList] = useState([{project: ""}]);
  const initialState = {
    jobTitle:"",
    companyName:"",
    address:"",
    startYear:"",
    endYear:"",
    aboutJob:"",
    projects:[{project:""}]
  }
  const [expr, setExpr] = useState(
     initialState
  )
  const classes = useStyles();
  const {control } = useForm();
  const experience  = useSelector(state => state.experienceReducer.experience);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
      e.preventDefault();
    dispatch(saveExperience(expr))
    // setValues({ endYear: '',
    // startYear:''})
    setChecked(false)
    setExpr(initialState)
    setValues(initialDate)
    e.target.reset()
  };

  const toggleChecked = (e) => {
    setChecked((prev) => !prev);
    console.log(e.target.value);
  };

  const handleRemoveProject =(e,proI)=>{
      e.preventDefault()
      setExpr((prev) =>{
           let temp= { ...prev, projects:[...prev.projects]}
    temp.projects.splice(proI,1)
    return temp
      })
   
   
  }

  const handleAddProject =(e)=>{
      e.preventDefault()
      setExpr((prev)=>{
        let temp= { ...prev, projects:[...prev.projects, {project:""}]}
        return temp
      })
  } 

//   const handleProject = (e,proI)=>{
//       const {name, value} = e.target.value
//     setProjectInputList(prevState =>{
//         let projects = [...prevState];
//         projects[i] = {...projects[i], [name]:value}
//         return {projects}
//     })
//   }
  console.log("aaa>>>", expr);
    
    const handleChange =(e) =>{
        setValues({
            ...values,
            [e.target.name]: e.target.value,
          });
          setExpr({
            ...expr,
            ...{[e.target.name]: e.target.value}
          }) 
    }  
    const handleProjectChange = (e, proI)=>{
    const {name, value} = e.target
      setExpr((prev)=>{
          let temp= { ...prev, projects:[...prev.projects]}
          temp.projects[proI][name]=value
          return temp
      })
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
                      value={expr.jobTitle}
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
                      value={expr.companyName}
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
                      value={expr.address}
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
                      onChange={e=>handleChange(e)}
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
                    onChange={e=>handleChange(e)}
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
                         value={expr.aboutJob}
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
            {expr.projects&& expr.projects.map((pro, proI) =>{
                console.log("projectInputList", projectInputList);
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
                                 onChange={(e) => handleProjectChange(e,proI)}
                                 placeholder="Project you worked" 
                                //  defaultValue={pro.project}
                                 variant="outlined"
                               />
                             }
                           name={"project"}
                           control={control}
                           rules= {{required: true}}
                         /> 
                         <div className="button__box">
                             {expr.projects.length !==1 && 
                             <Fab size="small" color="secondary" aria-label="add" onClick={(e)=> handleRemoveProject(e, proI) } className={classes.margin}>
                               <DeleteOutlineIcon/>
                             </Fab>
                             }
                             {expr.projects.length - 1 ===proI && 
                             <Fab size="small" color="primary" aria-label="add" onClick={e=>handleAddProject(e)} className={classes.margin}>
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