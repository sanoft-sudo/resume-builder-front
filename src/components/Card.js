import React, {useHistory, useContext} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { useTranslation } from "react-i18next";
import {EmployerContext} from "../context/EmployerContext";
import "../styles/Card.css"
function Card() {
    const { t } = useTranslation();
    const {employers} = useContext(EmployerContext);
    let jobs = employers;
    const useStyles = makeStyles((theme) => ({
        root: {
          "& > *": {
            margin: theme.spacing(1)
          }
        }
      }));
    const classes = useStyles();
    
    return (<>
            {
                jobs.map(job =>(
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card">
                            <div className="card-header">
                            <div className="card__headrButton">
                                <IconButton color="secondary" aria-label="remove from list">
                                    <HighlightOffIcon />
                                </IconButton>
                                </div> 
                            <div className="row">
                                <div className="job__avatar">
                                    {job.avatar ?(
                                        <img src={job.avatar} alt=""/>
                                    ):""}
                                </div>
                                <div className="company__name">
                                    <p className="company__title">
                                        {job.company}
                                    </p>
                                    <p className="job__title">
                                        {job.job_title}
                                    </p>
                                </div>
                            </div>
                            <div className="row card__headrSub">
                                <div>
                                    {job.salary_per_hour}
                                </div>
                                <div>
                                    {job.address}
                                </div>
                            </div>
                        </div>
                            <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <div className="job__skills">
                                        {job.skills}
                                    </div>
                                </div>
                            </div>
                            <div className="row button__box">
                                <button className="jobview__button">
                                    View Job Post
                                </button>
                            </div>
                        </div>
                        </div>
                    </div>  
                ))
            }
            </>
    )
}

export default Card
