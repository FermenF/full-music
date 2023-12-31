import React from "react";
import Flag from 'react-world-flags'
import './styles.css'

const ArtistImage = ({ image, name, country, country_name }) => {
    return (
            <div className="w-full rounded-t-2xl image-artist h-52 bg-blue-500 relative" style={{
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0)), url('${image}')`,
                backgroundSize: 'cover',
                width: '100%',
                backgroundPosition: 'center center',
            }}>
                <div className="absolute bottom-0 text-white p-5">
                        {
                            country && (
                                <div className="flex items-center ">
                                    <Flag code={ country } className="h-6 w-7 md:h-10 md:w-11 mx-1"/>
                                    <strong>{ country_name }</strong>
                                </div>
                            )
                        }
                    <h1 className="text-4xl md:text-7xl font-extrabold">
                        { name }
                    </h1>
                </div>
            </div>
    );
};

export default ArtistImage;
