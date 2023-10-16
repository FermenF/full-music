import React, { useState } from 'react';
import getListSongs from '../../../../js/services/youtubeService.js'
import youtube from '@yimura/scraper'

const ArtistSongs = ({ tops: { data, next }, artist }) => {

    const [currentTops, setCurrentTops] = useState(data);
    const [nextPageUrl, setNextPageUrl] = useState(next);

    const loadMoreSongs = () => {
        if (nextPageUrl) {
            fetch(nextPageUrl)
                .then(response => response.json())
                .then(newSongsData => {
                    setCurrentTops(prevTops => [...prevTops, ...newSongsData.data]);
                    setNextPageUrl(newSongsData.next);
                });
        }
    };

    function trunkTitle(text, maxLongth) {
        if (text.length > maxLongth) {
            return text.slice(0, maxLongth) + '...';
        }
        return text;
    }

    const getSongFromYoutube = async (e, title, artist, duration) => {
        try {
            const yt = new youtube.default();
            yt.search('Never gonna give you up').then(results => {
                console.log(results.videos[0]);
            });

        } catch (error) {
            console.log("error", error);
        }

        // e.preventDefault();
        // try {
        //     const result = await getListSongs(title, artist, duration);
        //     console.log("Canción encontrada en YouTube:", result);
        // } catch (error) {
        //     console.error("Error al obtener la canción de YouTube:", error);
        // }
    }


    return (
        <div className="w-full">
            <div className="text-white">
                <h1 className="font-extrabold text-2xl">Popular</h1>
                <div className="mt-3">
                    {
                        currentTops.map((top, index) => (
                            <div key={index + 1} onClick={(event) => getSongFromYoutube(event, top.title, artist, covertDuration(top.duration))} className="hover:bg-gray-500 p-3 flex items-center justify-between cursor-pointer rounded-md my-3">
                                <div className="md:p-3 flex items-center">
                                    <div className="md:ml-3 mr-1 md:mr-5 text-gray-300">{index + 1}</div>
                                    <img className="img-fluid rounded-md" src={top.album.cover_small} alt="Album Cover" />
                                    <div className="ml-3 font-bold md:hidden">{trunkTitle(top.title, 29)}</div>
                                    <div className="ml-3 font-bold hidden sm:block">{top.title}</div>
                                </div>
                                <div className="md:p-3 md:mx-3 text-gray-300">{covertDuration(top.duration)}</div>
                            </div>
                        )
                        )
                    }
                </div>
            </div>
            {
                nextPageUrl && (
                    <button onClick={loadMoreSongs} className="text-gray-400 cursor-pointer mt-3">
                        Ver más
                    </button>
                )
            }
        </div>
    );
};

function covertDuration(duration) {
    const min = Math.floor(duration / 60);
    const seg = duration % 60;
    return `${min}:${seg}`;
}

export default ArtistSongs;
