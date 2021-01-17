
import React, {useState, useEffect} from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import countries from "i18n-iso-countries";
import uzbek from "i18n-iso-countries/langs/uz.json";
import english from "i18n-iso-countries/langs/en.json";
import russian from "i18n-iso-countries/langs/ru.json";
import { useTranslation } from "react-i18next";
function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}
countries.registerLocale(uzbek);
countries.registerLocale(english);
countries.registerLocale(russian);
const uz = countries.getNames("uz", { select: "official" });
const ru = countries.getNames("ru", { select: "official" });
const en = countries.getNames("en", { select: "official" });

export default function AutocompleteCountry() {
const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState([]);

  useEffect(() => {
    if(i18n.language==="uz"){
        Object.keys(uz).forEach((key, i) => {
        if (key === "UZ") {
          count[i] = {
            id: key,
            name: "O'zbekiston"
          };
        } else {
          count[i] = {
            id: key,
            name: uz[key]
          };
        }
      });
    }else if(i18n.language==="ru"){
        Object.keys(ru).forEach((key, i) => {
              count[i] = {
                id: key,
                name: ru[key]
              };
    })
    }else{
        Object.keys(en).forEach((key, i) => {
            count[i] = {
              id: key,
              name: en[key]
            };
    })
    }
  }, [t, i18n])

  

  return (
    <div>
      <Autocomplete
        id="country"
        style={{ width: "100% ", marginBottom:"30px" }}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        getOptionSelected={(option, value) => option.name === value.name}
        getOptionLabel={(option) => option.name}
        options={count}
        renderInput={(params) => (
          <TextField
            {...params}
            label={t("autocomplete_country")}
            variant="outlined"
            InputProps={{
              ...params.InputProps
            }}
          />
        )}
      />
    </div>
  );
}
