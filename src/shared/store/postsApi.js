import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (build) => ({
    getPosts: build.query({
      query: ({ limit = 5, start = 0 }) => ({
        url: "posts",
        params: {
          _limit: limit,
          _start: start,
        },
      }),
    }),

    getCurentPost: build.query({
      query: ({ id }) => ({
        url: "posts",
        params: {
          id: id,
        },
      }),
    }),

    getCurentComments: build.query({
      query: ({ id }) => ({
        url: "comments",
        params: {
          postId: id,
        },
      }),
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetCurentPostQuery,
  useGetCurentCommentsQuery,
} = postsApi;
