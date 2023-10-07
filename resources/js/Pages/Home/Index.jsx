import React from "react";
import Layout from '../Components/Layouts/Layout.jsx';
import Title from "./components/Title.jsx";
import Favourites from "./components/Favourites.jsx";
import ArtistWithSearch from "./components/ArtistWithSearch.jsx";

const Index = () => {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
    <nav className="bg-gray-200 p-4">
        Esto es un nav
    </nav>
    <Layout>
        <div className="flex-grow grid grid-cols-1 md:grid-cols-3 md:m-3 grid-rows-3 md:grid-rows-1 md:gap-1">
            <div className="col-span-1 md:col-span-1 row-span-1 flex flex-col justify-between">
                <div className="flex-grow m-1 md:my-2 flex justify-center items-center md:h-2/4">
                    <Title />
                </div>
                <div className="flex-grow m-1 md:my-2 md:h-2/4">
                    <Favourites />
                </div>
            </div>
            <div className="col-span-1 md:col-span-1 row-span-1 flex flex-col justify-between">
                <div className="md:flex-grow m-1 md:my-2 md:h-2/4 md:flex items-center">
                    <ArtistWithSearch />
                </div>
                <div className="bg-blue-300 flex-grow m-1 md:my-2 md:h-2/4">D</div>
            </div>
            <div className="col-span-1 md:col-span-1 row-span-1 flex flex-col justify-between">
                <div className="bg-orange-300 flex-grow m-1 md:my-2">E</div>
            </div>
        </div>
    </Layout>
</div>

    );
}

export default Index;
