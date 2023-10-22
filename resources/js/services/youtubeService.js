const baseUrl = 'https://full-music-api.fermenf.com/api/v1';
// const baseUrl = 'http://localhost:3333/api/v1';

export async function getSong(songId) {
    try{
        const response = await fetch(`${ baseUrl }/download-or-get-song?id=${ songId }`);
        return await response;
    }catch (error) {
        throw error
    };
};

export async function getListSongs(song_name, artist_name, duration) {
    try {
        const response = await fetch(`${baseUrl}/get-songs-list?song=${song_name}&artist=${artist_name}`);
        const result = await response.json();
        return compareDurations(result, duration);
    } catch (error) {
        throw error;
    }; 
};

function compareDurations(songs, durationDeezer) {
    const timeDifference = 10;
    for (const song of songs) {
        const { duration_raw } = song;
        const durationSongInSeconds = parseDurationToSeconds(duration_raw);
        const durationDeezerInSeconds = parseDurationToSeconds(durationDeezer);
        if (Math.abs(durationSongInSeconds - durationDeezerInSeconds) <= timeDifference) {
            return song;
        };
    };
    return songs[0];
};

function parseDurationToSeconds(duration) {
    const [minutes, seconds] = duration.split(':');
    return parseInt(minutes) * 60 + parseInt(seconds);
};
