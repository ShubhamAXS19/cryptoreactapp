import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'coinranking1.p.rapidapi.com';

const cryptoNewsHeaders = {
//   'x-bingapis-sdk': 'true',
  'x-rapidapi-key': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-host': 'b0a300d222msh4a959150243bd45p1907a5jsn9a490ea63316',
};

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;