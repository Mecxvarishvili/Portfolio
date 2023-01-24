import React from 'react';
import img from "./Vazha-Metskhvarishvili-1.jpg"
import { Link } from 'react-router-dom';
import { CONTACT_PAGE } from '../../components/routes';

const ResumePage = () => {
    return (
        <div className="resumeCont" >
            <div className="mainTitle" >resume</div>
            <div className="resumeAbout" >
                Reach out to me via my
                <Link to={CONTACT_PAGE} >contact page.</Link>
                or
                <a href="https://drive.google.com/file/d/1jqOm65ozBVpYpvwUlCNuWvCXVk5sxO99/view" target="_blank" rel="noreferrer">download</a>
                the resume
            </div>
            <div className="resume-img">
                <img src={img} alt="resume"/>
            </div>
        </div>
    );
};

export default ResumePage;