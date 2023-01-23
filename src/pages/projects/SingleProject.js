import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const SingleProject = ({data, setSingleProject}) => {
    return (
        <div onClick={() => setSingleProject("")} className="singleProject">
            <div  onClick={(e) => e.stopPropagation()} className="singleCont">
                <div className="inSingleCont" >
                    <div className="exitBox" onClick={() => setSingleProject("")} >
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </div>
                    <div className="singleTitle">{data.name}</div>
                    <img src={data.img} />
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
                        <div className="title">website</div>
                        <a className="url" href={data.url} target="_blink" >{data.url}</a>
                    </div>
                    {data.github && 
                    <div className="box">
                        <div className="title">github</div>
                        <a className="url" href={data.github} target="_blink" >{data.github}</a>
                    </div>}
                    <a className="footerButton" href={data.url} target="_blink">open Project</a>
                </div>
            </div>
        </div>
    )
}

export default SingleProject;