import React from "react"
import Layout from '../Components/userLogged/Layout';
import ArtistImage from "./components/ArtistImage";

const Show = (props) => {
    const { artist:{ dreezer }, artist:{ musicBz }, album } = props;

    console.log(musicBz);

    return (
        <Layout>
            <div className="grid grid-cols-7 grid-rows-1 gap-4 w-full h-full p-1 max-h-[91vh]">
                <div className="col-span-5 bg-red-300 overflow-y-auto ">
                    <ArtistImage image={ dreezer.picture_xl } name={ dreezer.name } country={ musicBz.country } country_name={ musicBz.area.name }/>
                    <div className="h-full mt-2 w-full bg-red-700">

                    </div>
                </div>
                <div className="col-span-2 bg-red-300 col-start-6">4</div>
            </div>
        </Layout>
    );
}

export default Show;
