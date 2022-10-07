import React from 'react';
import SocialNetworkIcon from './SocialNetworkIcon';
import { faFacebookF, faTwitter, faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className="footer" >
            <div className="socialCont" >
                <SocialNetworkIcon brand={faFacebookF} link="https://www.facebook.com/vazha.metskhvarishvili" />
                <SocialNetworkIcon brand={faTwitter} link="" />
                <SocialNetworkIcon brand={faLinkedinIn} link="https://www.linkedin.com/in/vazha-metskhvarishvili-6b98a921a/" />
                <SocialNetworkIcon brand={faGithub} link="https://github.com/Mecxvarishvili" />
                <SocialNetworkIcon brand={faInstagram} link="https://www.instagram.com/callmekiboo/" />
            </div>
        </div>
    );
};

export default Footer;