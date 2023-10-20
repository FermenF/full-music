import React, { useContext } from "react";
import NavBarAndSearch from "../../Dashboard/components/NavBarAndSearch.jsx";
import Library from "../../Dashboard/components/Library.jsx";
import Header from "../../Dashboard/components/Header.jsx";
import PlayBanner from "../../Dashboard/components/PlayBanner.jsx";
import { SongContext } from "../../Context/SongContext.jsx";

const App = ({children}) => {

    const { song } = useContext(SongContext);

    return (
        <div className="flex flex-col min-h-screen overflow-hidden bg-gray-800 p-1">
            <div className="grid grid-cols-1 md:flex-grow md:grid-cols-12 md:grid-rows-2 md:gap-1">
                <div className="overflow-hidden rounded-md md:row-span-2 md:col-span-4 lg:col-span-3 xl:col-span-2">
                    <NavBarAndSearch />
                    <Library />
                </div>
                <div className="overflow-hidden md:flex-grow w-full h-full md:col-span-8 lg:col-span-9 row-span-2 xl:col-span-10 rounded-md">
                    <div className="hidden md:block">
                        <Header />
                    </div>
                    <div className="w-full h-full">
                        {children}
                    </div>
                </div>
            </div>
            {
                song && (
                    <PlayBanner />
                )
            }
        </div>
    );
};

export default App;