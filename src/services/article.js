import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const options = {
//   method: 'GET',
//   url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
//   params: {
//     url: 'https://time.com/6266679/musk-ai-open-letter/',
//     length: '3',
//   },
//   headers: {
//     'X-RapidAPI-Key': '9bfaa24b5bmsh55bf1c1f612b575p1dd9fbjsn3f433092c29c',
//     'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com',
//   },
// };

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}

export const articleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', rapidApiKey);
      headers.set(
        'X-RapidAPI-Host',
        'article-extractor-and-summarizer.p.rapidapi.com'
      );
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) =>
        `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
    }),
  }),
});

export const { useLazyGetSummaryQuery } = articleApi;
