import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ABOUT_PAGE, CONTACT_PAGE, HOME_PAGE, PROJECTS_PAGE, RESUME_PAGE } from '../../components/routes';
import RouteGetter from './RouteGetter';

const Header = (props) => {
    const [ bar, setBar ] = useState("hideBar")
    const [ menu, setMenu ] = useState("")
    const routesCont = () => {
        if(bar == "visibleBar") {
            menuFunc("hideBar", true, "")
        } else {
            menuFunc("visibleBar", false, "open")
        }
    }

    const menuFunc = (bar, visible, menu) => {
        setBar(bar)
        props.setVisible(visible)
        setMenu(menu)
    } 
    return (
        <div className="header" >
            <div className="container" >
                <Link className="logo" to={HOME_PAGE}>logo</Link>
                <div onClick={() => routesCont()} className={"burgerMenu " + menu} data-menu="12">    
                    <div class="icon-left"></div>
                    <div class="icon-right"></div>
                </div>
                <div className={"routesCont " + bar} >
                    <ul>
                        <RouteGetter href={ABOUT_PAGE} />
                        <RouteGetter href={PROJECTS_PAGE} />
                        <RouteGetter href={RESUME_PAGE} />
                        <RouteGetter href={CONTACT_PAGE} />
                        <li>daynight</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;