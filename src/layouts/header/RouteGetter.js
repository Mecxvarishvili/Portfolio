import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const RouteGetter = ({href}) => {
    const [ activeRoute, setActiveRoute ] = useState('')
    const location = useLocation()
    useEffect(() => {
        if(window.location.pathname === href) {
            setActiveRoute("routeActive")
        } else {
            setActiveRoute("")
        }
    }, [location.pathname])
    return (
        <li className={`${activeRoute} liBottomHover`}><Link to={href}>{href.replace("/", "")}</Link></li>
    );
};

export default RouteGetter;