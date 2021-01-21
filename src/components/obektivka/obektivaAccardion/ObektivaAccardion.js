import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import "../../../styles/CreateResumeAcardion.css";
import ObektivkaProfile from '../obektivkaProfile/ObektivkaProfile';
import ObektivkaBirthDateAndPlace from '../obektivkaBirthDateAndPlace/ObektivkaBirthDateAndPlace';
import ObektivkaAcademic from "../obektivkaAcademic/ObektivkaAcademic";
import ObektivkaLanguages from "../obektivkaLanguage/ObektivkaLanguages";
import ObektivkaStateAwards from "../obektivkaStateAwards/ObektivkaStateAwards";
import ObektivkaMP from "../obektivkaMP/ObektivkaMP";
import ObektivkaExperience from "../obektivkaExperience/ObektivkaExperience";
import ObektivkaRelatives from '../obektivkaRelatives/ObektivkaRelatives';

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
    {id: "ob-aa", label: "Obektivka Profile", icon: <i class="fas fa-camera"></i>,
    data: <ObektivkaProfile/>},
    {id: "ob-bb", label: "Obektivka Birth date/place", icon: <i class="fas fa-birthday-cake"></i>,
    data: <ObektivkaBirthDateAndPlace/>},
    {id: "ob-cc", label: "Obektivka Academic", icon: <i class="fas fa-user-graduate"></i>,
    data: <ObektivkaAcademic/>},
    {id: "ob-dd", label: "Obektivka Languages", icon: <i class="fas fa-language"></i>,
    data: <ObektivkaLanguages/>},
    {id: "ob-ee", label: "Obektivka State Awards", icon: <i class="fas fa-medal"></i>,
    data: <ObektivkaStateAwards/>},
    {id: "ob-ff", label: "Obektivka MP", icon: <i class="fas fa-person-booth"></i>,
    data: <ObektivkaMP/>},
    {id: "ob-gg", label: "Obektivka Experience", icon: <i class="fas fa-briefcase"></i>,
    data: <ObektivkaExperience/>},
    {id: "ob-hh", label: "Obektivka Relatives", icon: <i class="fas fa-users"></i>,
    data: <ObektivkaRelatives/>},
   
   

]
 function ObektivkaAccardion() {
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

export default ObektivkaAccardion;