import React from "react";
import Layout from "../Components/userLogged/Layout";
import ArtistImage from "./components/ArtistImage";
import ArtistSongs from "./components/ArtistSongs";

const Show = (props) => {
    const { artist: { dreezer }, artist: { musicBz }, tops, album } = props;

    console.log(props);

    return (
        <Layout>
            <div className="grid grid-cols-1 mt-1 md:grid-cols-7 grid-rows-1 md:gap-3 w-full h-full">
                <div className="col-span-1 md:col-span-5 row-span-1 rounded-md">
                    <div className="md:h-full md:w-full overflow-y-auto max-h-[90.9vh]">
                        <ArtistImage
                            image={dreezer.picture_xl}
                            name={dreezer.name}
                            country={musicBz.country}
                            country_name={musicBz.area.name}
                        />
                        <div className="bg-gradient-to-b from-gray-600 via-gray-800 to-gray-950 p-5">
                            <ArtistSongs tops={ tops } className="mb-5"/>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 md:col-span-2 row-span-1 bg-red-500">
                </div>
            </div>
        </Layout>
    );
};

export default Show;
