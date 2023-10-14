import React, { useState } from 'react';

const ArtistSongs = ({ tops: { data, next } }) => {
    const [currentTops, setCurrentTops] = useState(data);
    const [nextPageUrl, setNextPageUrl] = useState(next);

    const loadMoreSongs = () => {
        if (nextPageUrl) {
            fetch(nextPageUrl)
                .then(response => response.json())
                .then(newSongsData => {
                    setCurrentTops(prevTops => [...prevTops, ...newSongsData.data]);
                    setNextPageUrl(newSongsData.next);
                })
                .catch(error => console.error('Error loading more songs:', error));
        }
    };

    return (
        <div className="w-full">
            <div className="text-white">
                <h1 className="font-extrabold text-2xl">Popular</h1>
                <div className="mt-3">
                    {currentTops.map((top, index) => (
                        <div key={index + 1} className="hover:bg-gray-500 flex items-center justify-between rounded-md" >
                            <div className="p-3 flex items-center">
                                <div className="ml-3 mr-5 text-gray-300">{index + 1}</div>
                                <img className="img-fluid rounded-md" src={top.album.cover_small} alt="Album Cover" />
                                <div className="ml-3 font-bold">{top.title}</div>
                            </div>
                            <div className="p-3 mx-3 text-gray-300">{covertDuration(top.duration)}</div>
                        </div>
                    ))}
                </div>
            </div>
            {nextPageUrl && (
                <button onClick={loadMoreSongs} className="text-gray-400 cursor-pointer mt-3">
                    Ver más
                </button>
            )}
        </div>
    );
};

function covertDuration(duration) {
    const min = Math.floor(duration / 60);
    const seg = duration % 60;
    return `${min}:${seg}`;
}

export default ArtistSongs;
