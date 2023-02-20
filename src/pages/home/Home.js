import React from 'react';
import { Link } from 'react-router-dom';
import { ABOUT_PAGE, CONTACT_PAGE, PROJECTS_PAGE, RESUME_PAGE } from '../../components/routes';

const Main = () => {

    return (
        <div className="homePage">
            <div className="name" >i'm vazha metskhvarishvili</div>
            <div className="dit1" >Junior Front-end Developer. {/* Here, you can find information about my skills, experience, and projects. */} </div>
            <div className='routediv'>
            Feel free to explore the different pages on this website, including my <Link to={CONTACT_PAGE}>Contact</Link>, <Link to={PROJECTS_PAGE} >Projects</Link>, <Link to={RESUME_PAGE}>Resume</Link>, <Link to={ABOUT_PAGE} >About Me</Link>. Thank you for visiting, and please don't hesitate to get in touch if you have any questions!
            </div>
        </div>
    );
};

export default Main;