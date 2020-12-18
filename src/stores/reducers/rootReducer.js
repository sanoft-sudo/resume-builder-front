import {  combineReducers} from "redux";
import { profileReducer } from "./profileReducer";
import {contactReducer} from "./contactReducer";
import {postjobReducer} from "./postjobReducer";
import {educationReducer} from "./educationFormReducer";
import {experienceReducer} from "./experienceReducer";
import {keySkillsReducer} from "./keySkillsReducer";

export const rootReducer = combineReducers({
    profileReducer,
    contactReducer,
    postjobReducer,
    educationReducer,
    experienceReducer,
    keySkillsReducer
    
})