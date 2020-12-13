import React, {useState} from 'react';
import {NavLink} from "react-router-dom"
import LanguageSelect from '../components/languageSelect';
import { useTranslation } from "react-i18next";
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import "../styles/NavBar.css"

function NavBar() {
    const { t } = useTranslation();
    const [showSider, setShowSider] = useState(false);

 return (
        <div id="navBar">
            <nav>
                <div className="logo">
                    <NavLink to="/" key="/">
                        <img src="../../assets/images/logo2.png" alt="Logo"/> 
                    </NavLink>
                </div>
                <div className="nav__container"
                    style={{transform: showSider? "translateX(0px)" : ""}}
                >
                    <ul className="nav__links">
                    <li className="nav__items" onClick={()=>setShowSider(false)}>
                        <NavLink to="/" key="/" exact strict>
                            <h4>{t("header_link1")}</h4>
                        </NavLink>
                    </li>
                    <li className="nav__items" onClick={()=>setShowSider(false)} >
                        <NavLink  to="/jobpost" key="/jobpost">
                        <h4>{t("header_link2")}</h4>
                        </NavLink>
                    </li>
                    <li className="nav__items" onClick={()=>setShowSider(false)} >
                        <NavLink to="/jobsearch" key="/jobsearch" >
                        <h4>{t("header_link3")}</h4>
                        </NavLink>
                    </li>
                    <li className="nav__items" onClick={()=>setShowSider(false)} >
                        <NavLink to="/buildresume" key="/buildresume">
                        <h4>{t("header_link4")}</h4>
                        </NavLink>
                    </li>
                    <li className="nav__items" onClick={()=>setShowSider(false)} >
                        <NavLink to="/contact" key="/contact">
                        <h4>{t("header_link5")}</h4>
                        </NavLink>
                    </li>
                </ul>
                    <div className="nav__right">
                    <LanguageSelect/>
                    <div className="nav__right--reg">
                        <li className="nav__items" onClick={()=>setShowSider(false)}>
                            <NavLink to="/login" key="/login">
                            <h4>{t("header_link6")}</h4>
                        </NavLink> 
                        </li>
                       
                    </div>
                    
                </div>
                </div>
                <div className="nav__burger">
                    <IconButton onClick={() => setShowSider(!showSider)}>
                      <MenuIcon/>  
                    </IconButton>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
