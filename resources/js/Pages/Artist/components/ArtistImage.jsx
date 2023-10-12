import React from "react";
import Flag from 'react-world-flags'

import "./styles.css";

const ArtistImage = ({ image, name, country, country_name }) => {
    return(
        <div className='rounded-md relative h-4/6 w-full' style={{
            'backgroundImage': `linear-gradient(to right, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0)),
             url('${ image }')`,
            'backgroundSize': 'cover',
            'backgroundPosition': 'auto center'
            }}>
            <div className="absolute bottom-0 p-5">
                <div className="flex items-center">
                    <Flag code={ country } className="h-10 w-14 ml-1.5"/>
                    <strong className="text-white ml-2">{ country_name }</strong>
                </div>
                <h1 className="text-7xl font-extrabold tracking-wide text-white">
                    { name }
                </h1>
            </div>
        </div>
    )
}

export default ArtistImage;
