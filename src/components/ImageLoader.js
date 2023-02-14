import React, { useState } from 'react';

const ImageLoader = ({img}) => {
    const [ isLoading, setIsLoading ] = useState(true)
    return (
        <div className="image-loader-cont">
            <img src={img} onLoad={() =>setIsLoading(false)} />
            {isLoading && 
            <div className="image-loader">
                <div className="lds-ripple"><div></div><div></div></div>
            </div>}
        </div>
    );
};

export default ImageLoader;