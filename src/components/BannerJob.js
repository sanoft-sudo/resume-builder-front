import React, {useState, useContext, useEffect} from 'react';
import {useHistory} from "react-router-dom";
import "../styles/PostJob.css";
import PostAddIcon from '@material-ui/icons/PostAdd';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios';
import { useTranslation } from "react-i18next";
import {CandidatesContext} from "../context/CandidatesContext";
function BannerJob() {
    const { t } = useTranslation();
    const history = useHistory();
    const {candidates} = useContext(CandidatesContext);
    return (
        <div className="postJob" id="postJob">
            <div className="postJob__title">
                <h3 >{t("banner_post_job_title")}</h3>
            </div>
            <div className="postJob__img">
                <img src="../../assets/images/secretary.png" alt="postjob"/>
            </div>
            <div className="postJob__title2">
                <h1>{t("banner_post_job_title2")}</h1>
            </div>
            <div className="findJob__form">
                <form action="#" id="findCandidateSubmit">
                    <label htmlFor="free-solo-demo"><h3>{t("banner_post_job_label1")}</h3></label>
                    <Autocomplete
                         id="free-solo-demo"
                         freeSolo
                         options={candidates.map((candidate) => candidate.job_title)}
                         renderInput={(params) => (
                           <TextField {...params} label={t("banner_post_job_placeholder1")} margin="normal" variant="outlined" />
                         )}
                    />
                    <label htmlFor="free-solo-2-demo"><h3>{t("banner_post_job_label2")}</h3></label>
                     <Autocomplete
                          freeSolo
                          id="free-solo-2-demo"
                          disableClearable
                          options={candidates.map((candidate) => candidate.address)}
                          renderInput={(params) => (
                         <TextField
                              {...params}
                              label={t("banner_post_job_placeholder2")}
                              icon={<SearchIcon/>}
                              margin="normal"
                              variant="outlined"
                              InputProps={{ ...params.InputProps, type: 'search' }}
                         />
                      )}
                     />   
                </form>
            </div>
            <div className="button__container">
                <button className="btn postJob__buttonFind" htmlFor="findCandidateSubmit"  onClick={e => history.push("/searchcandidates")}>{t("banner_post_job_post_button2")} <SearchIcon/></button>
                <button className="btn postJob__buttonFind" onClick={e => history.push("/jobpost")}>{t("banner_post_job_post_button1")} <PostAddIcon/></button>
            </div>
            
        </div>
    )
}

export default BannerJob
