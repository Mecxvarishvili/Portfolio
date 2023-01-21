
import React from 'react';

const ProjectCard = ({data, setSingleProject}) => {

    return (
        <div className="projectCard">
            <img src={data.img} />
            <div className="hoverBox" onClick={() => setSingleProject(data.name)}>
                <div className="title">{data.name}</div>
            </div>
        </div>
    )
}

export default ProjectCard;