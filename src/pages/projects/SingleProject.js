import React from "react";

const SingleProject = ({data, setSingleProject}) => {
    return (
        <div onClick={() => setSingleProject("")} className="singleProject">
            <div  onClick={(e) => e.stopPropagation()} className="singleCont">
                <div onClick={() => setSingleProject("")} >exit</div>
                <div>{data.name}</div>
                <img src={data.img} />
                <div className="box">
                    <div className="title">About</div>
                    <div>{data.describe}</div>
                </div>
                <div className="box">
                    <div className="title">technologies</div>
                    <div>
                        {data.tech.map((el, i) => {
                            return(
                                <span key={i}>{el}</span>
                            )})}
                    </div>
                </div>
                <div className="box">
                    <div className="title">website</div>
                    <div>{data.url}</div>
                </div>
                {data.github && 
                <div className="box">
                    <div className="title">github</div>
                    <div>{data.github}</div>
                </div>}
            </div>
        </div>
    )
}

export default SingleProject;