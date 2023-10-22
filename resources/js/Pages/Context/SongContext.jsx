import React, { createContext, useState } from "react";
import { covertDuration, getSongFromYoutube } from "../../Utils/utils";

export const SongContext = createContext();

export const SongProvider = ({ children }) => {

    //Song List
    const [songs, setSongs] = useState(null);

    //Next Song in List
    const [nextPageUrl, setNextPageUrl] = useState(null);

    //Song playing in Banner
    const [song, setSong] = useState(null);

    const prevSong = async () => {
        const currentIndex = songs.findIndex(s => s.id === song.info.drezzerId);

        if (currentIndex === -1) {
            return;
        }
        const prevIndex = (currentIndex - 1 + songs.length) % songs.length;

        getSongToPlay(prevIndex);
    };

    const nextSong = async () => {
        const currentIndex = songs.findIndex(s => s.id === song.info.drezzerId);

        if (currentIndex === -1) {
            return;
        }

        let nextIndex = (currentIndex + 1) % songs.length;

        if (nextIndex === 0) {
            loadMoreSongs();
            nextIndex = currentIndex;
            return;
        }

        getSongToPlay(nextIndex);
    };

    const getSongToPlay = async (index) => {
        try {
            const title = songs[index].title;
            const artist = songs[index].artist.name;
            const duration = covertDuration(songs[index].duration);
            const image = songs[index].album.cover_small;
            const id = songs[index].id;

            const data = await getSongFromYoutube(title, artist, duration, image, id);

            if (data) {
                setSong(data);
            }
        } catch (error) {

        }
    };

    //More songs in top
    const loadMoreSongs = () => {
        if (nextPageUrl) {
            fetch(nextPageUrl)
            .then(response => response.json())
            .then(newSongsData => {
                setSongs(prevTops => [...prevTops, ...newSongsData.data]);
                setNextPageUrl(newSongsData.next);
            });
        }
    };

    return(
        <SongContext.Provider
            value={{
                song, setSong,
                songs, setSongs,
                nextPageUrl, setNextPageUrl,
                loadMoreSongs,
                prevSong, nextSong
            }}>
            { children }
        </SongContext.Provider>
    );
};
