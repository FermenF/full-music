import React, { useContext } from "react";
import { covertDuration, getSongFromYoutube, truncateTitle } from "../../../Utils/utils";
import { SongContext } from "../../Context/SongContext";

const RevelantResult = ({ revelantSong }) => {

    const { setSong } = useContext(SongContext);

    async function playSong(e, title, artist, duration, image, id) {
        e.preventDefault();
        const data = await getSongFromYoutube(title, artist, duration, image, id);
        if (data) {
            setSong(data);
        }
    }

    return (
        <div className="col-span-7 lg:col-span-2 h-full text-white ">
            <h1 className="text-2xl text-center lg:text-left lg:text-3xl font-bold mb-5">Most Revelant Result</h1>
            <div className="bg-slate-950 p-5 pb-7 rounded-md">
                <div className="p-5 rounded-md">
                    <img src={
                        revelantSong.album.cover_medium
                    }
                        className="h-28 w-2h-28 rounded-xl"
                        alt="" />
                </div>
                <div className="mx-5">
                    <h1 className="text-2xl lg:text-4xl font-bold wrapper">{ revelantSong.title }</h1>
                    <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-start lg:items-center flex-col lg:flex-row">
                            <strong>{revelantSong.artist.name}</strong>
                            <span className="font-semibold lg:ml-2 bg-blue-500 p-1 lg:p-2 px-3.5 rounded-2xl">
                                {truncateTitle(revelantSong.type)}
                            </span>
                        </div>
                        <button type="button" className="bg-green-500 p-3 py-2.5 rounded-full text-center hover:bg-gray-400"
                            onClick={
                                (event) => playSong(
                                    event,
                                    revelantSong.title,
                                    revelantSong.artist.name,
                                    covertDuration(revelantSong.duration),
                                    revelantSong.album.cover_small,
                                    revelantSong.id
                                )
                            }>
                            <svg className="w-6 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.111 5.889a5.888 5.888 0 0 1 0 6.222M17.173 2.7A11.372 11.372 0 0 1 19 9a11.4 11.4 0 0 1-1.777 6.222M9.349 1.415 4 6H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2l5.349 4.585A1 1 0 0 0 11 15.826V2.174a1 1 0 0 0-1.651-.759Z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RevelantResult;
