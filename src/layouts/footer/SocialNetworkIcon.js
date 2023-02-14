import React from 'react';

const SocialNetworkIcon = ({icon, link}) => {
    return (
        <a href={link} rel="noreferrer" target="_blank" >
            {icon}
        </a>
    );
}

export default SocialNetworkIcon;