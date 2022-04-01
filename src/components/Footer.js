import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './footer.css';

const Footer = () =>{
    return(
        <>
        <div className="mainfooter">
            <div className="contentfooter">
                <FacebookIcon/>
                <YouTubeIcon/>
                <TwitterIcon/>
                <LinkedInIcon/>

            </div>
            <p>&copy; 2022 indianfood.com </p>
        </div>
        </>
    )
}
export default Footer;