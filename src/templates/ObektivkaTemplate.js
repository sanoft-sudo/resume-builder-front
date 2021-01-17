import React from 'react';
import { useTranslation } from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import ObektivkaTable from './ObektivkaTable';

function ObektivkaTemplate() {
    const { t } = useTranslation();
    const obektiv = useSelector(state => state.obektivkaReducer.obektiv)
    console.log("obj>>>>>", obektiv);
    return (
        <div className="container">
            <div className="obektivka__title">
                <p>ma'lumotnoma</p>
            </div>
            <div className="obektivka__fullName">
                <p>{obektiv?.fullName}</p>
            </div>
            {obektiv?.isWorking===false?(
                <div className="obektivka__currentPosition">
                <p>{obektiv?.currentFromDate} :</p>
                <p>{obektiv?.currentCompany}, {obektiv?.currentPosition}</p>
                </div>
            ):(
                <div className="obektivka__currentPosition">
                    <p>vaqtincha ishsiz</p>
                </div>
            )}
            <div className="obektivka__twoColmnFields row">
                <div className="obektivka__twoColmnFieldsLeft col-md-6">
                    <p>Tug'ilgan yili:</p>
                    <p>{obektiv?.birthDate}</p>
                </div>
                <div className="obektivka__twoColmnFieldsRight col-md-6">
                    <p>Tug'ilgan joyi:</p>
                    <p>{obektiv?.birthPlace}</p>
                </div>
            </div>
            <div className="obektivka__twoColmnFields row">
                <div className="obektivka__twoColmnFieldsLeft col-md-6">
                    <p>Millati:</p>
                    <p>{obektiv?.nationality}</p>
                </div>
                <div className="obektivka__twoColmnFieldsRight col-md-6">
                    <p>Patriyaviyligi:</p>
                    <p>{obektiv?.party_membership}</p>
                </div>
            </div>
            <div className="obektivka__twoColmnFields row">
                <div className="obektivka__twoColmnFieldsLeft col-md-6">
                    <p>Ma'lumoti:</p>
                    <p>{obektiv?.degree}</p>
                </div>
                <div className="obektivka__twoColmnFieldsRight col-md-6">
                    <p>Tamomlagan:</p>
                    <p>{obektiv?.graduated_when} y. {obektiv?.graduated_where}({obektiv?.graduation_shift})</p>
                </div>
            </div>
            <div className="obektivka__currentPosition">
                <p>Ma'lumoti bo'yicha mutaxassisligi: {obektiv?.diploma_speciality}</p>
            </div>
            <div className="obektivka__twoColmnFields row">
                <div className="obektivka__twoColmnFieldsLeft col-md-6">
                    <p>Ilmiy darajasi:</p>
                    <p>{obektiv?.academic_degree}</p>
                </div>
                <div className="obektivka__twoColmnFieldsRight col-md-6">
                    <p>Ilmiy unvoni:</p>
                    <p>{obektiv?.academic_title}</p>
                </div>
            </div>
            <div className="obektivka__twoColmnFields row">
                <div className="obektivka__twoColmnFieldsLeft col-md-6">
                    <p>Qaysi chet tillarini biladi:</p>
                    {obektiv?.languages && obektiv?.languages.map(language => <p>{language.name},</p>)}
                </div>
                <div className="obektivka__twoColmnFieldsRight col-md-6">
                    <p>Xarbiy unvoni:</p>
                    <p>{obektiv?.military_title}</p>
                </div>
            </div>
            <div className="obektivka__currentPosition">
                <p>Davlat mukofotlari bilan taqdirlanganmi(qanaqa):</p>
                {obektiv?.stateAwards && obektiv?.stateAwards.map(award =>(
                    <p>{award.awardYear} y. {award.awardName}</p>
                ))}
            </div>
            <div className="obektivka__currentPosition">
                <p>Xalq deputatlari respublika, viloyat, shaxar va tuman Kengashi deputatimi yoki boshqa saylanadigan organlarning a'zosimi(to'liq ko'rsatilishi lozim):</p>
                {obektiv?.mp && obektiv?.mp.map(memP =>(
                    <p>{memP.mpStart}-{memP.mpEnd} yy. - {memP.mpPosition}</p>
                ))}
            </div>
            <div className="obektivka__title">
                <p>mehnat faoliyati</p>
            </div>
            <div className="obektivka__experiences">
                {obektiv?.experience && obektiv?.experience.map(exp =>(
                    <p>{exp.fromDate}-{exp.toDate} yy. - {exp.companyName}, {exp.positionName}</p>
                ))}
            </div>
            <div className="obektivka__titleText">
                <p>{obektiv?.fullName}ning yaqin qarindoshlari haqida</p>
            </div>
            <div className="obektivka__title">
                <p>ma'lumot</p>
            </div>
            <div className="obektivka__table">
                <ObektivkaTable/>
            </div>
        </div>
    )
}

export default ObektivkaTemplate
