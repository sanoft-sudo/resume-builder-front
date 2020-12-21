/* eslint-disable no-use-before-define */
import React, {useState, useContext} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import {saveDrLicence} from "../../../stores/actions/drivingLAction";
import  "../../../styles/TechSkills2.css";
const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    "& > * + *": {
      marginTop: theme.spacing(3)
    }
  }
}));

export default function DrivingLicence() {
  const drLicences = useSelector(state => state.drivingLReducer.drLicences)
  const classes = useStyles();
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(null);
  const handleChange = (e, value) => {
    setSelected(value);
  };
  const onSubmit = (e)=>{
    e.preventDefault()
    dispatch(saveDrLicence(selected))
    setSelected(null)
  }
  console.log(selected);

  return (
    <div className={classes.root}>
        {drLicences&& drLicences.map(sel =>(
        <div className="tech__skillbox">
          <div className="tech__skillTitleBox">
              <h5 className="tech__skillTitle" id={sel.id}>CLASS | {sel.title}</h5>
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
        className="keySkills__autocomlete"
        multiple
        id="driving"
        options={CLASSES}
        getOptionLabel={(option) => option.title}
        defaultValue={[]}
        // value={[]}
        filterSelectedOptions
        onChange={(e, value) => handleChange(e, value)}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Select class"
            placeholder="B"
          />
        )}
      />
      <button type="submit" className="btn btn-success btn-block">save</button>
      </form>
     
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const CLASSES = [
  {
    id: "01",
    title: "A"
  },
  {
    id: "02",
    title: "B"
  },
  {
    id: "03",
    title: "C"
  },
  {
    id: "04",
    title: "D"
  },
  {
    id: "05",
    title: "E"
  },
  {
    id: "06",
    title: "B/C"
  }
];
