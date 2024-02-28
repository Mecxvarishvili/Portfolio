import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_PAGE } from '../../components/routes';
import ImageLoader from '../../components/ImageLoader';

const ResumePage = () => {
    return (
        <div className="resumeCont" >
            <div className="mainTitle" >resume</div>
            <div className="resumeAbout" >
                Reach out to me via my <Link to={CONTACT_PAGE} >contact page</Link> or <a href="https://drive.google.com/file/d/1Z7SGL3XoZ1VVxY6aY297pG5Rd3KwGgoW/view" target="_blank" rel="noreferrer">download</a> the resume
                
            </div>
            <div className="resume-img">
                <ImageLoader img={require("../../img/Vazha-Metskhvarishvili1.jpg")} />
            </div>
        </div>
    );
};

export default ResumePage;