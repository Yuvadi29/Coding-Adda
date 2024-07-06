import { configureStore } from "@reduxjs/toolkit";
import { YoutubeAPI } from "./YoutubeAPI";
import { ResourceAPI } from "./ResourceAPI";

export default configureStore({
    reducer: {
        [YoutubeAPI.reducerPath]: YoutubeAPI.reducer,
        [ResourceAPI.reducerPath]: ResourceAPI.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(
            YoutubeAPI.middleware,
            ResourceAPI.middleware
        );
    }    
});
