import { Link } from '@inertiajs/react';
import React from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const ArtistsGrid = (props) => {
    const { artists } = props;

    const getRandomGradient = () => {
        const colors = [
            'from-blue-300 to-blue-400',
            'from-blue-400 to-blue-500',
            'from-blue-500 to-blue-600',
            'from-blue-600 to-blue-700',
            'from-blue-700 to-blue-800',
            'from-red-300 to-red-400','from-blue-400 to-red-800',
            'from-red-500 to-green-700',
            'from-green-400 to-blue-700',
            'from-purple-400 to-yellow-800',
            'from-pink-400 to-teal-700',
            'from-yellow-400 to-purple-800',
            'from-teal-400 to-pink-700',
            'from-indigo-400 to-orange-700',
            'from-orange-400 to-indigo-700',
            'from-cyan-400 to-rose-700',
            'from-rose-400 to-cyan-700',
            'from-amber-400 to-lime-700',
            'from-lime-400 to-amber-700',
            'from-emerald-400 to-violet-700',
            'from-violet-400 to-emerald-700',
            'from-gray-400 to-gray-700',
            'from-blue-500 to-red-700',
            'from-red-600 to-green-600',
            'from-green-500 to-blue-600',
            'from-purple-500 to-yellow-700',
            'from-pink-500 to-teal-600',
            'from-yellow-500 to-purple-700',
            'from-teal-500 to-pink-600',
            'from-indigo-500 to-orange-600',
            'from-orange-500 to-indigo-600',
            'from-cyan-500 to-rose-600',
            'from-rose-500 to-cyan-600',
            'from-amber-500 to-lime-600',
            'from-lime-500 to-amber-600',
            'from-emerald-500 to-violet-600',
            'from-violet-500 to-emerald-600',
            'from-gray-500 to-gray-600',
            'from-blue-600 to-red-700',
            'from-red-700 to-green-600',
            'from-green-600 to-blue-500',
            'from-purple-600 to-yellow-700',
            'from-pink-600 to-teal-500',
            'from-yellow-600 to-purple-700',
            'from-teal-600 to-pink-500',
            'from-indigo-600 to-orange-500',
            'from-orange-600 to-indigo-500',
            'from-cyan-600 to-rose-500',
            'from-rose-600 to-cyan-500',
            'from-amber-600 to-lime-500',
            'from-lime-600 to-amber-500',
            'from-emerald-600 to-violet-500',
            'from-violet-600 to-emerald-500',
            'from-gray-600 to-gray-500',
            'from-blue-700 to-red-600',
            'from-red-800 to-green-500',
            'from-green-700 to-blue-400',
            'from-purple-700 to-yellow-600',
            'from-pink-700 to-teal-400',
            'from-yellow-700 to-purple-600',
            'from-teal-700 to-pink-400',
            'from-indigo-700 to-orange-400',
            'from-orange-700 to-indigo-400',
            'from-cyan-700 to-rose-400',
            'from-rose-700 to-cyan-400',
            'from-amber-700 to-lime-400',
            'from-lime-700 to-amber-400',
            'from-emerald-700 to-violet-400',
            'from-violet-700 to-emerald-400',
            'from-gray-700 to-gray-400'
        ];

        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    };

    return (
        <ResponsiveMasonry columnsCountBreakPoints={{ 300: 1, 500: 2, 700: 2, 1000: 3, 1400: 5 }} className='rounded-md p-1'>
            <Masonry columnsCount={5} gutter="6px">
                {
                    artists.map((artist, index) => {
                        const randomGradient = getRandomGradient();
                        return (
                            <Link href={`/artists/${artist.id}/${artist.name}`} key={ index }>
                                <div className='rounded-md relative' key={index} style={{
                                    'height': index % 2 ? "300px" : "480px",
                                    'backgroundImage': `linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0)), url('${artist.picture_big}')`,
                                    'backgroundSize': 'cover',
                                    'backgroundPosition': 'center center'
                                }}>
                                    <div className='absolute inset-0 p-10'>
                                        <span className="text-white text-2xl font-bold">{ artist.name }</span>
                                    </div>
                                    <div className={`absolute inset-0 bg-transparent hover:opacity-50 ${randomGradient} hover:bg-gradient-to-bl transition duration-1000`}></div>
                                </div>
                            </Link>
                        );
                    })
                }
            </Masonry>
        </ResponsiveMasonry>
    );
};

export default ArtistsGrid;
