import React, { useContext, useState } from "react";
import NavBarAndSearch from "../../Dashboard/components/NavBarAndSearch.jsx";
import Library from "../../Dashboard/components/Library.jsx";
import Header from "../../Dashboard/components/Header.jsx";
import PlayBanner from "../../Dashboard/components/PlayBanner.jsx";
import { SongContext } from "../../Context/SongContext.jsx";
import { SearchContext } from "../../Context/SearchContext.jsx";
import { useForm } from "@inertiajs/react";
import { router } from '@inertiajs/react'

import './style.css';

const App = ({ children }) => {

    const { song } = useContext(SongContext);
    const { search, handleSearch } = useContext(SearchContext);

    const { data, setData, get } = useForm({
        'query': ''
    });

    const handleKeyDownSearch = () => {
        router.visit(`/search/${ data.query }`)
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleKeyDownSearch();
        }
    }

    return (
        <div>
            {
                search === false ? (
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
                    </div>
                ) : (
                    <div className='absolute w-full flex items-center justify-center container-input bottom-0 right-0 top-0 left-0 z-50'>
                        <button type="button" className='absolute border-2 border-bg-white rounded-full p-2 top-0 left-0 text-3xl m-5 text-white' onClick={() => handleSearch()}>
                            <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                        </button>
                        <input type="text" className='p-2 bg-transparent text-2xl md:text-4xl w-72 md:w-5/12 inputStyle' placeholder='Search Song, Artist, Album...'
                            value={data.query}
                            onChange={e => setData('query', e.target.value)}
                            onKeyDown={handleKeyPress}
                        />
                    </div>
                )
            }
            {
                song && (
                    <>
                        <PlayBanner />
                    </>
                )
            }
        </div>
    );
};

export default App;
