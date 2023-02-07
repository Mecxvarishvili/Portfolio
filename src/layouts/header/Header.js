import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ABOUT_PAGE, CONTACT_PAGE, HOME_PAGE, PROJECTS_PAGE, RESUME_PAGE } from '../../components/routes';
import RouteGetter from './RouteGetter';
import logo from "../../img/logo.png"

const Header = (props) => {
    const [ bar, setBar ] = useState("hideBar")
    const [ menu, setMenu ] = useState("")

    const routesCont = () => {
        if(bar === "visibleBar") {
            menuFunc("hideBar", true, "")
        } else {
            menuFunc("visibleBar", false, "open")
        }
    }

    const menuFunc = (bar, visible, menu) => {
        setBar(bar)
        props.setMainVisible(visible)
        setMenu(menu)
    } 

    return (
        <div className="header" >
            <div className="container" >
                <Link className="logo" 
                    onClick={() =>{if(window.location.pathname === HOME_PAGE) 
                    menuFunc("hideBar", true, "")}} 
                    to={HOME_PAGE}
                >
                    <img src={logo} alt="logo" />
                </Link>
                <div onClick={() => {routesCont()}} className={"burgerMenu " + menu}>    
                    <div className="icon-left"></div>
                    <div className="icon-right"></div>
                </div>
                <div className={"routesCont " + bar} >
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