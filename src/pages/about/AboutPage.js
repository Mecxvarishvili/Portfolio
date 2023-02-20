import React from 'react';

const AboutPage = () => {
    return (
        <div className="aboutPage" >
            <div className="mainTitle" >about</div>
            <div className='mainDescribe' >I'm Vazha, an experienced junior front-end developer based in Georgia.
            My experience has allowed me to create dynamic, responsive, and highly functional websites and web applications.  
            If you're looking for a web developer to bring your vision to life, I'd be thrilled to hear from you.</div>
            <div className="skillCont" >
                <div className="div1">Here are a few technologies I’ve been working with recently:</div>
                <ul className='skills'>
                    <li>HTML / CSS</li>
                    <li>Javascript (ES6)</li>
                    <li>React</li>
                    <li>SCSS</li>
                    <li>TypeScript</li>
                    <li>Git</li>
                </ul>
            </div>
        </div>
    );
};

export default AboutPage;