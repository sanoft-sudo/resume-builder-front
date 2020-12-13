import React, {useState, useContext} from 'react'
import "../styles/PostViewCard.css"
import {EmployerContext} from "../context/EmployerContext";
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import DrawerPost from './DrawerPost';
import { IconButton } from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

function PostViewCard() {
    
  const {employers} = useContext(EmployerContext);


  function truncate(str, n) {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
}
    return (
        employers.map((postedJob, index) =>(
          <div className="col-lg-6 ">
            <div className="one__edgeShadow">
              <div className="header__button">
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  startIcon={<SaveIcon />}
                >
                  Save job
                </Button>
              </div>
                <div class="card__container"> 
                  <div className="post__header">
                <p className="job__title">{postedJob.job_title}</p>
                <p className="job__company">{postedJob.company}</p>
                <p className="job__address">{postedJob.address}</p>
              </div>
                  <div className="post__content">
                <div className="job__about">
                  <ul>
                  <li className="aboutMore__list">
                      <p>{truncate(postedJob.aboutJob, 100)}</p>
                  </li>
                  <li className="aboutMore__list">
                      <p>{postedJob.skills.first} / {postedJob.skills.second} /{postedJob.skills.third}</p>
                  </li>
                </ul>
                </div>
                
              </div>
              
                  <input id={postedJob.id} class="toggle" type="checkbox"/> 
                  <label for={postedJob.id} class="lbl-toggle">More...</label>
                  <div class="collapsible-content">
              <div class="content-inner">
                <div className="job__aboutMore">
                  <ul>
                    <li className="aboutMore__list">
                      <p> {truncate(postedJob.aboutJob, 200)}</p>
                    </li>
                    <li className="aboutMore__list">
                      <p> {truncate(postedJob.addRequired, 200)}</p>
                    </li>

                  </ul>
                  <div className="post__footer">
                      <IconButton>
                        <ExpandLessIcon/>
                      </IconButton>
                      <DrawerPost/>
                  </div>
                  
                </div>
                
              </div>
            </div>
                </div> 
            </div>
          
          </div>
              
                
        )))
          
    
}

export default PostViewCard
