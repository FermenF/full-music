import React from "react";
import Layout from "../Components/userLogged/Layout";
import ArtistImage from "./components/ArtistImage";

const Show = (props) => {
    const { artist: { dreezer }, artist: { musicBz }, album } = props;

    console.log(props.artist);

    return (
        <Layout>
            <div className="grid grid-cols-1 mt-1 md:grid-cols-7 grid-rows-1 md:gap-3 w-full h-full overflow-hidden">
                <div className="col-span-1 md:col-span-5 row-span-1 rounded-md">
                    <ArtistImage
                        image={ dreezer.picture_xl }
                        name={ dreezer.name }
                        country={ musicBz.country }
                        country_name={ musicBz.area.name }
                    />
                </div>
                <div className="col-span-1 md:col-span-2 row-span-1 bg-red-500">
                    1
                </div>
            </div>
        </Layout>
    );
};

export default Show;
