import React from "react";
import Layout from "../Components/userLogged/Layout";
import CategoryCard from "./components/CategoryCard";

const Home = (props) => {
    let { data: { categories } } = props;
    categories = categories[0].data

    return (
        <Layout>
            <div className="w-full h-full bg-slate-950 mt-1 rounded-md">
                <div className="p-5 py-2">
                    <strong className="text-2xl font-bolf text-white">Categories</strong>
                </div>
                <div className="p-5 overflow-y-auto max-h-[85vh]">
                    <div className="grid grid-cols-2 gap-2 lg:grid-cols-7 lg:gap-3 mt-5 md:mt-0">
                        {
                            categories.map((category, i) => (
                                <CategoryCard category={ category } key={ i }/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Layout>
    );
}


export default Home;

