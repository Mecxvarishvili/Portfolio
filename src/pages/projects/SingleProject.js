import React from "react";

const SingleProject = ({data}) => {
    return (
        <div className="singleProject">
            <div className="singleCont">
                <div>exit</div>
                <div>{data.name}</div>
                <img src={data.imgg} />
                <div className="box">
                    <div className="title">About</div>
                    <div>{data.description}</div>
                </div>
                <div className="box">
                    <div className="title">technologies</div>
                    <div>{data.description}</div>
                </div>
                <div className="box">
                    <div className="title">website</div>
                    <div>{data.description}</div>
                </div>
                {data.github && 
                <div className="box">
                    <div className="title">github</div>
                    <div>{data.description}</div>
                </div>}
            </div>
        </div>
    )
}

export default SingleProject;