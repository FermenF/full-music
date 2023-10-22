import React, { useContext } from "react";
import { SongContext } from "../../Context/SongContext";
import { truncateTitle } from "../../../Utils/utils";
import AudioController from "./AudioController";

const PlayBanner = () => {
    const { song: { info } } = useContext(SongContext);
    
    return (
        <div id="bottom-banner" tabIndex="-1" className="fixed text-white bottom-0 left-0 z-50 flex justify-between items-center w-full p-2 px-5 rounded-md bg-slate-800">
            <div className="flex items-center">
                <img src={ info.image } className="img-fluid h-16 w-16 rounded-md" />
                <div className="ml-3">
                    <div className="font-bold text-sm">
                        <h1>{ truncateTitle(info.title, 20) }</h1>
                    </div>
                    <div className="text-gray-500 font-extralight text-xs">
                        <h5>{ info.name.name }</h5>
                    </div>
                </div>
                <div className="ml-3">
                    <svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 19">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z" />
                    </svg>
                </div>
            </div>
            <AudioController />
            <div className="">
                <p>ALGUNOS BOTONES DE ACCIÓN</p>
            </div>
        </div>
    );
};

export default PlayBanner;
