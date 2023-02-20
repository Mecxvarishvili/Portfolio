import React, { useState } from 'react';
import ProjectCart from './ProjectCard';
import SingleProject from './SingleProject';


const ProjectsPage = () => {
    const [ singleProject, setSingleProject ] = useState('')

    const project = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
    var projectData = [
    {
        name: "Amazon Clone",
        describe: "The Amazon clone website will be designed to mimic the functionalities of the original Amazon website. It will include the following pages: Home page, Sign in Page, Sign up Page, Profile Page, Cart Page. The website will have multiple functions, including:search bar, add to cart authorization.",
        tech: ["React", "Redux", "Sass", "Express.js"],
        img: require("../../img/amazon.png"),
        url: "https://amazonclonevm.netlify.app/",
        github: "https://github.com/Mecxvarishvili/Amazon-Clone"
    },
    {
        name: "eCommerce Exercise",
        describe: "An eCommerce website typically has several key pages, including: Category page, Single product page, Cart page. In addition to these pages, an eCommerce website should also have the following functions: Product filter, Add to cart.",
        tech: ["React", "Class Component", "Redux", "Sass",],
        img: require("../../img/swecommerce.png"),
        url: "https://swecommerce.netlify.app/",
        github: "https://github.com/Mecxvarishvili/Scandiweb-eCommerce"
    },
];
    return (
        <div className="projectPage">
            <div className="mainTitle">Projects</div>
            <div className="projectsCont" >
                {projectData.map((el, i) => {
                    return (
                       <div className="project" key={el.name} >
                        <ProjectCart  data={el} setSingleProject={setSingleProject} />
                        {singleProject === el.name && <SingleProject  data={el} setSingleProject={setSingleProject} />}
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default ProjectsPage;