import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ABOUT_PAGE, CONTACT_PAGE, HOME_PAGE, PROJECTS_PAGE, RESUME_PAGE } from '../../components/routes';
import RouteGetter from './RouteGetter';

const Header = () => {
    console.log(window.location)
    const [ routes, setRoutes ] = useState("hideBar")
    const routesCont = () => {
        if(routes == "visibleBar") {
            setRoutes("hideBar")
        } else {
            setRoutes("visibleBar")

        }
    }
    return (
        <div className="header" >
            <div className="container" >
                <Link className="logo" to={HOME_PAGE}>logo</Link>
                <button onClick={() => routesCont()} className="burgerMenu" >bar</button>
                <div className={"routesCont " + routes} >
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