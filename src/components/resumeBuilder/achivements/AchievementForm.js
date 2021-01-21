import React, {useState} from 'react';
import "../../../styles/EducationForm.css"
import { withStyles, makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Controller, useForm } from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {saveAchievement} from "../../../stores/actions/achievementsAction";
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import Fab from '@material-ui/core/Fab';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import SingleYearPicker from "../../datePicker/SingleYearPicker";
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

function AchievementForm() {

  const classes = useStyles();
  const {control } = useForm();
  const achievements  = useSelector(state => state.achievementsReducer.achievements);
  const dispatch = useDispatch();
  const [achievementsArr, setAchievementsArr] =useState({})
  var initialDate = Date.parse(new Date());
  const [selectedYear, setSelectedYear] = useState(initialDate)

  const onSubmit = (e) => {
      e.preventDefault();
    dispatch(saveAchievement(achievementsArr))
    setAchievementsArr({})
    e.target.reset()
  };

  const handleChange = (e)=>{
    // const {name,value} = e.target
     setAchievementsArr(prev => ({...prev, ...{
       [e.target.name] : e.target.value
     }}))
    }
    const handleChange1 = (date) => {
      setSelectedYear(date)
      setAchievementsArr({
        ...achievementsArr,
        ...{selectedYear:date}
      })
    };

    return (
      <div className="technical__skillsContainer">
        <div className="achievement__boxContainer">
            {achievements && 
            achievements.map((achievement, index)=>(
            <div className="achievement__box" key={index}>
              <div className="achievement_boxInfo">
                  <h5 className="tech__skillTitle">{achievement.achievement}</h5>
                  <p className="achievement__address">{achievement.organizationName} / {achievement.organizationName}</p>
                  <p className="achievement__address">{achievement.startYear}</p>
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
                      label="Achievement"
                      required
                      placeholder="IELTS Score 7.5..."
                      multiline
                      onChange={e => handleChange(e)}
                      variant="outlined"
                      id="achievement"
                      name="achievement"
                    />
                  }
                name="achievement"
                control={control}
                rules= {{required: true}}
            /> 
            <Controller
                render={({onChange, value}) =>
                   <ValidationTextField
                      className={"profileInfoFields"}
                      label="Organization"
                      required
                      placeholder="British Council"
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
            <SingleYearPicker takenYear={selectedYear} handleChange1={handleChange1} />
            </div>
            <button type="submit" className="btn btn-success btn-block">save</button>
        </form>}
        </div>
    )
}

export default AchievementForm



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
