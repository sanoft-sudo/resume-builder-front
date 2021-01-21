import React, {useState} from 'react';
import MomentUtils from "@date-io/moment";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import moment from "moment";
import styled from "styled-components";
import "moment/locale/uz-latn";
import "moment/locale/ru";
import { uzUz, ruRu, enUS } from "@material-ui/core/locale";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles, makeStyles} from '@material-ui/core/styles';

const StyledWrapper = styled("div")``;

moment.locale("uz-latn");
moment.locale("ru");

const theme = createMuiTheme(
  {
    typography: {
      fontFamily: "Raleway"
    }
  },
  uzUz,
  ruRu,
  enUS
);
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function MyDatePicker(props) {
  // const [checked, setChecked] = useState(false); 
  const classes = useStyles();
  const {control } = useForm();
  var {startDate, disabled, endDate, handleChange1, handleChange2, handleCheck, checked} = props;
// const [startYear, setStartYear] = useState(Date.parse(new Date()));
// const [endYear, setEndYear] = useState(Date.parse(new Date()));

// const handleChange1 = (date) => {
//     setStartYear(date)
     
//   };
    
// const handleChange2 = (date) => {
//     setEndYear(date);
//   };
//   console.log("startDate>>>", startYear, "endDate>>>", endYear);

//   var daySt = moment(startYear).utc().year();
//   var dayEnd = moment(endYear).utc().year();

//   console.log("daySt>", daySt);
//   console.log("dayEn>", dayEnd);
// const handleCheck2 =(e)=>{
//   setChecked(e)
// }
console.log("ckecked>>>", checked);
    return (
        <div style={{ display: "flex" , marginBottom:"20px"}}>
        <ThemeProvider
          theme={theme}
          
        >
          <StyledWrapper style={{ marginRight: "5px" }}>
            <MuiPickersUtilsProvider
              utils={MomentUtils}
              libInstance={moment}
              locale={"uz-latn"}
              name="startDate"
            >
              <DatePicker
                onChange={(moment) => handleChange1(Date.parse(moment.format()))}
                hideTabs={false}
                variant={"dialog"}
                inputVariant="outlined"
                views={["year"]}
                value={startDate}
                cancelLabel={"Cancel"}
                disabled={disabled}
                name="startDate"
                okLabel={"OK"}
                label="Start year"
              />
            </MuiPickersUtilsProvider>
          </StyledWrapper>
          {!checked ? (
            <StyledWrapper style={{ marginLeft: "5px" }}>
                <MuiPickersUtilsProvider
                  utils={MomentUtils}
                  libInstance={moment}
                  locale={"uz-latn"}
                  name="endDate"
                  style={{ marginTop: "10px" }}
                >
                  <DatePicker
                    onChange={(moment) => handleChange2(Date.parse(moment.format()))}
                    hideTabs={false}
                    variant={"dialog"}
                    inputVariant="outlined"
                    views={["year"]}
                    value={endDate}
                    name="endDate"
                    disabled={disabled}
                    cancelLabel={"Cancel"}
                    okLabel={"OK"}
                    label="End year"
                  />
                </MuiPickersUtilsProvider>
            </StyledWrapper>
          ): ""}
          
        </ThemeProvider>
        <Controller
                render={({onChange, value}) =>
                   <FormGroup>
                   <FormControlLabel
                       control={<Switch checked={checked} color="primary" 
                       name="toPresent" 
                       onChange={(e)=>handleCheck(!checked)} 
                       value={checked}
                       disabled={disabled}
                       />}
                       label={checked? "To present" : ""}
                   />
                   </FormGroup>
                   }
                   name="toPresent"
                   control={control}
            />
      </div>
    )
}

export default MyDatePicker
