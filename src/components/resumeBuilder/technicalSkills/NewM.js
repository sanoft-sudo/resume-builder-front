import React, {useState, useContext} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {TechnicalSkillsContext} from "../../../context/TechnicalSkillsContext";
import TextField from '@material-ui/core/TextField';
import { Controller, useForm } from "react-hook-form";
import PropTypes from 'prop-types';
import Autocomplete from '@material-ui/lab/Autocomplete';
import NumberFormat from 'react-number-format';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { withStyles, makeStyles} from '@material-ui/core/styles';
import {deleteTechSkill, saveTechSkills, getSelectedTechSkill, editTechSkill} from "../../../stores/actions/technicalSkillsAction";
import  "../../../styles/TechSkills2.css";

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

function TechSkills2() {
    const dispatch = useDispatch();
    const techskills = useSelector(state => state.technicalSkillsReducer.techSkillsList)
    const selectedTechSkill = useSelector(state => state.technicalSkillsReducer.selectedTechSkill)
    console.log("this is I select",selectedTechSkill);

    const {technicalSkills} = useContext(TechnicalSkillsContext);

  const classes = useStyles();
  const {control,reset } = useForm();

  const initialState = {
    id:"",
    tech_skill:"",
    tech_skill_rank:""
  }
    const [techSkill, setTechSkill] = useState(initialState);
    const [selected, setSelected] = useState("");
    const [editClicked, setEditClicked] = useState(false)

console.log("TECHSKILL", techSkill);



    const onSubmit = (e) => {
      e.preventDefault(); 
      if(techSkill.id===""){
        dispatch(saveTechSkills({...techSkill, ...{id:Date.now()}}))
      }else{
        dispatch(editTechSkill(techSkill))
      }      
      
     e.target.reset();
     setSelected("")
      setTechSkill(initialState)
    };
  
    const handleRemoveTechSkill =(e, i)=>{
      e.preventDefault()
      dispatch(deleteTechSkill(i))
    }
    const handleEditTechSkill =(e,id)=>{
      e.preventDefault()
      setEditClicked(!editClicked)
      dispatch(getSelectedTechSkill(id))
     let selFromReducer = selectedTechSkill?.tech_skill
technicalSkills.map(item =>(
  item.title===selFromReducer? setSelected(item) : ""
))
      setTechSkill(selectedTechSkill)
      // setTechSkill({tech_skill: selectedTechSkill.setech_skill, tech_skill_rank: selectedTechSkill.tech_skill_rank}
    // )
    }

      const handleChange = (e)=>{
      const {name,value} = e.target
      setTechSkill({...techSkill, ...{tech_skill: selected?.title, tech_skill_rank:value}})
      }
      
    return (
        <div className="technical__skillsContainer">
          <div className="technical__skillsHeader">
            {techskills.length!==0 &&
            techskills.map((sk, i) =>(
               <div className="tech__skillbox">
                   <div className="tech__skillTitleBox">
                        <h5 className="tech__skillTitle">{sk.tech_skill +" "+ sk.tech_skill_rank} %</h5>
                   </div>
                  <div className="tech_skillButtons">
                    <Fab size="small" color="primary" aria-label="edit" onClick={e=>handleEditTechSkill(e, sk.id)}  className={classes.margin}>
                        <EditIcon className="tech__skillEdit"/>
                    </Fab>
                    <Fab size="small" color="secondary" aria-label="delete" onClick={e=>handleRemoveTechSkill(e, i)} className={classes.margin}>
                        <DeleteOutlineIcon className="tech__skillDelete"/>
                    </Fab>
                  </div>
                  
              </div>
            ))
            }
           
          </div>
            <form className="technical__skillsForm" onSubmit={onSubmit} id="tech_skillsForm" >
                    <div className="special_box2">
                        <Controller
                            render={({onChange, value}) =>
                            <Autocomplete
                                valiant="outlined"
                                options={technicalSkills}
                                className="tech__skillsInput"
                                getOptionLabel={(option) => option.title}
                                id={"tech_skill"}
                                required
                                name={"tech_skill"}
                                defaultValue={techSkill?.tech_skill}
                                value={selected}
                                onChange={((e, newValue)=>{
                                    setSelected(newValue)
                                })
                                }
                                renderInput={(params) => (
                                <TextField {...params} label="Technical Skill" variant="outlined" margin="normal" />
                                )}
                            />
                            }
                            name={"tech_skill"}
                           control={control}
                           rules= {{required: true}}
                           defaultValue={""}
                         /> 
                        <Controller
                            render={({onChange, value}) =>
                            <ValidationTextField
                                label="Technical skill rank"
                                className="tech__skillsInput"
                                id="tech_rank"
                                defaultValue={""}
                                onChange={(e=>handleChange(e))}
                                placeholder="from 1 to 100"
                                required
                                value={techSkill?.tech_skill_rank}
                                name="tech_skill_rank"
                                variant="outlined"
                                multiline
                                InputProps={{
                                inputComponent: NumberFormatCustom,
                                }}
                            />
                            }
                            name="tech_skill_rank"
                            control={control}
                            rules= {{required: true}}
                        /> 
                    </div>
            <button type="submit" className="btn btn-success btn-block mt-3">save</button>
            </form>
            
        </div>
    )
}

export default TechSkills2



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