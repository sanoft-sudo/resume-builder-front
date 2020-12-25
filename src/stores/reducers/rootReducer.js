import {  combineReducers} from "redux";
import { profileReducer } from "./profileReducer";
import {contactReducer} from "./contactReducer";
import {postjobReducer} from "./postjobReducer";
import {educationReducer} from "./educationFormReducer";
import {experienceReducer} from "./experienceReducer";
import {keySkillsReducer} from "./keySkillsReducer";
import {technicalSkillsReducer} from "./technicalSkillsReducer";
import {achievementsReducer} from "./achievementsReducer";
import {languagesReducer} from "./languagesReducer";
import { drivingLReducer } from "./drivingLReducer";
import { personalDevReducer } from "./personalDevReducer";
import { colorReducer } from "./colorReducer";
import { numbersReducer } from "./numbersReducer";

export const rootReducer = combineReducers({
    profileReducer,
    contactReducer,
    postjobReducer,
    educationReducer,
    experienceReducer,
    keySkillsReducer,
    technicalSkillsReducer,
    achievementsReducer,
    languagesReducer,
    drivingLReducer,
    personalDevReducer,
    colorReducer,
    numbersReducer
    
})