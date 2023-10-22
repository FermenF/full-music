import { getListSongs, getSong } from '../services/youtubeService.js';

export function truncateTitle(text, maxLength) {
    if (text.length > maxLength) {
        return text.slice(0, maxLength) + '...';
    }
    return text;
}

export async function getSongFromYoutube(title, artist, duration, image, id) {
    try {
        const response = await getListSongs(title, artist, duration);
        const songResponse = await getSong(response.id);

        const audioBlob = await songResponse.blob();
        const url = URL.createObjectURL(audioBlob);

        const data = {
            url,
            info: {
                'drezzerId': id,
                'name': artist,
                'title': title,
                'image': image
            }
        };

        return data;
    } catch (error) {
        console.error('Error en la solicitud:', error);
        throw error;
    }
}

export function covertDuration(duration) {
    const min = Math.floor(duration / 60);
    const seg = duration % 60;
    return `${min}:${seg}`;
}
