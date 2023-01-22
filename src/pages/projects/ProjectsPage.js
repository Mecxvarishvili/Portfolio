import React, { useState } from 'react';
import ProjectCart from './ProjectCard';
import SingleProject from './SingleProject';

const ProjectsPage = () => {
    const [ singleProject, setSingleProject ] = useState('')

    const project = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
    var projectData = [
    {
        name: "amazon clone",
        describe: "string",
        tech: ["React", "Redux", "Sass", ""],
        img: "https://files.fm/thumb_show.php?i=bx6u2f6fc",
        url: "https://amazonclonevm.netlify.app/",
        github: "https://github.com/Mecxvarishvili/Amazon-Clone"
    },
    {
        name: "eCommerce Exercise",
        describe: "this website is eCommerce exercise with filter",
        tech: ["React", "Class Component", "Redux", "Sass",],
        img: "https://files.fm/thumb_show.php?i=c2b6zxcek",
        url: "https://swecommerce.netlify.app/",
        github: "https://github.com/Mecxvarishvili/Scandiweb-eCommerce"
    },
];
    return (
        <div className="projectPage">
            <div>Projects</div>
            <div className="projectsCont" >
                {projectData.map((el, i) => {
                    return (
                       <div >
                        <ProjectCart key={el.name} data={el} setSingleProject={setSingleProject} />
                        {singleProject === el.name && <SingleProject key={i} data={el} setSingleProject={setSingleProject} />}
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default ProjectsPage;