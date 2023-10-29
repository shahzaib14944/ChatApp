import { createAction } from "@reduxjs/toolkit"
import { LOG_IN, LOG_OUT, SET_USER } from "./payload.strings"

export const login = createAction(LOG_IN)
export const logout = createAction(LOG_OUT)
export const setUser = createAction(SET_USER)