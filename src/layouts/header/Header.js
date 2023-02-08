import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ABOUT_PAGE, CONTACT_PAGE, HOME_PAGE, PROJECTS_PAGE, RESUME_PAGE } from '../../components/routes';
import RouteGetter from './RouteGetter';
import logo from "../../img/logo.png"

const Header = ({viewBar, setAnimation}) => {
    const [ menu, setMenu ] = useState("")
    
    useEffect(() => {
        if(viewBar === "visibleBar") {
            setMenu("open")
        } else {
            setMenu("")
        }
    }, [viewBar])

    return (
        <div className="header" >
            <div className="container" >
                <Link className="logo" to={HOME_PAGE}>
                    <img src={logo} alt="logo" />
                </Link>
                <div onClick={() => setAnimation((current) => !current)} className={"burgerMenu " + menu}>    
                    <div className="icon-left"></div>
                    <div className="icon-right"></div>
                </div>
                <div className={"routesCont " + viewBar} >
                    <ul>
                        <RouteGetter href={ABOUT_PAGE} />
                        <RouteGetter href={PROJECTS_PAGE} />
                        <RouteGetter href={RESUME_PAGE} />
                        <RouteGetter href={CONTACT_PAGE} />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;