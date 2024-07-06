import React from 'react';
// import SinglePodcast from "../components/SinglePodcast";
import { useGetPodcastsQuery, useGetPopularPodcastsQuery } from '../Redux/YoutubeAPI';
import loader from '../assets/loader.svg';


const Podcasts = () => {
    const { data: podcasts, error: podcastsError, isLoading: podcastsLoading } = useGetPodcastsQuery();
    const { data: mostListenedEpisodes, error: episodesError, isLoading: episodesLoading } = useGetPopularPodcastsQuery();


    console.log(podcasts);

    const totalEpisodes = (podcasts) => {
        const total = podcasts.items.length;
        return total;
    };

    if (podcastsLoading || episodesLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <img src={loader} alt='loader' className='animate-spin' />
            </div>
        );
    }

    if (podcastsError || episodesError) {
        return <div>Error: {podcastsError ? podcastsError.message : episodesError.message}</div>;
    }

    const formatDate = (publishedAt) => {
        const date = new Date(publishedAt);
        return date.toLocaleDateString();
    }

    return (
        <div>
            <body className="text-gray-200 font-poppins">
                <section className="min-h-screen flex items-center justify-center">
                    <div className="max-w-[1024px] w-[90%] mx-auto flex  items-center justify-center flex-col-reverse md:flex-row gap-10">
                        <div className="flex-1  text-center md:text-left">
                            <h1 className="text-4xl md:text-[60px] font-bold text-primary leading-tight uppercase">The Coding Adda Podcast</h1>
                            <p className="text-sm md:text-lg">You can catch the series on The Coding Adda Podcast, or you can watch the episodes on our YouTube channel. </p>
                            <a href="https://www.youtube.com/playlist?list=PLI7xwGSSw_fIRv8Q4nz77IqgqhRxTBbBW" target='_blank' rel="noreferrer" className="btn-primary">Start Listening</a>
                        </div>
                        <div className="flex-1 ">
                            <div className="w-full h-[50vh] md:h-screen overflow-hidden relative">
                                <img className="w-full h-full md:h-[150vh] object-contain md:absolute md:top-[-25%]"
                                    src="./hero_section_img.png" alt="" />
                            </div>
                        </div>
                    </div>
                </section>


                <section className="min-h-screen flex items-center justify-center bg-orange-100 py-[100px] text-gray-700">
                    <div className="max-w-[1024px] w-[90%] mx-auto">
                        <div className="text-center max-w-lg mx-auto">
                            <h1 className="text-gray-600 text-4xl font-bold">The Hosts</h1>
                            <p className="text-sm md:text-base text-gray-700 mt-3">Dive Deep into the Tech by Listening to Our Podcasts</p>
                        </div>
                        <div className="flex gap-5 mt-11 md:flex-row flex-col ">
                            <div className="bg-orange-200 p-5 rounded-xl flex-1">
                                <img src="https://media.licdn.com/dms/image/D4D22AQGfxSuncQHnAA/feedshare-shrink_800/0/1698148816180?e=1710374400&v=beta&t=tBxi8PJzMxImZeCv6_aJD6Ix6q94HA7Z8GoX6umTq34" alt="host-1" className="rounded-lg object-cover w-full" />
                                <h2 className="text-gray-700 text-xl font-medium mt-3">Harikrishnan Prassanakumar</h2>
                                <p className="text-sm md:text-base mt-2 text-gray-900">
                                    Co-Founder @CodingAdda | Content Creator | FrontEnd Developer | Tech & UI Fanatic
                                </p>
                            </div>
                            <div className="bg-slate-200 p-5 rounded-xl flex-1">
                                <img src="https://media.licdn.com/dms/image/D5622AQH0slZHixQZBQ/feedshare-shrink_1280/0/1697040116232?e=1710374400&v=beta&t=NI-KEhuENs671Gcc2M3zsRXeqRdxdyOSqjvUF5xDFCY" alt="host-1" className="rounded-lg object-cover w-full" />
                                <h2 className="text-gray-700 text-xl font-medium mt-3">Aditya Trivedi</h2>
                                <p className="text-sm md:text-base mt-2 text-gray-900">
                                    Co-Founder @CodingAdda | Content Creator | Corporate Lead @MLSC VCET| MERN
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="flex items-center justify-center  py-[100px] ">
                    <div className="max-w-[1024px] w-[90%] mx-auto">
                        <h1 className="text-primary text-4xl font-bold text-center">Most listened <br /> Episodes</h1>

                        <div className="mt-10 max-w-[100%] overflow-x-auto rounded-lg">
                            <table className="w-fit bg-neutral-800 rounded-lg min-w-[600px] text-center mx-auto overflow-hidden">
                                <thead>
                                    <tr className="bg-zinc-700">
                                        <th className="p-3">Guests</th>
                                        <th className="p-3">Date</th>
                                        <th className="p-3">Link</th>
                                        <th className="p-3">Thumbnail</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {mostListenedEpisodes.items.map((episode) => (
                                        <tr key={episode.id} className="border-b border-gray-500">
                                            <td className="p-3">{episode.snippet.title}</td>
                                            <td className="p-3">{formatDate(episode.snippet.publishedAt)}</td>
                                            <td className="p-3">
                                                <a href={`https://www.youtube.com/watch?v=${episode.snippet.resourceId.videoId}`} className="btn-secondary cursor-pointer" target="_blank" rel="noopener noreferrer">
                                                    Listen
                                                </a>
                                            </td>
                                            <td className='p-3'>
                                                <img
                                                    src={episode.snippet.thumbnails.maxres.url}
                                                    alt="thumbnail"
                                                    className='rounded-2xl'
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <section className="flex items-center justify-center py-[100px] ">
                    <div className="max-w-[800px] w-[90%] mx-auto">
                        <div className="flex justify-between md:flex-row flex-col md:gap-5 gap-10">
                            <div className="text-center">
                                <h1 className="text-[80px] font-bold text-primary leading-tight uppercase">{totalEpisodes(podcasts) - 1}+</h1>
                                <p className="text-xl">episodes</p>
                            </div>
                            <div className="text-center">
                                <h1 className="text-[80px] font-bold text-primary leading-tight uppercase">{totalEpisodes(podcasts) - 1}+</h1>
                                <p className="text-xl">guests</p>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="flex items-center justify-center  py-[100px] bg-cta-img bg-cover bg-center">
                    <div className="max-w-[800px] w-[90%] mx-auto">
                        <h1 className="text-4xl md:text-[80px] font-bold leading-tight uppercase">Don't miss the next episode</h1>
                        <a href="https://www.youtube.com/playlist?list=PLI7xwGSSw_fIRv8Q4nz77IqgqhRxTBbBW" target='_blank' rel="noreferrer" className="btn-primary">Follow Now</a>
                    </div>
                </section>

                <section className="flex items-center justify-center  py-[100px] ">
                    <div className="max-w-[500px] w-[90%] mx-auto text-center">
                        <h1 className="text-4xl md:text-[80px] font-extrabold text-primary leading-tight uppercase">The Coding Adda Podcast</h1>
                        <p className="text-base md:text-lg text-gray-200  my-3 ">You can catch the series on The Coding Adda Podcast, or you can watch the episodes on our YouTube channel.</p>
                    </div>
                </section>


            </body>

        </div>
    );
};

export default Podcasts;
