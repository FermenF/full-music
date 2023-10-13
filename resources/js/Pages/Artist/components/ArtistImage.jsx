import React from "react";
import Flag from 'react-world-flags'

const ArtistImage = ({ image, name, country, country_name }) => {
    return (
        <div className="md:h-full md:w-full h-screen flex flex-col overflow-hidden">
            <div className="w-full h-2/5 bg-blue-500 relative" style={{
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0)), url('${image}')`,
                backgroundSize: 'cover',
                width: '100%'
            }}>
                <div className="absolute bottom-0 text-white p-5">
                    <div className="flex items-center">
                        <Flag code={ country } className="h-6 w-7 mx-1"/>
                        <strong>{ country_name }</strong>
                    </div>
                    <h1 className="text-4xl font-extrabold">
                        { name }
                    </h1>
                </div>
            </div>
            <div className="w-full h-3/5 bg-red-200"></div>
        </div>
    );
};

export default ArtistImage;
