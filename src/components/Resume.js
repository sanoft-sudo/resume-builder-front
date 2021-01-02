import React from 'react';
import {useHistory} from "react-router-dom";
import { useTranslation } from 'react-i18next';
import "../styles/Resume.css"

function Resume() {
    const {t} = useTranslation();
    const history = useHistory();
    return (
        <div>
           <div className="resume" id="buildresume">
            <div className="resume__row row">
                <div className="col-md-8">
                    <div className="resume__left">
                        <h1>{t("resume_title")}</h1>
                        <p>
                        {t("resume_offer")}
                        </p>
                        <div className="resume__leftButtons row">
                            <button className="resume__leftGoogle">{t("resume_start_google_button")}</button>
                            <button className="resume__leftBuildCv" onClick={e => history.push("/resumecreator")}>{t("resume_srart_cv_button")}</button>
                        </div>
                        <h4>
                            {t("resume_or")}
                        </h4>
                        <div className="resume__leftButtons row">
                            <button className="resume__leftGoogle">{t("resume_upload_button")}</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="resume__right">
                        <img src="../../assets/images/resume.jpg" alt=""/>
                    </div>
                </div>
            </div>
            
        </div>  
        </div>
    )
       
}

export default Resume
