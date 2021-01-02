import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {useDispatch, useSelector} from "react-redux";
import { Controller, useForm } from "react-hook-form";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles, makeStyles} from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import { useTranslation } from "react-i18next";
import "../../../styles/LanguageForm.css";
import { getLanguagEN, getLanguagRU, getLanguagUZ, saveLanguage } from '../../../stores/actions/languagesAction';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  


function LanguageForm()  {

    const { t, i18n } = useTranslation();
const languagesList = useSelector(state => state.languagesReducer.languagesList)
const languageUZ = useSelector(state => state.languagesReducer.languageUZ)
const languageRU = useSelector(state => state.languagesReducer.languageRU)
const languageEN = useSelector(state => state.languagesReducer.languageEN)
const dispatch = useDispatch();
const classes = useStyles();
const {control } = useForm();
const [selectedLanguage, setSelectedLanguage] = useState(null);
const [selectedLevel, setSelectedLevel] = useState();
const [language, setLanguage] = useState({});

useEffect(() => {
    dispatch(getLanguagUZ())
    
}, [])
useEffect(() => {
    dispatch(getLanguagRU())
}, [])
useEffect(() => {
    dispatch(getLanguagEN())
}, [])

console.log("selected Language>>>", selectedLanguage);
console.log("selected  level", selectedLevel);

const handleChange = (e) =>{
    console.log("onchange>>>", e.target.value);
    const {name,value} = e.target
     
    language.name = selectedLanguage.name
    language.level=value
      setLanguage(language)
      
}
const onSubmit = (e) =>{
    e.preventDefault()
    dispatch(saveLanguage(language))
    e.target.reset()
    setSelectedLanguage(null)
    setSelectedLevel("")
    setLanguage({})
}
    return (
        <div className="language__formContainer">
            <div className="languages__list">
                {languagesList &&
                languagesList.map((lan, i) =>(
                <div className="tech__skillbox" key={i}>
                    <div className="tech__skillTitleBox">
                            <h5 className="tech__skillTitle">{lan.name!=="" && lan.name +" | "+ lan.level} </h5>
                    </div>
                    <div className="tech_skillButtons">
                        <Fab size="small" color="primary" aria-label="edit"  className={classes.margin}>
                            <EditIcon className="tech__skillEdit"/>
                        </Fab>
                        <Fab size="small" color="secondary" aria-label="delete" className={classes.margin}>
                            <DeleteOutlineIcon className="tech__skillDelete"/>
                        </Fab>
                    </div>
                    
                </div>
                ))
                }
           
            </div>
            <form className="language__form" onSubmit={onSubmit}>
                <div className="language__box">
                    <Controller
                        render = {({onChange, value}) =>
                            <Autocomplete
                                valiant="outlined"
                                options={i18n.language==="uz" ? languageUZ : i18n.language==="ru" ? languageRU : languageEN}
                                className="language__autocomlete"
                                getOptionLabel={(option) => option.name}
                                id={"language"}
                                required
                                name={"language"}
                                value={selectedLanguage}
                                onChange={((e, newValue)=>{
                                    setSelectedLanguage(newValue)
                                })
                                }
                                renderInput={(params) => (
                                <TextField {...params} label={t("autocomplete_language")} variant="outlined" margin="normal" />
                                )}
                            />
                        }
                    name="language"
                    control={control}
                    rules= {{required: true}}
                    /> 

                    <Controller
                    render={({onChange, value}) =>
                        <FormControl variant="outlined" className={classes.formControl, "language__autocomlete"}>
                            <InputLabel htmlFor="outlined-age-native-simple">{t("autocomplete_languageLevel")}</InputLabel>
                            <Select
                            native
                            onChange={(e) => handleChange(e)}
                            label={t("autocomplete_languageLevel")}
                            inputProps={{
                                name: 'language_level',
                                id: 'language_level',
                            }}
                            >
                            <option aria-label="None" value="" />
                            <option value={t("languageLevel_option1")}>{t("languageLevel_option1")}</option>
                            <option value={t("languageLevel_option2")}>{t("languageLevel_option2")}</option>
                            <option value={t("languageLevel_option3")}>{t("languageLevel_option3")}</option>
                            </Select>
                        </FormControl>
                    }
                    name="language_level"
                    control={control}
                    rules= {{required: true}}
                    /> 
      
                </div>
                <button className="btn btn-success btn block" type="submit">{t("add_language")}</button>
            </form>
        </div>
            
            
    )
}

export default LanguageForm
