import React from "react";

import App from "./App.jsx";
import { SongProvider } from "../../Context/SongContext.jsx";
import { SearchProvider } from "../../Context/SearchContext.jsx";

const Layout = ({children}) => {

    return (
        <SongProvider>

            <SearchProvider>

                <App children={ children }/>

            </SearchProvider>

        </SongProvider>
    );
}

export default Layout;
