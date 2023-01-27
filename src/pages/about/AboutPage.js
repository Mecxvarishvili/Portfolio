import React from 'react';

const AboutPage = () => {
    return (
        <div className="aboutPage" >
            <div className="mainTitle" >about</div>
            <div  >I'm Vazha Junior Front-end Developer located in Georgia</div>
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