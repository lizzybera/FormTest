import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    initialAuthState: "",
    theme : false
}

const GlobalState = createSlice({
    name: "AuthState",
    initialState,
    reducers: {
        createUSer: (state, { payload }) => {
            state.initialAuthState = payload
        },
        logOut : (state) => {
            state.initialAuthState = null
        },
        themed : (state) => {
            state.theme = !state.theme
        }
    }
});

export const { createUSer, themed } = GlobalState.actions

export default GlobalState.reducer