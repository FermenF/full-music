import React, { useContext, useState } from 'react';

import { getListSongs, getSong } from '../../../../js/services/youtubeService.js'
import { SongContext } from '../../Context/SongContext.jsx';

const ArtistSongs = (props) => {

    const { artist } = props;
    const { next } = props.tops
    const tops_data = props.tops.data;

    const [currentTops, setCurrentTops] = useState(tops_data);
    const [nextPageUrl, setNextPageUrl] = useState(next);
    const { setSong } = useContext( SongContext );

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

    async function getSongFromYoutube(e, title, artist, duration) {
        e.preventDefault();
        try {
            const response = await getListSongs(title, artist, duration);
            const songResponse = await getSong(response.id);

            if (songResponse.status === 200) {
                const audioBlob = await songResponse.blob();
                const url = URL.createObjectURL(audioBlob);
                setSong(url)
            } else {
                console.error('Error al obtener la canción');
            }
        } catch (error) {
            console.error('Error en la solicitud: ', error);
        }
    }

    return (
        <div className="w-full">
            <div className="text-white">
                <button type='button' id='testinBtn'>ok</button>
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

function trunkTitle(text, maxLongth) {
    if (text.length > maxLongth) {
        return text.slice(0, maxLongth) + '...';
    }
    return text;
}

export default ArtistSongs;
