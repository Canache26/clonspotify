import { createSlice } from "@reduxjs/toolkit";


export const playlistSlice = createSlice({
    name: "playlists",
    initialState: {
        playlist: null,
    },
    reducers: {
        SET_PLAYLIST: (state, action) => {
            state.playlist = action.payload;
        }
    }
});

export const { SET_PLAYLIST } = playlistSlice.actions;
export const seelctPlaylists = state => state.playlist.playlist;
export default playlistSlice.reducer;