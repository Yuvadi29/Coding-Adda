import React from 'react'
import SinglePlaylist from '../components/SinglePlaylist';
import { useGetPlaylistsQuery } from '../Redux/YoutubeAPI';
import loader from '../assets/loader.svg';


const Playlists = () => {
    const { data: playlists, error, isLoading } = useGetPlaylistsQuery();
    console.log(playlists);

    if (isLoading) {
        return <div>
            <img src={loader} alt='loader' className='justify-center items-center flex' />
        </div>
    };

    if (error) {
        return <div>Error: {error.message}</div>
    }

    return (
        <div>
            <h3>All PlayLists</h3>
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="min-h-screen bg-gradient-to-tr from-blue-300 to-black-200 rounded-2xl flex justify-center items-center py-20">
                    <div className="md:px-4 lg:grid lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
                        {playlists.items.map((playlist) => (
                            <SinglePlaylist
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
        </div>
    )
}

export default Playlists