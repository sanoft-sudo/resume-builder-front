import React, {useState, useContext} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {KeySkillsContext} from "../../../context/KeySkillsContext";
import TextField from '@material-ui/core/TextField';
import { Controller, useForm } from "react-hook-form";
import {saveKeySkills} from "../../../stores/actions/keySkillsAction";
import PropTypes from 'prop-types';
import Autocomplete from '@material-ui/lab/Autocomplete';
import NumberFormat from 'react-number-format';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { withStyles, makeStyles} from '@material-ui/core/styles';

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

function CreateKeySkills() {
    const dispatch = useDispatch();
    const keyskill = useSelector(state => state.keySkillsReducer.keyskillsList)
    const {keySkills} = useContext(KeySkillsContext);
    const classes = useStyles();
  const {control } = useForm();
    const [keySkill, setKeySkill] = useState([{key_skill: "", key_skill_rank: ""}]);
    const [selected, setSelected] = useState(null);
    const onSubmit = (e) => {
        e.preventDefault();
      dispatch(saveKeySkills(keySkill))
    };
  
    const handleRemoveKeySkill =(i)=>{
        let list = [...keySkill];
        list.splice(i, 1);
        setKeySkill(list);
    }
  
    const handleAddKeySkill =()=>{
        setKeySkill([...keySkill, {key_skill: "",  key_skill_rank: ""}]);
    }
      
      const handleChange = (e, i)=>{
      const {name,value} = e.target
      let list = [...keySkill];
      if(list[i].key_skill===""){
        list[i].key_skill = selected.name
        list[i].key_skill_rank=value
      }else{
          list[i][name] =value;
      }
      setKeySkill(list)
      }
    return (
        <div>
            <form onSubmit={onSubmit}>
            {keySkill.map((skill, i) =>{
                return(
                    <div className="special_box2">
                        <Controller
                            render={({onChange, value}) =>
                            <Autocomplete
                                valiant="outlined"
                                options={keySkills}
                                getOptionLabel={(option) => option.name}
                                id={"key_skill"+i}
                                name="key_skill"
                                value={selected}
                                defaultValue={selected}
                                onChange={((e, newValue)=>{
                                    setSelected(newValue)
                                })
                                }
                                renderInput={(params) => (
                                <TextField {...params} label="controlled" variant="outlined" margin="normal" />
                                )}
                            />
                            // <input
                            //     name="key_skill"
                            //     id={"key_skill"+i}
                            //     value={skill.key_skill}
                            //     onChange={e=>handleChange(e, i)}
                               
                            // />
                             }
                           name={"key_skill"}
                           control={control}
                           rules= {{required: true}}
                         /> 
                        <Controller
                            render={({onChange, value}) =>
                            <ValidationTextField
                                label="Skill rank"
                                className="profileInfoFields"
                                defaultValue={skill.key_skill_rank}
                                onChange={e=>handleChange(e,i)}
                                placeholder="from 1 to 100"
                                required
                                name="key_skill_rank"
                                variant="outlined"
                                multiline
                                // id={"key_skill_rank" +i}
                                InputProps={{
                                inputComponent: NumberFormatCustom,
                                }}
                            />
                            }
                            name="key_skill_rank"
                            control={control}
                            rules= {{required: true}}
                        /> 
                         <div className="button__box">
                             {keySkill.length !==1 && 
                             <Fab size="small" color="secondary" aria-label="add" onClick={()=> handleRemoveKeySkill(i) } className={classes.margin}>
                               <DeleteOutlineIcon/>
                             </Fab>
                             }
                             {keySkill.length - 1 ===i && 
                             <Fab size="small" color="primary" aria-label="add" onClick={handleAddKeySkill} className={classes.margin}>
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

export default CreateKeySkills



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