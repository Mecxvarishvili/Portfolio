import React from 'react';
import { Link } from 'react-router-dom';
import { ABOUT_PAGE, CONTACT_PAGE, HOME_PAGE, PROJECTS_PAGE, RESUME_PAGE } from '../../components/routes';
import RouteGetter from './RouteGetter';

const Header = () => {
    console.log(window.location)
    return (
        <div className="header" >
            <div className="container" >
                <Link className="logo" to={HOME_PAGE}>logo</Link>
                <button className="burgerMenu" >bar</button>
                <div className="routesCont" >
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