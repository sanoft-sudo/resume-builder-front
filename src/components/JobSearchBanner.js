import React, {useContext} from 'react';
import {useHistory} from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { useTranslation } from "react-i18next";
import {EmployerContext} from "../context/EmployerContext";
import "../styles/JobSearchBanner.css"

function JobSearchBanner() {
    const { t } = useTranslation();
    const history = useHistory();
  const {employers} = useContext(EmployerContext);
  let jobs = employers;
    return (
        <div className="jobsearchbanner">
            <div className="form__container">
                <form action="#" id="findJobSubmit">
                    <div className="row form_row">
                        <div className="col-md-8">
                            <div className="row form__searchRow">
                                <div className="col-md-6">
                            <label htmlFor="free-solo-demo"><h3>{t("banner_find_job_label1")}</h3></label>
                            <Autocomplete
                                id="free-solo-demo"
                                freeSolo
                                options={jobs.map((job) => job.job_title)}
                                renderInput={(params) => (
                                <TextField {...params} label={t("banner_find_job_placeholder1")} margin="normal" variant="outlined" />
                                )}
                            />
                        </div>
                                <div className="col-md-6">
                           <label htmlFor="free-solo-2-demo"><h3>{t("banner_find_job_label2")}</h3></label>
                            <Autocomplete
                                freeSolo
                                id="free-solo-2-demo"
                                disableClearable
                                options={jobs.map((job) => job.address)}
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
                        </div>
                            </div>
                            <div className="row form__salaryRow">
                                <div className="col">
                                  <label><h4>Salary</h4></label>
                                  <div className="row">
                                  <div className="col-md-4 salary__range">
                                    <label htmlFor="from">From </label>
                                    <input type="number" id="from" name="fromSalary"/>
                                </div>
                                <div className="col-md-4 salary__range">
                                    <label htmlFor="to">To </label>
                                    <input type="number" id="to" name="toSalary"/>
                                </div>
                                <div className="col-md-4 salary__range">
                                    <label htmlFor="salary__type ">Payment </label>
                                    <select name="salary__type" id="salary__type">
                                        <option key="value" value="0" disabled>Select an option</option>
                                        <option key="value" value="4">hour</option>
                                        <option key="value" value="5">day</option>
                                        <option key="value" value="6">month</option>
                                    </select>
                                </div>
                                  </div>  
                                </div>
                                
                                
                            </div>
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-info form__searchButton findJob__buttonFind" htmlFor="findJobSubmit">{t("banner_find_job_find_button1")} <SearchIcon/></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default JobSearchBanner
