
import React from 'react';
import ImageLoader from '../../components/ImageLoader';

const ProjectCard = ({data, setSingleProject}) => {

    return (
        <div className="projectCard">
            <ImageLoader img={data.img} />
            <div className="hoverBox" onClick={() => setSingleProject(data.name)}>
                <div className="title">{data.name}</div>
                <div className="skillsCont">
                    {data.tech.map((el) => {
                        return (
                            <div className="skill" key={el} >{el}</div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;