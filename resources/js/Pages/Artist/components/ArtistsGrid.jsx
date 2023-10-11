import React from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const ArtistsGrid = (props) => {
    const { artists } = props;

    return (
        <ResponsiveMasonry columnsCountBreakPoints={{ 300: 1, 500: 2, 700: 2, 1000: 3, 1400: 5 }} className='bg-red-100 rounded-md p-1'>
            <Masonry columnsCount={5} gutter="6px">
                {
                    artists.map((artist, index) => (
                        <div className='rounded-md' key={index} style={{
                            'height': index % 2 ? "300px" : "480px",
                            'backgroundImage': `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url('${artist.picture_big}')`,
                            'backgroundSize': 'cover',
                            'backgroundPosition': 'center center'
                        }}>
                        </div>
                    ))
                }
            </Masonry>
        </ResponsiveMasonry>
    );
};

export default ArtistsGrid;
