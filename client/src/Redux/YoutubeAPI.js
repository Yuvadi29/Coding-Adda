// All Calls to the Youtube API 
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const api_key = process.env.YOUTUBE_API_KEY;
// const baseURL = process.env.API_URL;
// const channelID = process.env.CHANNEL_ID;

export const YoutubeAPI = createApi({
    reducerPath: 'YoutubeAPI',
    baseQuery: fetchBaseQuery({
        // baseUrl: `${baseURL}`,
        baseUrl: 'https://www.googleapis.com/youtube/v3/',
    }),

    endpoints: (builder) => ({

        // Get Playlists
        getPlaylists: builder.query({
            // query: () => `playlists?part=snippet&channelId=${channelID}&key=${api_key}&maxResults=25`,
            query: () => `playlists?part=snippet&channelId=UChVzP7gNOlkymoo000Y9_6Q&key=AIzaSyBegmeFS1N61KhkWrkG_UwzmcJePtwuXuQ&maxResults=25`,
        }),

        getPodcasts: builder.query({
            // query: () => `${apiUrl}/playlistItems?key=${apiKey}&part=snippet&playlistId=${playlistID}&maxResults=25`
            query: () => `/playlistItems?key=AIzaSyBegmeFS1N61KhkWrkG_UwzmcJePtwuXuQ&part=snippet&playlistId=PLI7xwGSSw_fIRv8Q4nz77IqgqhRxTBbBW&maxResults=25`
        }),

        getPopularPodcasts: builder.query({
            query: () => `/playlistItems?part=snippet&order=viewCount&playlistId=PLI7xwGSSw_fIRv8Q4nz77IqgqhRxTBbBW&key=AIzaSyBegmeFS1N61KhkWrkG_UwzmcJePtwuXuQ`,
        }),

        getPlaylistItems: builder.query({
            query: (playlistId) => `/playlistItems?part=snippet&playlistId=${playlistId}&key=AIzaSyBegmeFS1N61KhkWrkG_UwzmcJePtwuXuQ&maxResults=100`
        }),
    }),
});

export const { useGetPlaylistsQuery, useGetPodcastsQuery, useGetPlaylistItemsQuery, useGetPopularPodcastsQuery } = YoutubeAPI;

