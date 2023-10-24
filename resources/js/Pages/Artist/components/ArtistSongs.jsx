import React, { useContext, useEffect } from 'react';
import { getSongFromYoutube, truncateTitle, covertDuration } from '../../../Utils/utils.js';
import { SongContext } from '../../Context/SongContext.jsx';

const ArtistSongs = (props) => {

    const tops_data = props.tops.data;
    const { artist } = props;
    const { next } = props.tops;

    const { song, setSong, songs, setSongs, nextPageUrl, setNextPageUrl, loadMoreSongs } = useContext(SongContext);

    console.log(tops_data);

    useEffect(() => {
        setSongs(tops_data);
        setNextPageUrl(next);
    }, [tops_data, next]);

    async function playSong(e, title, artist, duration, image, id) {
        e.preventDefault();
        const data = await getSongFromYoutube(title, artist, duration, image, id);
        if (data) {
            setSong(data);
        }
    }

    return (
        <div className="w-full">
            <div className="text-white">
                <h1 className="font-extrabold text-2xl">Popular</h1>
                <div className="mt-3">
                    {songs ? (
                        songs.map((top, index) => (
                            <div key={index + 1}
                                onClick={(event) => playSong(
                                    event,
                                    top.title,
                                    artist,
                                    covertDuration(top.duration),
                                    top.album.cover_small,
                                    top.id
                                )}
                                className={`hover:bg-gray-500 p-3 flex items-center justify-between cursor-pointer rounded-md my-3 ${song && song.info && song.info.drezzerId === top.id && "bg-gray-500"}`}>
                                <div className="md:p-3 flex items-center">
                                    <div className="md:ml-3 mr-1 md:mr-5 text-gray-300">{index + 1}</div>
                                    <img className="img-fluid rounded-md" src={top.album.cover_small} alt="Album Cover" />
                                    <div className="ml-3 font-bold md:hidden">{truncateTitle(top.title, 29)}</div>
                                    <div className="ml-3 font-bold hidden sm:block">{top.title}</div>
                                </div>
                                <div className="md:p-3 md:mx-3 text-gray-300">{covertDuration(top.duration)}</div>
                            </div>
                        ))
                    ) : (
                        <p>Cargando canciones...</p>
                    )}
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

export default ArtistSongs;
