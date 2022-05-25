import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/CryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";

export const store = configureStore ({
    reducer : {
        [cryptoApi.reducerPath] : cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    },
})

