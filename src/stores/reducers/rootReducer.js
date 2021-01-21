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
import { obektivkaReducer } from "./obektivkaReducer";
import { obektivkaProfileReducer } from "./obektivkaProfileReducer";
import { obektivkaBirthReducer } from "./obektivkaBirthReducer";
import { obektivkaAcademicReducer } from "./obektivkaAcademicReducer";
import { obektivkaStateAwardReducer } from "./obektivkaStateAwardReducer";
import {obektivkaMPReducer} from "./obektivkaMPReducer";
import { obektivkaExperienceReducer } from "./obektivkaExperienceReducer";
import {obektivkaLanguageReducer  } from "./obektivkaLanguageReducer";
import { obektivkaRelativesReducer } from "./obektivkaRelativesReducer";

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
    numbersReducer,
    obektivkaReducer,
    obektivkaProfileReducer,
    obektivkaBirthReducer,
    obektivkaAcademicReducer,
    obektivkaStateAwardReducer,
    obektivkaMPReducer,
    obektivkaExperienceReducer,
    obektivkaLanguageReducer,
    obektivkaRelativesReducer

    
})