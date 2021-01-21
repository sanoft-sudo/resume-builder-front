import React from 'react';
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

function SingleYearPicker(props) {
  var {takenYear, handleChange1} = props;

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
                onChange={(moment) => handleChange1(Date.parse(moment.format()))}
                hideTabs={false}
                variant={"dialog"}
                inputVariant="outlined"
                views={["year"]}
                value={takenYear}
                cancelLabel={"Cancel"}
                name="year"
                okLabel={"OK"}
                label="Year"
              />
            </MuiPickersUtilsProvider>
          </StyledWrapper>
        </ThemeProvider>
        
      </div>
    )
}

export default SingleYearPicker
