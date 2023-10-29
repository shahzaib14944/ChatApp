import { createReducer } from "@reduxjs/toolkit"
import { login, logout, setUser } from "../actions/userActions"

const initialState = {
    user: null,
    loggedIn: false,
}

const userReducer = createReducer(initialState, (builder) => {
    builder.addCase(login, (state, action) => {
        state.user = action.payload
        state.loggedIn = true
    })
        .addCase(logout, (state, action) => {
            state.loggedIn = false
            state.user = {}
        })
        .addCase(setUser, (state, action) => {
            state.user = action.payload
        })
})

export default userReducer;