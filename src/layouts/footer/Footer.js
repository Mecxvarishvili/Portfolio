import React from 'react';
import SocialNetworkIcon from './SocialNetworkIcon';
import { FaGithub,FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer" >
            <div className="socialCont" >
                <SocialNetworkIcon icon={<FaGithub/>} link="https://github.com/Mecxvarishvili" />
                <SocialNetworkIcon icon={<FaLinkedinIn/>} link="https://www.linkedin.com/in/vazha-metskhvarishvili-6b98a921a/" />
                <SocialNetworkIcon icon={<FaFacebookF/>} link="www.facebook.com/vazha.metskhvarishvili" />
                <SocialNetworkIcon icon={<FaInstagram/>} link="https://www.instagram.com/callmekiboo/" />
                <SocialNetworkIcon icon={<FaTwitter/>} link="https://twitter.com/vazhametsk" />
            </div>
        </div>
    );
};

export default Footer;