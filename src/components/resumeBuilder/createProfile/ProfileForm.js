import React, {useState} from 'react';
import "../../../styles/ProfileInformationForm.css"
import {useDispatch, useSelector} from "react-redux";
import {saveProfileInfo,} from "../../../stores/actions/profileInfoAction";
import { withStyles, makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Controller, useForm } from "react-hook-form";
import Button from '@material-ui/core/Button';

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
const [postedData, setPostedData] = useState();

  const {handleSubmit, register, control} = useForm();
  const dispatch = useDispatch();

  const profileInfo  = useSelector(state => state.profileReducer.profileInfo);
 
  const onSubmit = (data, e) => {
    dispatch(saveProfileInfo(data))
    setPostedData(data);
    e.target.reset();
}
const handleInputChange = (e)=>{
  console.log(e.target.value);
}
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

    return (
      <>
          {
                  <form className="profileInfo" onSubmit={handleSubmit(onSubmit)}>
                  <Controller
                                    as={
                   <ValidationTextField
                      className={"profileInfoFields"}
                      label="First name"
                      required
                      placeholder="First name"
                      multiline
                      value={profileInfo.firstName}
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
                                    as={
                   <ValidationTextField
                      className={"profileInfoFields"}
                      label="Last name"
                      required
                      placeholder="Last name"
                      multiline
                      onChange={e => handleInputChange(e)}
                      value={profileInfo.lastName}
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
                                    as={
                   <ValidationTextField
                      className={"profileInfoFields"}
                      label="Father name"
                      placeholder="Father name"
                      multiline
                      onChange={e => handleInputChange(e)}
                      value={profileInfo.fatherName}
                      variant="outlined"
                      id="fatherName"
                    />
                    }
                                name="fatherName"
                                control={control}
                                rules= {{required: false}}
                                /> 
                    <Controller
                                    as={
                   <ValidationTextField
                      className={"profileInfoFields"}
                      label="Current Job"
                      placeholder="Accontant"
                      multiline
                      required
                      onChange={e => handleInputChange(e)}
                      value={profileInfo.fatherName}
                      variant="outlined"
                      id="currentJob"
                    />
                    }
                                name="fatherName"
                                control={control}
                                rules= {{required: true}}
                                /> 
                    <div className="special_box">
                       <Controller
                            as={
                              <TextField
                                id="aboutMe__text"
                                label="About me"
                                multiline
                                className="aboutMe__text"
                                rows={6}
                                name="aboutMe"
                                onChange={e => handleInputChange(e)}
                                value={profileInfo.aboutMe}
                                placeholder="Describe your professinal career" 
                                defaultValue=""
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
                  // <div className="editableProfileInfo">
                  //   <div className="profileInfoEditableTitle">
                  //     <h3>{profileInfo?.firstName +' ' + profileInfo?.lastName} ...</h3>
                  //   </div>
                  //   <Fab size="small" color="default" aria-label="edit" onClick={handleClickEdit}>
                  //    <i className="fas fa-edit"></i>
                  //   </Fab>
                  // </div>
                
          
        }
        </>       
           
    )
}

export default ProfileInformationForm
