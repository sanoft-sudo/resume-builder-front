import React from 'react';
import "../styles/PostView.css";
import Button from '@material-ui/core/Button';
import {useHistory} from "react-router-dom";

function PostView() {
    
    const history = useHistory();
    return (
        <div className="postview">
            <div className="card__header">
                    <div className="header__content">
                        <p className="job__title">Front- End Web Animator</p>
                        <p className="job__company">Cognizant Technology Solutions</p>
                        <p className="job__address">Teaneck, NJ 07666</p>
                    </div>
                    <div className="apply__button">
                        <Button variant="contained" color="primary" onClick={e => history.push("/buildresume")}>
                            Send Resume
                        </Button>
                    </div>
                </div>
            <div className="card_view">
                <div className="card__body">
                    <p>Front- End Web Animator</p>
                    <p className="job__decs">Job Description</p>
                    <p className="about__job">
                    We are looking for a Front-End Web Animator who is motivated to combine the art of design with the art of animation. Responsibilities will include translation of the UI/UX designs into production-ready files that will enhance the visual elements across the application. You will work with the UI/UX designer and bridge the gap between graphical design and technical implementation, taking an active role on both sides and defining how the application looks as well as how it works.

                    </p>
                    <p className="job__requires">Responsibilities</p>
                    <p>Develop new user-facing features
                        Create storyboards/keyframes/prototype of ideas to show overall flow
                        Build reusable animations for future use (ie micro-interactions)
                        Build complex in-page animated features
                        Design and build full-page animated scrolling experiences that enhance the overall story
                        Ensure the technical feasibility of UI/UX designs
                        Optimize animations for maximum speed and scalability
                        Collaborate closely with other team members and stakeholders
                    </p>
                    <p><strong>Job location</strong> : Teaneck, New Jersey, United States || Anchorage, Alaska, United States</p>
                    <p><strong>Employee Status</strong> : Full Time Employee</p>
                    <p><strong>Shift</strong> : Day Job</p>
                    <p><strong>Placeto work</strong> : At Office</p>
                    <p><strong>Job Posting</strong> : Dec 12 2020</p>
                    <div className="about__company">
                        <p>About Cognizant Cognizant (Nasdaq-100: CTSH) is one of the world's leading professional services companies, transforming clients' business, operating and technology models for the digital era. Our unique industry-based, consultative approach helps clients envision, build and run more innovative and efficient businesses. Headquartered in the U.S., Cognizant is ranked 194 on the Fortune 500 and is consistently listed among the most admired companies in the world. Learn how Cognizant helps clients lead with digital at www.cognizant.com or follow us @USJobsCognizant.

                            Cognizant is recognized as a Military Friendly Employer and is a coalition member of the Veteran Jobs Mission. Our Cognizant Veterans Network assists Veterans in building and growing a career at Cognizant that allows them to leverage the leadership, loyalty, integrity, and commitment to excellence instilled in them through participation in military service.
                            Cognizant is an equal opportunity employer. All qualified applicants will receive consideration for employment without regard to sex, gender identity, sexual orientation, race, color, religion, national origin, disability, protected Veteran status, age, or any other characteristic protected by law.
                            If you have a disability that requires a reasonable accommodation to search for a job opening or submit an application, please email CareersNA2@cognizant.com with your request and contact information.
                            Cognizant - Today
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default PostView
