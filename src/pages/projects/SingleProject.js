import React from "react";
import ImageLoader from "../../components/ImageLoader";
import { SlGlobe } from 'react-icons/sl';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { BsGithub, BsBoxArrowLeft } from 'react-icons/bs';


const SingleProject = ({data, setSingleProject}) => {
    return (
        <div onClick={() => setSingleProject("")} className="singleProject">
            <div  onClick={(e) => e.stopPropagation()} className="singleCont">
                <div className="inSingleCont" >
                    <div className="exitBox" onClick={() => setSingleProject("")} >
                        <BsBoxArrowLeft/>
                    </div>
                    <div className="singleTitle">{data.name}</div>
                    <ImageLoader img={data.img} />
                    <div className="box">
                        <div className="title">About</div>
                        <div className="describe" >{data.describe}</div>
                    </div>
                    <div className="box">
                        <div className="title">technologies</div>
                        <div className="skills">
                            {data.tech.map((el, i) => {
                                return(
                                    <span key={i}>{el}</span>
                                )})}
                        </div>
                    </div>
                    <div className="box">
                        <span>
                            <SlGlobe />
                            <div className="title">website</div>
                        </span>
                        <a className="url" href={data.url} target="_blink" >{data.url}</a>
                    </div>
                    {data.github && 
                    <div className="box">
                        <span>
                        <BsGithub />
                        <div className="title">github</div>
                        </span>
                        <a className="url" href={data.github} target="_blink" >{data.github}</a>
                    </div>}
                    <a className="footerButton" href={data.url} target="_blink">
                        <FaExternalLinkAlt />
                        open Project
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SingleProject;