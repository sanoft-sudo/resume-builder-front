import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import "../../../styles/CreateResumeAcardion.css";
import ProfileForm from "../createProfile/ProfileForm";
import ContactInformation from "../createContacts/ContactInformation"
import EducationForm from '../education/EducationForm';
import ExperienceForm2 from '../experience/ExperienceForm2';
import NewM from "../technicalSkills/NewM";
import TechSkills2 from "../technicalSkills/TechSkills2";
import TechnicalSkills from "../technicalSkills/TechnicalSkills";
import KeySkillsSelect from '../keySkills/KeySkillsSelect';
import AchievementForm from '../achivements/AchievementForm';
import LanguageForm from '../languageFrom/LanguageForm';
import DrivingLicence from '../drivingL/DrivingLicence';
import PersonalDevelopment from '../personalDevelopment/PersonalDevelopment';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));
const fields = [
    {id: "ab", label: "Personal information", icon: <i class="fas fa-user"></i>,
    data: <ProfileForm/>},
    {id: "cb", label: "Contact information", icon: <i class="far fa-address-book"></i>,
    data: <ContactInformation/>},
    {id: "db", label: "Education", icon: <i class="fas fa-user-graduate"></i>,
    data: <EducationForm/>},
    {id: "eb", label: "Experience", icon: <i class="fas fa-suitcase"></i>,
    data: <ExperienceForm2/>},
    {id: "fb", label: "Key Skills", icon: <i class="fas fa-shapes"></i>,
    data: <KeySkillsSelect/>},
    {id: "gb", label: "Technical Skills", icon: <i class="fas fa-chart-bar"></i>,
    data: <NewM/>},
    {id: "hb", label: "Achievements", icon: <i class="fas fa-award"></i>,
    data: <AchievementForm/>},
    {id: "ib", label: "Languages", icon: <i class="fas fa-language"></i>,
    data: <LanguageForm/>},
    {id: "Jb", label: "Driving licence", icon: <i class="far fa-address-card"></i>,
    data: <DrivingLicence/>},
    {id: "kb", label: "Personal Development", icon: <i class="fas fa-chart-line"></i>,
    data: <PersonalDevelopment/>},
   

]
 function CreateResumeAcardion() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  return (
    <div className="container-fluild">
       <div className={classes.root}>
        {fields?.map((field, index) =>(
            <Accordion key={index} expanded={expanded === "panel"+field.id} onChange={handleChange("panel"+field.id)}>
                <AccordionSummary
                expandIcon={field.icon}
                aria-controls={"panel"+field.id +"bh-content"}
                id={"panel"+field.id+"bh-header"}
                >
                <Typography className={classes.heading}>{field.label}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  
                   {field.data}
                </AccordionDetails>
            </Accordion>
        ))}
    </div>
    </div>
   
  );
}

export default CreateResumeAcardion;