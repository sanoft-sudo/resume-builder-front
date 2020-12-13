import React, {useState, useContext, useEffect} from 'react';
import {useHistory} from "react-router-dom";
import "../styles/FindJob.css";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';
import PostAddIcon from '@material-ui/icons/PostAdd';
import axios from 'axios';
import { useTranslation } from "react-i18next";
import {EmployerContext} from "../context/EmployerContext";
function BannerCandidates() {
    
    const { t } = useTranslation();
    const history = useHistory();
  const {employers} = useContext(EmployerContext);
  let jobs = employers;
    return (
        <div id="findJob">
            <div className="findJob__title">
                <h3 >{t("banner_find_job_title")}</h3>
            </div>
            <div className="findJob__img">
                <img src="../../assets/images/job-find.jpg" alt="findjob"/>
            </div>
            <div className="findJob__title2">
                <h1>{t("banner_find_job_title2")}</h1>
            </div>
            <div className="findJob__form">
                <form action="#" id="findJobSubmit">
                    <label htmlFor="free-solo-demo"><h3>{t("banner_find_job_label1")}</h3></label>
                    <Autocomplete
                         id="free-solo-demo"
                         freeSolo
                         options={jobs.map((job) => job.job_title)}
                         renderInput={(params) => (
                           <TextField {...params} label={t("banner_find_job_placeholder1")} margin="normal" variant="outlined" />
                         )}
                    />
                    <label htmlFor="free-solo-2-demo"><h3>{t("banner_find_job_label2")}</h3></label>
                     <Autocomplete
                          freeSolo
                          id="free-solo-2-demo"
                          disableClearable
                          options={jobs.map((job) => job.country)}
                          renderInput={(params) => (
                         <TextField
                              {...params}
                              label={t("banner_find_job_placeholder2")}
                              margin="normal"
                              variant="outlined"
                              InputProps={{ ...params.InputProps, type: 'search' }}
                         />
                      )}
                     />   
                </form>
                <div className="button__container">
                    <button className="btn findJob__buttonFind" htmlFor="findJobSubmit" onClick={e => history.push("/jobsearch")}>{t("banner_find_job_find_button1")} <SearchIcon/></button>
                    <button className="btn findJob__buttonFind" onClick={e => history.push("/buildresume")}>{t("banner_find_job_find_button2")} <PostAddIcon/></button>
                </div>
                
            </div>
        </div>
    )
}

export default BannerCandidates
