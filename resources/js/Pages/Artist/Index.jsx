import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Layout from '../Components/userLogged/Layout';
import ArtistsGrid from './components/ArtistsGrid';

const Index = (props) => {
    const { category, artists } = props;
    const artistsData = artists.data;

    const [artistGroups, setArtistGroups] = useState([]);
    const [hasMore, setHasMore] = useState(true);

    const fetchMoreData = () => {
        const newGroups = artistsData.slice(artistGroups.length, artistGroups.length + 10);
        if (newGroups.length === 0) {
            setHasMore(false);
            return;
        }
        setArtistGroups([...artistGroups, ...newGroups]);
    };

    useEffect(() => {
        fetchMoreData();
    }, []);

    return (
        <Layout>
            <div className="w-full h-full bg-slate-950 mt-1 rounded-md ">
                <div className="p-5 py-2">
                    <strong className="text-2xl font-bold text-white">
                        Categoría: {category.replace('_&_', ' / ')}
                    </strong>
                </div>
                <div className="p-5 overflow-y-auto max-h-[85vh]" id="scrollableDiv">
                    <InfiniteScroll
                        dataLength={artistGroups.length}
                        next={fetchMoreData}
                        hasMore={hasMore}
                        loader={<h4>Loading...</h4>}
                        scrollableTarget="scrollableDiv"
                    >
                        <ArtistsGrid artists={artistGroups} />
                    </InfiniteScroll>
                </div>
            </div>
        </Layout>
    );
};

export default Index;
