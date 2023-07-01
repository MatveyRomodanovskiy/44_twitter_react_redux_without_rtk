import {legacy_createStore as createstore} from "@reduxjs/toolkit";
import {twitterReducer} from "../reducers/twitterReducer";



export const store = createstore(twitterReducer);