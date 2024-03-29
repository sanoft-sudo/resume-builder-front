import './App.css';
import NavBar from './pages/NavBar';
import { Switch, Route} from "react-router-dom";
import { Transition, TransitionGroup } from 'react-transition-group';
import { play, exit } from './timelines'
import PageNotFound from './components/PageNotFound';
import Home from './pages/Home';
import Login from './pages/Login';
import JobPost from './pages/JobPost';
import JobSearch from './pages/JobSearch';
import BuildCV from './pages/BuildCV';
import Contacts from './pages/Contacts';
import Candidates from './pages/Candidates';
import ResumeCreator from "./pages/ResumeCreator";
import CandidatesContextProvider from './context/CandidatesContext';
import EmployerContextProvider from './context/EmployerContext';
import JobsContextProvider, { JobsContext } from './context/JobsContext';
import CountriesContextProvider from './context/CountriesContext';
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import KeySkillsContextProvider from './context/KeySkillsContext';
import TechnicalSkillsContextProvider from "./context/TechnicalSkillsContext";
function App() {
  return (
    <>
    <TechnicalSkillsContextProvider>
      <KeySkillsContextProvider>
       
        <JobsContextProvider>
          <CountriesContextProvider>
            <CandidatesContextProvider>
              <EmployerContextProvider>
                <NavBar/>
                  <Route render={({ location }) => {
                          const { pathname, key } = location;

                          return (
                            <TransitionGroup component={null}>
                              <Transition
                                key={key}
                                appear={true}
                                onEnter={(node, appears) => play(pathname, node, appears)}
                                onExit={(node, appears) => exit(node, appears)}
                                timeout={{enter: 750, exit: 150}}
                              >
                                <Switch location={location}>
                                  <Route exact path="/" component={Home}/>
                                  <Route path="/jobpost" component={JobPost} />
                                  <Route path="/jobsearch" component={JobSearch} />
                                  <Route path="/buildresume" component={BuildCV} />
                                  <Route path="/contact" component={Contacts} />
                                  <Route path="/login" component={Login} />
                                  <Route path="/searchcandidates" component={Candidates}/>
                                  <Route path="/pagenotfount" component={PageNotFound} />
                                  <Route path="/resumecreator" component={ResumeCreator} />
                                </Switch>
                              </Transition>
                            </TransitionGroup>
                          )
                    }}/>
              </EmployerContextProvider>
                </CandidatesContextProvider>
          </CountriesContextProvider>
        </JobsContextProvider>
       
      </KeySkillsContextProvider>
    </TechnicalSkillsContextProvider>
    
    </>
  );
  
}

export default App;
