/* eslint-disable no-use-before-define */
import React, {useState, useContext} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Chip from "@material-ui/core/Chip";
import {KeySkillsContext} from "../../../context/KeySkillsContext";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import {saveKeySkills} from "../../../stores/actions/keySkillsAction";
import  "../../../styles/TechSkills2.css";
const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    "& > * + *": {
      marginTop: theme.spacing(3)
    }
  }
}));

export default function KeySkillsSelect() {
  const keyskills = useSelector(state => state.keySkillsReducer.keyskillsList)
  const classes = useStyles();
  const dispatch = useDispatch();
  const {keySkills} = useContext(KeySkillsContext)
  const [selected, setSelected] = useState();
  const handleChange = (e, value) => {
    setSelected(value);
  };
  const onSubmit = (e)=>{
    e.preventDefault()
    dispatch(saveKeySkills(selected))
  }
  console.log(selected);

  return (
    <div className={classes.root}>
        {selected&& selected.map(sel =>(
        <div className="tech__skillbox">
        <div className="tech__skillTitleBox">
             <h5 className="tech__skillTitle" id={sel.id}>{sel.title}</h5>
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
      ))} 
      <form onSubmit={onSubmit}>
        <Autocomplete
        multiple
        id="tags-outlined"
        options={keySkills}
        getOptionLabel={(option) => option.title}
        defaultValue={[]}
        // value={[]}
        filterSelectedOptions
        onChange={(e, value) => handleChange(e, value)}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="filterSelectedOptions"
            placeholder="Favorites"
          />
        )}
      />
      <button type="submit" className="btn btn-success btn-block">save</button>
      </form>
     
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const jobList = [
  {
    id: "1001",
    title: "Front-end Developer"
  },
  {
    id: "1002",
    title: "Backend Developer"
  },
  {
    id: "1003",
    title: "Web Developer"
  },
  {
    id: "1004",
    title: "Software Developer"
  },
  {
    id: "1005",
    title: "Sales Assistant"
  },
  {
    id: "1006",
    title: "Web designer"
  },
  {
    id: "1007",
    title: "Acconutant"
  },
  {
    id: "1008",
    title: "Teacher"
  },
  {
    id: "1009",
    title: "Manager"
  },
  {
    id: "1010",
    title: "Cleaner"
  }
];
