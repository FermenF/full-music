import React, { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {

    const [search, setSearch] = useState(false);

    const handleSearch = () => {
        setSearch(!search);
    }

    return(
        <SearchContext.Provider
            value={{ search, handleSearch }}
        >
            {children}
        </SearchContext.Provider>
    );
};
