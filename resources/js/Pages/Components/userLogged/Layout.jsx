import React from "react";

import { SongProvider } from "../../Context/SongContext.jsx";
import App from "./App.jsx";

const Layout = ({children}) => {

    return (
        <SongProvider>
            <App children={ children }/>
        </SongProvider>
    );
}

export default Layout;
