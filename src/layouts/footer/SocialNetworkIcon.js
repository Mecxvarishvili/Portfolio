import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialNetworkIcon = ({brand, link}) => {
    return (
        <a href={link} rel="noreferrer" target="_blank" >
            <FontAwesomeIcon icon={brand} />
        </a>
    );
}

export default SocialNetworkIcon;