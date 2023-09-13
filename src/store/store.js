import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import { articleApi } from "./api/articleApi";

const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer
    },
    //中间件用来处理Api的缓存。
    middleware:getDefaultMiddleware =>
        getDefaultMiddleware().concat(articleApi.middleware),
})

export default store;