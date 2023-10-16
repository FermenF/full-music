import React from "react"

const AlbumCard = ({ album }) => {

    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    function trunkTitle(text, maxLongth) {
        if (text.length > maxLongth) {
          return text.slice(0, maxLongth) + '...';
        }
        return text;
    }

    const record_type = capitalizeFirstLetter(album.record_type);

    return(
        <div className="w-[150px]">
            <img src={ album.cover_medium } className="rounded-2xl" loading="lazy"/>
            <div className="text-white mt-3 pb-4">
                <h1 className="font-bold">
                    { trunkTitle(album.title, 15) }
                </h1>
                <span>{ album.release_date } | { record_type }</span>
            </div>
        </div>
    );
}

export default AlbumCard;
