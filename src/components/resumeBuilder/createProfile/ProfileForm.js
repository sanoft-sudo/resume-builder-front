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
const [postedData, setPostedData] = useState({});

  const {handleSubmit, register, control} = useForm();
  const dispatch = useDispatch();

  const profileInfo  = useSelector(state => state.profileReducer.profileInfo);
 
  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(saveProfileInfo(postedData))
    e.target.reset();
    setPostedData({})
}
const handleInputChange = (e)=>{
  const {name,value} = e.target
  postedData[name] =value;
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
                  <form className="profileInfo" onSubmit={onSubmit}>
                  <Controller
                          render={({onChange, value}) =>
                   <ValidationTextField
                      className={"profileInfoFields"}
                      label="First name"
                      required
                      placeholder="First name"
                      multiline
                      defaultValue=""
                      value={postedData.firstName}
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
                      defaultValue=""
                      onChange={e => handleInputChange(e)}
                      value={postedData.lastName}
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
                      defaultValue=""
                      onChange={e => handleInputChange(e)}
                      value={postedData.fatherName}
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
                      defaultValue=""
                      required
                      onChange={e => handleInputChange(e)}
                      value={postedData.currentJob}
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
                                label="About me"
                                multiline
                                className="aboutMe__text"
                                rows={6}
                                name="aboutMe"
                                defaultValue=""
                                onChange={e => handleInputChange(e)}
                                value={postedData.aboutMe}
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
