import React from 'react';
import { useTranslation } from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import ObektivkaTable from './ObektivkaTable';
import moment from "moment";
import "moment/locale/uz-latn";
import "moment/locale/ru";
import "./templateStyles/ObektivkaTemplate.css";

function ObektivkaTemplate() {
    moment.locale("uz-latn");
    const { t } = useTranslation();
    const obektivkaProfile = useSelector(state => state.obektivkaProfileReducer.obektivkaProfile)
    const obektivkaBirth = useSelector(state => state.obektivkaBirthReducer.obektivkaBirth)
    const obektivkaAcademic = useSelector(state => state.obektivkaAcademicReducer.obektivkaAcademic)
    const languagesReducer = useSelector(state => state.languagesReducer.languagesReducer)
    const stateAwards = useSelector(state => state.obektivkaStateAwardReducer.stateAwards)
    const mp = useSelector(state => state.obektivkaMPReducer.mp)
    const experience = useSelector(state => state.obektivkaExperienceReducer.experience)
    const languages = useSelector(state => state.obektivkaLanguageReducer.languages)
    
    console.log("State awards", stateAwards.awardName, ">>", `${moment(obektivkaAcademic.awardYear).utc().year()}`);
    return (
        <div className="container custom__style">
            <div className="obektivka__prof">
                <img src="#" alt=""/>
            </div>
            <div className="obektivka__title obektivka__title">
                <p className="obektivka__headings ">ma'lumotnoma</p>
            </div>
            <div className="obektivka__fullName">
                <p>{obektivkaProfile?.fullName}</p>
            </div>
            {obektivkaProfile?.isWorking===false?(
                <div className="obektivka__currentPosition">
                <p className="obektivka__headings">{moment(obektivkaProfile.currentFromDate).utc().format("YYYY Do - MMMM")}dan :</p>
                <p>{obektivkaProfile?.currentCompany}, {obektivkaProfile?.currentPosition}</p>
                </div>
            ):(
                <div className="obektivka__currentPosition">
                    <p>vaqtincha ishsiz</p>
                </div>
            )}
            <div className="obektivka__twoColmnFields row">
                <div className="obektivka__twoColmnFieldsLeft col-md-6">
                    <p className="obektivka__headings">Tug'ilgan yili:</p>
                    <p>{moment(obektivkaBirth.birthDate).utc().format("Do - MMMM YYYY")}yil</p>
                </div>
                <div className="obektivka__twoColmnFieldsRight col-md-6">
                    <p className="obektivka__headings">Tug'ilgan joyi:</p>
                    <p>{obektivkaBirth.birthRegion}, {obektivkaBirth.birthCityOrDistrict}</p>
                </div>
            </div>
            <div className="obektivka__twoColmnFields row">
                <div className="obektivka__twoColmnFieldsLeft col-md-6">
                    <p className="obektivka__headings">Millati:</p>
                    <p>{obektivkaBirth?.nationality}</p>
                </div>
                <div className="obektivka__twoColmnFieldsRight col-md-6">
                    <p className="obektivka__headings">Patriyaviyligi:</p>
                    <p>{obektivkaBirth?.party_membership}</p>
                </div>
            </div>
            <div className="obektivka__twoColmnFields row">
                <div className="obektivka__twoColmnFieldsLeft col-md-6">
                    <p className="obektivka__headings">Ma'lumoti:</p>
                    <p>{obektivkaAcademic?.degree}</p>
                </div>
                <div className="obektivka__twoColmnFieldsRight col-md-6">
                    <p className="obektivka__headings">Tamomlagan:</p>
                    <p>{ obektivkaAcademic.graduated_when && moment(obektivkaAcademic?.graduated_when).utc().year()} y. {obektivkaAcademic?.graduated_where}({obektivkaAcademic.graduation_shift ? "Sirtqi": "Kunduzgi"})</p>
                </div>
            </div>
            <div className="obektivka__currentPosition">
                <p className="obektivka__headings">Ma'lumoti bo'yicha mutaxassisligi: {obektivkaAcademic?.diploma_speciality}</p>
            </div>
            <div className="obektivka__twoColmnFields row">
                <div className="obektivka__twoColmnFieldsLeft col-md-6">
                    <p className="obektivka__headings">Ilmiy darajasi:</p>
                    <p>{obektivkaAcademic?.academic_degree}</p>
                </div>
                <div className="obektivka__twoColmnFieldsRight col-md-6">
                    <p className="obektivka__headings">Ilmiy unvoni:</p>
                    <p>{obektivkaAcademic?.academic_title}</p>
                </div>
            </div>
            <div className="obektivka__twoColmnFields row">
                <div className="obektivka__twoColmnFieldsLeft col-md-6">
                    <p className="obektivka__headings">Qaysi chet tillarini biladi:</p>
                    <div style={{display:"flex"}}>
                    {languages && languages.map(language => <p style={{marginBottom:0}}>{ language.name}, &nbsp; </p>)}
                    </div>
                    
                </div>
                <div className="obektivka__twoColmnFieldsRight col-md-6">
                    <p className="obektivka__headings">Xarbiy unvoni:</p>
                    <p>{obektivkaAcademic?.military_title}</p>
                </div>
            </div>
            <div className="obektivka__currentPosition">
                <p className="obektivka__headings">Davlat mukofotlari bilan taqdirlanganmi(qanaqa):</p>
                {stateAwards && stateAwards.map(award =>(
                    <p>{moment(award.awardYear).utc().year()} y. {award.awardName}</p>
                ))}
            </div>
            <div className="obektivka__currentPosition">
                <p className="obektivka__headings">Xalq deputatlari respublika, viloyat, shaxar va tuman Kengashi deputatimi yoki boshqa saylanadigan organlarning a'zosimi(to'liq ko'rsatilishi lozim):</p>
                {mp.isMp===false ? (
                mp && mp.map(memP =>(
                    <p>{moment(memP.mpStart).utc().year()}-{memP.mpEnd!=="" ? moment(memP.mpEnd).utc().year() : "to present"} yy. - {memP.mpPosition}</p>
                ))
                ):(
                    <p>Yo'q</p>
                )}
                
            </div>
            <div className="obektivka__title">
                <p className="obektivka__headings obektivka__title">mehnat faoliyati</p>
            </div>
            <div className="obektivka__experiences">
                
                {experience.length ? experience.map(exp =>(
                     <p>{moment(exp.fromDate).utc().year()}-{exp.toDate!=="" ? moment(exp.toDate).utc().year() : "to present"} yy. - {exp.companyName}, {exp.positionName}</p>
                )): ""}
            </div>
            <div className="obektivka__titleText">
                <p className="obektivka__headings" style={{textAlign:"center"}}><span obektivka__fullName>{obektivkaProfile?.fullName}</span>ning yaqin qarindoshlari haqida</p>
            </div>
            <div className="obektivka__title">
                <p className="obektivka__headings obektivka__title">ma'lumot</p>
            </div>
            <div className="obektivka__table">
                <ObektivkaTable/>
            </div>
        </div>
    )
}

export default ObektivkaTemplate
