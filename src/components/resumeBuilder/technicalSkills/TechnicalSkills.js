import React, {useState, useContext} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {TechnicalSkillsContext} from "../../../context/TechnicalSkillsContext";
import TextField from '@material-ui/core/TextField';
import { Controller, useForm } from "react-hook-form";
import PropTypes from 'prop-types';
import Autocomplete from '@material-ui/lab/Autocomplete';
import NumberFormat from 'react-number-format';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { withStyles, makeStyles} from '@material-ui/core/styles';
import {saveTechSkills} from "../../../stores/actions/technicalSkillsAction";

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

function TechnicalSkills() {
    const dispatch = useDispatch();
    const techskills = useSelector(state => state.technicalSkillsReducer.techSkillsList)
    const {technicalSkills} = useContext(TechnicalSkillsContext);
    console.log("tech---->", technicalSkills);
    const classes = useStyles();
  const {control } = useForm();
    const [techSkill, setTechSkill] = useState([{tech_skill: "", tech_skill_rank: ""}]);
    const [selected, setSelected] = useState(null);
    console.log("selected>>>>", selected);
    const onSubmit = (e) => {
        e.preventDefault();
      dispatch(saveTechSkills(techSkill))
    };
  
    const handleRemoveTechSkill =(i)=>{
        let list = [...techSkill];
        list.splice(i, 1);
        setTechSkill(list);
    }
  
    const handleAddTechSkill =()=>{
        setTechSkill([...techSkill, {tech_skill: "",  tech_skill_rank: ""}]);
    }
      
      const handleChange = (e, i)=>{
      const {name,value} = e.target
      let list = [...techSkill];
      if(list[i].tech_skill===""){
        list[i].tech_skill = selected.title
        list[i].tech_skill_rank=value
      }else{
          list[i][name] =value;
      }
      setTechSkill(list)
      }
    return (
        <div>
          <div>
            {techSkill.length!==0 &&
            techSkill.map((sk, i) =>(
               <div className="card">
                  <h5>{sk.tech_skill + sk.tech_skill_rank}%</h5>
                  <button>e</button><button>d</button>
              </div>
            ))
            }
           
          </div>
            <form onSubmit={onSubmit}>
            {techSkill.map((skill, i) =>{
                return(
                    <div className="special_box2">
                        <Controller
                            render={({onChange, value}) =>
                            <Autocomplete
                                valiant="outlined"
                                options={technicalSkills}
                                getOptionLabel={(option) => option.title}
                                id={"tech_skill"+i}
                                name={"tech_skill"+i}
                                value={selected}
                                onChange={((e, newValue)=>{
                                    setSelected(newValue)
                                })
                                }
                                renderInput={(params) => (
                                <TextField {...params} label="controlled" variant="outlined" margin="normal" />
                                )}
                            />
                            }
                            name={"tech_skill"+i}
                           control={control}
                           rules= {{required: true}}
                         /> 
                        <Controller
                            render={({onChange, value}) =>
                            <ValidationTextField
                                label="Technical skill rank"
                                className="profileInfoFields"
                                defaultValue={skill.tech_skill_rank}
                                onChange={e=>handleChange(e,i)}
                                placeholder="from 1 to 100"
                                required
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
                         <div className="button__box">
                             {techSkill.length !==1 && 
                             <Fab size="small" color="secondary" aria-label="add" onClick={()=> handleRemoveTechSkill(i) } className={classes.margin}>
                               <DeleteOutlineIcon/>
                             </Fab>
                             }
                             {techSkill.length - 1 ===i && 
                             <Fab size="small" color="primary" aria-label="add" onClick={handleAddTechSkill} className={classes.margin}>
                               <AddIcon/>
                             </Fab>
                             }
                         </div>
                    </div>
                )
            })}
            
            <button type="submit" className="btn btn-success btn-block">save</button>
            </form>
            
        </div>
    )
}

export default TechnicalSkills



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