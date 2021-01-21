import React, {useState, useRef, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {useDispatch, useSelector} from "react-redux";
import { Controller, useForm } from "react-hook-form";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles, makeStyles} from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { useTranslation } from "react-i18next";
import "../../../styles/LanguageForm.css";
import { getLanguagEN, getLanguagRU, getLanguagUZ, saveLanguage } from '../../../stores/actions/languagesAction';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Button from '@material-ui/core/Button';
import { saveObektivkaLanguages } from '../../../stores/actions/obektivkaLanguageAction';
import "date-fns";
function ObektivkaLanguages() {
    
    const formRef = useRef();
    const { t, i18n } = useTranslation();
    const languages = useSelector(state => state.obektivkaLanguageReducer.languages)
    const languageUZ = useSelector(state => state.languagesReducer.languageUZ)
    const languageRU = useSelector(state => state.languagesReducer.languageRU)
    const languageEN = useSelector(state => state.languagesReducer.languageEN)
    const dispatch = useDispatch();
    const {control } = useForm();
    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const [language, setLanguage] = useState();
    console.log("LANGSGGSGSG", languages);
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
    console.log("EN", languageEN);
    
    const handleChange = (e) =>{
        console.log("onchangeLang>>>", e.target.value);
        const {name,value} = e.target
         language.id=selectedLanguage.id
        language.name = selectedLanguage.name
          setLanguage(language)
          
    }
    console.log("LANGUAGE", language);
    const onSubmit = (e) =>{
        e.preventDefault()
        dispatch(saveObektivkaLanguages(selectedLanguage))
        e.target.reset()
        setSelectedLanguage(null)
        setLanguage({})
    }

    return (
        <div className="obektivka__container">
            <ValidatorForm
                ref={formRef}
                className="obektivka__form" id="obektivka_form1" onSubmit={onSubmit}
                onError={(errors) => console.log(errors)}
                noValidate
            >     
               
                <div className="obektivka__inputs">
                <Controller
                        render = {({onChange, value}) =>
                            <Autocomplete
                                valiant="outlined"
                                options={i18n.language==="uz" ? languageUZ : i18n.language==="ru" ? languageRU : languageEN}
                                className="language__autocomlete"
                                getOptionLabel={(option) => option.name}
                                width="100%"
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
                    </div>
                <Button variant="contained" style={{backgroundColor:"green"}} type="submit">Save</Button>
            </ValidatorForm>
        </div>
    )
}

export default ObektivkaLanguages
