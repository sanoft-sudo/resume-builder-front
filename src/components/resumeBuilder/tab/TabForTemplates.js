import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TemplateTwo from "../../../templates/TemplateTwo";
import TemplateTree from '../../../templates/TemplateTree';
import TemplateFour from '../../../templates/TemplateFour';
import TemplateOne from '../../../templates/TemplateOne';
import ObektivkaTemplate from '../../../templates/ObektivkaTemplate';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TabForTemplates() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab icon={<img style={{width:"50px"}} src="assets/images/templateImages/templateOne.jpg" alt="image"/>} {...a11yProps(0)}/>
          <Tab icon={<img style={{width:"50px"}} src="assets/images/templateImages/templateTwo.jpg" alt="image"/>}  {...a11yProps(1)} />
          <Tab icon={<img style={{width:"50px"}} src="assets/images/templateImages/templateThree.jpg" alt="image"/>}  {...a11yProps(2)} />
          <Tab icon={<img style={{width:"50px"}} src="assets/images/templateImages/templateFour.jpg" alt="image"/>}  {...a11yProps(3)} />
          <Tab icon={<img style={{width:"50px"}} src="assets/images/templateImages/templateFive.jpg" alt="image"/>}  {...a11yProps(4)} />
          
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <TemplateOne/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <TemplateTwo/>
        </TabPanel>
      <TabPanel value={value} index={2}>
        <TemplateTree/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <TemplateFour/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <ObektivkaTemplate/>
      </TabPanel>
   
    </div>
  );
}
