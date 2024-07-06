import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetPlaylistItemsQuery } from '../Redux/YoutubeAPI';
import loader from '../assets/loader.svg';
import SinglePlaylistItem from '../components/SinglePlaylistItem';


const Playlist = () => {
    const { id } = useParams();
    const { data: playlistItems, error, isLoading } = useGetPlaylistItemsQuery(id);

    useEffect(() => {
        console.log(`Playlist id: ${id}`);
    }, [id]);

    if (isLoading) {
        return <div>
            <img src={loader} alt='loader' className='justify-center items-center flex' />
        </div>
    };


    if (error) {
        return <div>Error: {error.message}</div>;
    }
    return (
        <div>
            <div>Playlist ID: {id}</div>
            <h3>Videos:</h3>
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

                    {playlistItems.items.map((playlist) => (
                        <SinglePlaylistItem
                            key={playlist.id}
                            id={playlist.id}
                            title={playlist.snippet.title}
                            description={playlist.snippet.description}
                            thumbnailUrl={playlist.snippet.thumbnails.maxres.url}
                        />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Playlist