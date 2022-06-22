import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
    return (
        <div className="header" >
            <div className="hLeft" >
                <div>Home</div>
                <div>Projects</div>
                <div>About</div>
                <div>Contact</div>
            </div>
            <div className="hRight">
                <div>
                    <a href="https://github.com/Mecxvarishvili" target="_blank"> 
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/vazha-metskhvarishvili-6b98a921a/" target="_blank">  
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                </div>
                <div>
                    <a href="https://www.facebook.com/vazha.metskhvarishvili" target="_blank" >
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;