import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RouteGetter = ({href}) => {
    const [ active, setActive ] = useState('')
    useEffect(() => {
        if(window.location.pathname === href) {
            setActive("routeActive")
        }

    }, [window.location.pathname])
    return (
        /* window.location.pathname !== href  ?  */<li className={`routeBox ${active} liBottomHover`}><Link to={href}>{href.replace("/", "")}</Link></li>/*  : <></> */
    );
};

export default RouteGetter;