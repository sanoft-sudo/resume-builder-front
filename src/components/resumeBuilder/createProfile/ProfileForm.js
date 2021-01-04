import React, {useState} from 'react';
import "../../../styles/ProfileInformationForm.css"
import {useDispatch, useSelector} from "react-redux";
import {deleteProfileInfo, getProfileInfo, saveProfileInfo,} from "../../../stores/actions/profileInfoAction";
import { withStyles, makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Controller, useForm } from "react-hook-form";
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const ValidationTextField = withStyles({
  root: {
    '& input:valid + fieldset': {
      borderColor: '#00ba5a',
      borderWidth: 2,
    },
    '& input:invalid + fieldset': {
      borderColor: 'ff1100',
      borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 6,
      padding: '4px !important', // override inline-style
    },
  },
})(TextField);


function ProfileInformationForm() {

  const {handleSubmit, register, control} = useForm();
  const dispatch = useDispatch();

  const profileInfo  = useSelector(state => state.profileReducer.profileInfo);
  console.log("myprofile", profileInfo);
  const initialValue = {
    firstName:"",
    lastName:"",
    fatherName:"",
    aboutMe:"",
    currentJob:""
  }
  const [ fromFields, setFormFields] = useState({})
 
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
  }));
  const classes = useStyles();

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(saveProfileInfo(profileInfo))
    e.target.reset();
    setFormFields(initialValue)
}
const handleInputChange = (e)=>{
  const {name,value} = e.target
  profileInfo[name] =value;
  profileInfo.id =Date.now().toString()
}

  const handleRemoveTechSkill =(e, id)=>{
    e.preventDefault()
    console.log("ID", id);
    dispatch(deleteProfileInfo(id))
  }
  const handleEditTechSkill =(e,id)=>{
    e.preventDefault()
    dispatch(getProfileInfo(id))
    setFormFields(profileInfo)
   }

    return (
      <div className="profile__container">
        {profileInfo.firstName &&
        <div className="profile__header">
            <div className="profile__titleBox">
                        <h5 className="profile__title">{profileInfo?.firstName +" "+ profileInfo?.lastName}</h5>
                   </div>
                  <div className="profile__buttons">
                    <Fab size="small" color="primary" aria-label="edit" onClick={e=>handleEditTechSkill(e, profileInfo?.id)}  className={classes.margin}>
                        <EditIcon className="profile__edit"/>
                    </Fab>
                    <Fab size="small" color="secondary" aria-label="delete" onClick={e=>handleRemoveTechSkill(e, profileInfo?.id)} className={classes.margin}>
                        <DeleteOutlineIcon className="profile__delete"/>
                    </Fab>
              </div>
        </div>
        
        }
        
    
                  <form className="profileInfo" onSubmit={onSubmit}>
                  <Controller
                          render={({onChange, value}) =>
                   <ValidationTextField
                      className={"profileInfoFields"}
                      label="First name"
                      required
                      placeholder="First name"
                      multiline
                      // defaultValue={fromFields.firstName}
                      value={fromFields.firstName}
                      onChange={e => handleInputChange(e)}
                      variant="outlined"
                      id="firstName"
                      name="firstName"
                    />
                  }
                  name="firstName"
                  control={control}
                  rules= {{required: true}}
                  /> 
                    <Controller
                      render={({onChange, value}) =>
                   <ValidationTextField
                      className={"profileInfoFields"}
                      label="Last name"
                      required
                      placeholder="Last name"
                      multiline
                      // defaultValue={fromFields.lastName}
                      onChange={e => handleInputChange(e)}
                      value={fromFields.lastName}
                      variant="outlined"
                      ref={register({ required:true})}
                      id="lastName"
                      name="lastName"
                    />
                    }
                                name="lastName"
                                control={control}
                                rules= {{required: true}}
                                /> 
                    <Controller
                       render={({onChange, value}) =>
                   <ValidationTextField
                      className={"profileInfoFields"}
                      label="Father name"
                      placeholder="Father name"
                      multiline
                      // defaultValue=""
                      onChange={e => handleInputChange(e)}
                      value={fromFields.fatherName}
                      variant="outlined"
                      name="fatherName"
                      id="fatherName"
                    />
                    }
                                name="fatherName"
                                control={control}
                                rules= {{required: false}}
                                /> 
                    <Controller
                         render={({onChange, value}) =>
                   <ValidationTextField
                      className={"profileInfoFields"}
                      label="Current Job"
                      placeholder="Accontant"
                      multiline
                      // defaultValue=""
                      required
                      onChange={e => handleInputChange(e)}
                      value={fromFields.currentJob}
                      variant="outlined"
                      id="currentJob"
                      name="currentJob"
                    />
                    }
                                name="currentJob"
                                control={control}
                                rules= {{required: true}}
                                /> 
                    <div className="special_box">
                       <Controller
                            render={({onChange, value}) =>
                              <TextField
                                id="aboutMe__text"
                                label="About me *"
                                multiline
                                className="aboutMe__text"
                                rows={6}
                                name="aboutMe"
                                // defaultValue=""
                                onChange={e => handleInputChange(e)}
                                value={fromFields.aboutMe}
                                placeholder="Describe your professinal career" 
                                variant="outlined"
                              />
                            }
                          name="aboutMe"
                          control={control}
                          rules= {{required: true}}
                        /> 
                    </div>
                    <button type="submit" className="btn btn-success btn-block">save</button>
                </form>
        </div>       
           
    )
}

export default ProfileInformationForm
