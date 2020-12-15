import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import "../../../styles/ProfileInformationForm.css"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import {saveProfileInfo, toggleProfileEdit} from "../../../stores/actions/profileInfoAction";
import Fab from '@material-ui/core/Fab';
const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    aboutMe: yup.string().required(),
  });

function ProfileInformationForm() {

  const dispatch = useDispatch();
  const { register, errors, handleSubmit } = useForm({resolver: yupResolver(schema)});

  const profileInfo  = useSelector(state => state.profileReducer.profileInfo);
 
  const [data, setData] = useState([]);
  const [isEdit, setIsEdit] = useState();

  const onSubmit = (e) => {
    dispatch(saveProfileInfo(profileInfo))
    e.target.reset();
  };
  const changeInputHandler = (e) =>{
     const {name, value} = e.target
     profileInfo[name] = value;
  }
  // const handleClickEdit = (e) =>{
  //     e.preventDefault();
  //     setIsEdit(true)
      
  // }
  

    return (
      <>
          {
                  <form className="profileInfo" onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" name={`firstName`} placeholder="First name" onChange={(e) =>changeInputHandler(e)} ref={register({required:true})} value={profileInfo.firstName}/>
                    <p className="error__message">{errors?.firstName?.message}</p>
                    <input type="text" name={`lastName`} placeholder="Last name" onChange={(e) =>changeInputHandler(e)}  ref={register({required:true})} value={profileInfo.lastName} />
                    <p className="error__message">{errors?.lastName?.message}</p>
                    <input type="text" name={`fatherName`} placeholder="Father's name" onChange={(e) =>changeInputHandler(e)}  ref={register} value={profileInfo.fatherName} />
                    <textarea name={`aboutMe`} onChange={(e) =>changeInputHandler(e)}cols="30" rows="8" ref={register({required:true})} value={profileInfo.aboutMe}/>
                    <p className="error__message">{errors?.aboutMe?.message}</p>
                    <button className="btn btn-success" type="submit">Save</button>
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
