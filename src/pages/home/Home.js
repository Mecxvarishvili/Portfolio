import React from 'react';
import { Link } from 'react-router-dom';
import { ABOUT_PAGE, CONTACT_PAGE, PROJECTS_PAGE, RESUME_PAGE } from '../../components/routes';

const Main = () => {

    return (
        <div className="homePage">
            <div className="name" >i'm vazha metskhvarishvili</div>
            <div className="dit1" >Junior Front-end Developer / React.js</div>
            <div className='routediv'>
                Working with my hands without ChatGPT, Check other page<> </>
                <Link to={CONTACT_PAGE}>Contact</Link>,<> </>
                <Link to={ABOUT_PAGE} >About</Link>,<> </>
                <Link to={PROJECTS_PAGE} >Projects</Link>,<> </>
                <Link to={RESUME_PAGE}>Resume</Link>.
            </div>
        </div>
    );
};

export default Main;