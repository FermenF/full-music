import React, { createContext, useState } from "react";

export const SongContext = createContext();

export const SongProvider = ({ children }) => {

    const [song, setSong] = useState(null);

    return(
        <SongContext.Provider value={{ song, setSong }}>
            { children }
        </SongContext.Provider>
    );
};
