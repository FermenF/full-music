import React from "react";
import Layout from '../Components/Layouts/Layout.jsx';
import Title from "./components/Title.jsx";
import Favourites from "./components/Favourites.jsx";
import ArtistWithSearch from "./components/ArtistWithSearch.jsx";
import Discovers from "./components/Discovers.jsx";
import Popular from "./components/Popular.jsx";

const Index = () => {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            <Layout>
                <div className="flex-grow grid grid-cols-1 md:grid-cols-3 md:m-3 grid-rows-3 md:grid-rows-1 md:gap-1">
                    <div className="col-span-1 md:col-span-1 row-span-1 flex flex-col justify-between">
                        <div className="flex-grow m-1 md:my-2 flex justify-center items-center">
                            <Title />
                        </div>
                        <div className="flex-grow m-1 md:my-2 md:h-3/4">
                            <Favourites />
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-2 lg:col-span-1 row-span-1 flex flex-col justify-between">
                        <div className="md:flex-grow m-1 md:my-2 md:flex justify-center items-center md:h-1/4">
                            <ArtistWithSearch />
                        </div>
                        <div className="flex-grow m-1 md:my-2 md:h-3/4">
                            <Discovers />
                        </div>
                    </div>
                    <div className="lg:col-span-1 md:col-span-3 row-span-1 flex flex-col justify-between">
                        <div className="flex-grow m-1 md:my-2">
                            <Popular />
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
}

export default Index;
