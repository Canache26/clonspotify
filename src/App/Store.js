import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/UserSlice"
import tokenReducer from "../features/tokenSlice"
import playlistReducer from "../features/PlaylistSlice"

export default configureStore({
    reducer: {
        user: userReducer,
        token: tokenReducer,
        playlist: playlistReducer,
    }
})