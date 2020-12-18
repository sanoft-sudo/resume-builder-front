import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const ValidationTextField = withStyles({
  root: {
    // '& input:valid + fieldset': {
    //   borderColor: '#00ba5a',
    //   borderWidth: 2,
    // },
    '& input:invalid + fieldset': {
      borderColor: 'ff1100',
      borderWidth: 2,
    },
    // '& input:valid:focus + fieldset': {
    //   borderLeftWidth: 6,
    //   padding: '4px !important', 
    // },
  },
})(TextField);


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

export default function FormattedInput() {
  const [values, setValues] = React.useState({
    endYear: '',
    startYear:'',
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
      <ValidationTextField
        label="End year"
        className="profileInfoFields"
        value={values.endYear}
        onChange={handleChange}
        placeholder="2021"
        name="endYear"
        variant="outlined"
        multiline
        id="formatted-numberformat-input"
        InputProps={{
          inputComponent: NumberFormatCustom,
        }}
      />
  );
}
