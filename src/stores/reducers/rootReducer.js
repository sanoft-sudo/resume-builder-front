import {  combineReducers} from "redux";
import { profileReducer } from "./profileReducer";
import {contactReducer} from "./contactReducer";
import {postjobReducer} from "./postjobReducer";

export const rootReducer = combineReducers({
    profileReducer,
    contactReducer,
    postjobReducer
})