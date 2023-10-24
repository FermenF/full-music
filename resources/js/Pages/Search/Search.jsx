import React from "react";
import Layout from "../Components/userLogged/Layout";
import RevelantResult from "./components/RevelantResult";
import MoreResults from "./components/MoreResults";

const Search = (props) => {

    return (
        <Layout>
            <div className="w-full h-full">
                <div className="grid grid-cols-7 grid-rows-1 p-5 gap-2 items-center">
                    <RevelantResult revelantSong={ props.data.data[0] }/>
                    <MoreResults data={ props.data }/>
                </div>
            </div>
        </Layout>
    );
}

export default Search;
