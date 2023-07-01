import {combineReducers} from "@reduxjs/toolkit";
import {statsReducer} from "./statsReducer";
import {userReducer} from "./userReducer";

export const twitterReducer =  combineReducers ({
     user: userReducer,
     stats: statsReducer,
})
