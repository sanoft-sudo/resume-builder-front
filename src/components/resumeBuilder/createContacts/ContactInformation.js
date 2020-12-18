import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'
import { withStyles, makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import isEmail from "validator/lib/isEmail";
import { saveContactInfo } from '../../../stores/actions/contactInfoAction';
import "../../../styles/ProfileInformationForm.css"
import Button from '@material-ui/core/Button';

const schema = yup.object().shape({
  phone: yup.string().required(),
  address: yup.string().required(),
  email: yup.string().required(),
  
});
function ContactInformation() {

    const { register, errors, handleSubmit, control, formState } = useForm({resolver: yupResolver(schema)});
 
    const [phone, setPhone] =useState();
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
    const contact  = useSelector(state => state.contactReducer.contact);
      const dispatch = useDispatch();
      
    const onSubmit = (data, e) => {
          e.preventDefault();
        dispatch(saveContactInfo(data))
    // console.log(" this is me", data);
        e.target.reset();
        
        setPhone("")
      };

    return (
      <>
          {
                  <form className="contactInfo" onSubmit={handleSubmit(onSubmit)}>
                      <Controller
                          as={
                              <PhoneInput
                                  inputProps={{
                                  name: 'phone',
                                  required: true,
                                  autoFocus: true
                                  }}
                                  country={'uz'}
                                  value={phone}
                                  onChange={()=> setPhone(phone)}
                                  ref={register({
                                    required: true
                                })}
                              /> }
                            name="phone"
                            control={control}
                            rules= {{required: true}}
                      /> 
                      <Controller
                          as={
                                <ValidationTextField
                                  className={"profileInfoFields"}
                                  label="Email"
                                  required
                                  placeholder="Email"
                                  multiline
                                  variant="outlined"
                                  id="email"
                                  name="email"
                                  ref={register({
                                    required: true,
                                    validate: (input) => isEmail(input),
                                })}
                                />
                              }
                              name="email"
                              control={control}
                              rules= {{required: true}}
                        /> 
                      <Controller
                          as={
                                <ValidationTextField
                                   className={"profileInfoFields"}
                                   label="Address"
                                   required
                                   placeholder="Address"
                                   multiline
                                   variant="outlined"
                                   id="address"
                                   name="address"
                                 />
                              }
                        name="address"
                        control={control}
                        rules= {{required: true}}
                      /> 


                    <p className="error__message">{errors?.address?.message}</p>
                    <Controller
                          as={
                                <ValidationTextField
                                   className={"profileInfoFields"}
                                   label="Linked In"
                                   placeholder="linkedIn"
                                   multiline
                                   variant="outlined"
                                   id="linkedIn"
                                   name="linkedIn"
                                 />
                            }
                       name="linkedIn"
                       control={control}
                       rules= {{required: false}}
                      /> 

                    <Controller
                          as={
                                <ValidationTextField
                                   className={"profileInfoFields"}
                                   label="Telegram"
                                   placeholder="Telegram"
                                   multiline
                                   variant="outlined"
                                   id="telegram"
                                   name="telegram"
                                 />
                            }
                     name="telegram"
                     control={control}
                     rules= {{required: false}}
                     /> 
                    <Controller
                          as={
                                <ValidationTextField
                                   className={"profileInfoFields"}
                                   label="Facebook"
                                   placeholder="Facebook"
                                   multiline
                                   variant="outlined"
                                   id="facebook"
                                   name="facebook"
                                 />
                            }
                      name="facebook"
                      control={control}
                      rules= {{required: false}}
                      /> 

                    <Controller
                          as={
                                <ValidationTextField
                                   className={"profileInfoFields"}
                                   label="Instagram"
                                   placeholder="Instagram"
                                   multiline
                                   variant="outlined"
                                   id="instagram"
                                   name="instagram"
                                 />
                            }
                      name="instagram"
                      control={control}
                      rules= {{required: false}}
                      /> 
                       
                    {/* <button type="submit" className="btn btn-success">save</button> */}
                    <button type="submit" className="btn btn-success btn-block">save</button>
                </form>            
          
        }
        </>       
           
    )
}

export default ContactInformation
