import React from 'react';
import "../styles/Banner.css";
import BannerJob from './BannerJob';
import BannerCandidates from './BannerCandidates';


function Banner() {
    return (
        <div>
           <div className="banner" id="banner">
            <div className="row banner__row">
                <div className="col-md-6 banner__col">
                    <BannerJob/>
                </div>
                <div className="col-md-6 banner__col">
                    <BannerCandidates/>
                </div>
            </div>
        </div> 
        </div>
        
    )
}

export default Banner
