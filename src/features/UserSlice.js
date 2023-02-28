import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: "user",
    initialState: {

    },
    reducers: {
        SET_USER: (state, action) => {
            state.user = action.payload //dispatch(SET_USER({ user: "javascriptdenoopapro"}))
        }
    }
})

export const { SET_USER } = userSlice.actions;

export default userSlice.reducer;