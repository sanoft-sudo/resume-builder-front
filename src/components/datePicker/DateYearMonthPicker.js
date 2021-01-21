import React, {useState} from 'react';
import MomentUtils from "@date-io/moment";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import moment from "moment";
import styled from "styled-components";
import "moment/locale/uz-latn";
import "moment/locale/ru";
import { uzUz, ruRu, enUS } from "@material-ui/core/locale";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

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

function DateYearMonthPicker(props) {
  var {selectedDate, handleChange1} = props;
//   const initialDate = Date.parse(new Date());
//   const [birthday, setBirthday] = useState(initialDate)

//   const handleChange1 =(date)=>{
//       setBirthday(date)
//   }
//   console.log("BIRTHDAY>>>", birthday);
    return (
        <div style={{ width:"100%" }}>
        <ThemeProvider
          theme={theme}
        >
          <StyledWrapper style={{width:"100%", marginBottom:"25px" }}>
            <MuiPickersUtilsProvider
              utils={MomentUtils}
              libInstance={moment}
              locale={"uz-latn"}
              name="year"
            >  
            <DatePicker
                disableFuture
                inputVariant="outlined"
                openTo="year"
                format="DD/MM/yyyy"
                label="Select date"
                views={["year", "month", "date"]}
                value={selectedDate}
                onChange={(moment) => handleChange1(Date.parse(moment.format()))}
            />
            </MuiPickersUtilsProvider>
          </StyledWrapper>
        </ThemeProvider>
        
      </div>
    )
}

export default DateYearMonthPicker
