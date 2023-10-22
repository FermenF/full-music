import React, { useContext } from "react";
import { SongContext } from "../../Context/SongContext";
import { truncateTitle } from "../../../Utils/utils";
import AudioController from "./AudioController";

const PlayBanner = () => {
    const { song: { info } } = useContext(SongContext);

    return (
        <div id="bottom-banner" tabIndex="-1" className="fixed text-black bottom-0 left-0 z-50 flex justify-between items-center w-full p-2 md:px-5 rounded-md bg-white">
            <div className="grid grid-cols-5 grid-rows-2 lg:grid-rows-1 gap-0 items-center w-full">
                <div className="flex items-center col-start-1 col-span-3 lg:col-span-1">
                    <img src={ info.image } className="img-fluid h-16 w-16 rounded-md" />
                    <div className="md:ml-3 ml-1">
                        <div className="font-bold text-sm">
                            <h1>{ truncateTitle(info.title, 20) }</h1>
                        </div>
                        <div className="text-gray-900 font-extralight text-xs">
                            <h5>{ info.name }</h5>
                        </div>
                    </div>
                    <div className="md:ml-3 ml-1.5">
                        <svg className="w-5 h-5 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 19">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z" />
                        </svg>
                    </div>
                </div>
                <div className="col-span-5 lg:col-span-3">
                    <AudioController />
                </div>
                <div className="text-center col-start-4 col-span-2 row-start-1 lg:col-span-1 lg:col-start-5">
                    <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.111 5.889a5.888 5.888 0 0 1 0 6.222M9.349 1.415 4 6H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2l5.349 4.585A1 1 0 0 0 11 15.826V2.174a1 1 0 0 0-1.651-.759Z"/>
                        </svg>
                        <input id="small-range" type="range" className="w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer range-sm " />
                        <svg className="w-4 h-4 ml-1 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.111 5.889a5.888 5.888 0 0 1 0 6.222M17.173 2.7A11.372 11.372 0 0 1 19 9a11.4 11.4 0 0 1-1.777 6.222M9.349 1.415 4 6H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2l5.349 4.585A1 1 0 0 0 11 15.826V2.174a1 1 0 0 0-1.651-.759Z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayBanner;
