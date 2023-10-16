const baseUrl = 'https://www.googleapis.com/youtube/v3';
const apiKey = 'key=AIzaSyAB6jrrKXSRNxXepgb1ZgDzQ6Q45KTlRZg';

async function getListSongs(song_name, artist_name, duration) {

}

async function getSong(songs, duration = null) {
    const ids = songs.map(song => song.id.videoId).join(',');

    try {
        const response = await fetch(`${baseUrl}/videos?part=contentDetails&id=${ids}&${apiKey}`);
        const data = await response.json();

        if (duration) {
            return compareDurations(data.items, duration);
        }
    } catch (error) {
        console.error("Error al obtener la canción:", error);
    }
}

function compareDurations(songs, durationDeezer) {
    const [targetMinutes, targetSeconds] = durationDeezer.split(':').map(Number);
    const targetTotalSeconds = targetMinutes * 60 + targetSeconds;

    for (const song of songs) {
        const { duration } = song.contentDetails;
        const [songMinutes, songSeconds] = duration.match(/PT(\d+)M(\d+)S/).slice(1).map(Number);
        const songTotalSeconds = songMinutes * 60 + songSeconds;

        if (Math.abs(songTotalSeconds - targetTotalSeconds) <= 5) {
            console.log("entro");
            return song;
        }
    }
    return "nafa";
}

export default getListSongs;
