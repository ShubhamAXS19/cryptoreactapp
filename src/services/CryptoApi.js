import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'coinranking1.p.rapidapi.com';

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': 'b0a300d222msh4a959150243bd45p1907a5jsn9a490ea63316',
};
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl}),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
      // query: (count) => `/coins?limit=${count}`,
    }),

    getCryptoDetails: builder.query({
      // query: (coinId) => createRequest(`/coin/${coinId}`),
      query: (coinId) => `/coin/${coinId}`,
    }),

    // Note: Change the coin price history endpoint from this - `coin/${coinId}/history/${timeperiod} to this - `coin/${coinId}/history?timeperiod=${timeperiod}`
    getCryptoHistory: builder.query({
      // query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
      query: ({ coinId, timeperiod }) => `coin/${coinId}/history?timeperiod=${timeperiod}`,
    }),

    // Note: To access this endpoint you need premium plan
    getExchanges: builder.query({
      // query: () => createRequest('/exchanges'),
      query: () => '/exchanges',
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetExchangesQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;