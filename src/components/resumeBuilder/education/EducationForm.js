import React from 'react';
import "../../../styles/EducationForm.css"
import { withStyles, makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";

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

const schema = yup.object().shape({
  phone: yup.string().required(),
  address: yup.string().required(),
  email: yup.string().required(),
  
});

const contact  = useSelector(state => state.contactReducer.contact);
  const dispatch = useDispatch();
  
 const onSubmit = (data, e) => {
      e.preventDefault();
    dispatch(saveContactInfo(data))
// console.log(" this is me", data);
    e.target.reset();
    
  };

function EducationForm() {

    const { register, errors, handleSubmit, control, formState } = useForm({resolver: yupResolver(schema)});


    return (
        <form className="educationForm" onSubmit = {handleSubmit(onSubmit)}>
            <Controller
                as={
                   <ValidationTextField
                      className={"profileInfoFields"}
                      label="Degree"
                      required
                      placeholder="Bachelor's"
                      multiline
                      variant="outlined"
                      id="degree"
                      name="degree"
                      ref={register({required: true })}
                    />
                  }
                name="degree"
                control={control}
                rules= {{required: true}}
            /> 
            <Controller
                as={
                   <ValidationTextField
                      className={"profileInfoFields"}
                      label="Major"
                      required
                      placeholder="Computer Science"
                      multiline
                      variant="outlined"
                      id="major"
                      name="major"
                      ref={register({required: true })}
                    />
                  }
                name="major"
                control={control}
                rules= {{required: true}}
            /> 
            <Controller
                as={
                   <ValidationTextField
                      className={"profileInfoFields"}
                      label="University"
                      required
                      placeholder="Harvard"
                      multiline
                      variant="outlined"
                      id="university"
                      name="university"
                      ref={register({required: true })}
                    />
                  }
                name="university"
                control={control}
                rules= {{required: true}}
            /> 
            <div className="study__years">
            <Controller
                as={
                   <ValidationTextField
                      className={"profileInfoFields"}
                      label="Start"
                      required
                      placeholder="2016"
                      multiline
                      variant="outlined"
                      id="startYear"
                      name="startYear"
                      ref={register({required: true })}
                    />
                  }
                name="startYear"
                control={control}
                rules= {{required: true}}
            /> 
            <span className="year__dash"> - </span>
            <Controller
                as={
                   <ValidationTextField
                      className={"profileInfoFields"}
                      label="End"
                      required
                      placeholder="2020"
                      multiline
                      variant="outlined"
                      id="endYear"
                      name="endYear"
                      ref={register({required: true })}
                    />
                  }
                name="university"
                control={control}
                rules= {{required: true}}
            /> 
            </div>
            <button className="btn btn-info">Save</button>
        </form>
    )
}

export default EducationForm
