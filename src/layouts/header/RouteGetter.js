import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const RouteGetter = ({href, func, transition}) => {
    const [ active, setActive ] = useState('')
    const location = useLocation()
    useEffect(() => {
        if(window.location.pathname === href) {
            setActive("routeActive")
        } else {
            setActive("")
        }

    }, [location.pathname])
    return (
        <li onClick={() => {func("hideBar", true, "")/* ; transition() */}} className={`${active} liBottomHover`}><Link to={href}>{href.replace("/", "")}</Link></li>
    );
};

export default RouteGetter;