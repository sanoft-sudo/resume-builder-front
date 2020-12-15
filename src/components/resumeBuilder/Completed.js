import React from 'react';
import {useSelector} from "react-redux";
import "../../styles/Completed.css"
import CallIcon from '@material-ui/icons/Call';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import RoomIcon from '@material-ui/icons/Room';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TelegramIcon from '@material-ui/icons/Telegram';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

function Completed() {
    const profileInfo = useSelector(state => state.profileReducer.profileInfo);
    const contact = useSelector(state => state.contactReducer.contact)
    console.log("completed", profileInfo);
    return (
        <div>
        <div className="card">
            <div className="card-header">
              
                <div className="completed__header">
                   { profileInfo &&
                   profileInfo.firstName && profileInfo.lastName && profileInfo.fatherName ? <h1 className="completed__headerTitle">
                        { profileInfo.firstName + ' ' + profileInfo.lastName +' '+ profileInfo.fatherName} </h1> :  profileInfo.firstName && profileInfo.lastName ? <h1 className="completed__headerTitle">
                    { profileInfo.firstName + ' ' + profileInfo.lastName}</h1> : ''}
                   
                   
                
                </div>
                
            </div>
            <div className="card-body">
                
                    <p>{profileInfo.aboutMe}</p>
            
                

            </div>
        </div>
        <div className="card">
            <div className="card-body">
                {contact &&
                <div className="contactBox">
                    {contact.phone && <div className="contactPhone"><i class="fas fa-phone-square-alt"></i> <p>{contact.phone}</p></div>}
                    {contact.emali && <div className="contactPhone"><i class="far fa-envelope"></i> <p>{contact.email}</p></div>}
                    {contact.address && <div className="contactPhone"> <i class="fas fa-map-marker-alt"></i> <p>{contact.address}</p></div>}
                    {contact.linkedIn && <div className="contactPhone"><i class="fab fa-linkedin"></i> <p>{contact.linkedIn}</p></div>}
                    {contact.telegram && <div className="contactPhone"><i class="fab fa-telegram"></i> <p>{contact.telegram}</p></div>}
                    {contact.instagram && <div className="contactPhone"> <i class="fab fa-instagram"></i> <p>{contact.instagram}</p></div>}
                    {contact.facebook && <div className="contactPhone"><i class="fab fa-facebook-square"></i> <p>{contact.phone}</p></div>}
                    {contact.vk && <div className="contactPhone"><i class="fab fa-vk"></i> <p>{contact.vk}</p></div>}
                    
                </div>}
                
            </div>
        </div>
        </div>
    )
}

export default Completed
