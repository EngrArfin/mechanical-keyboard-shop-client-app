import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }), // Backend URL
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => ({
        url: "/tasks", // Fetch tasks from /tasks endpoint
        method: "GET",
      }),
    }),
  }),
});

export const { useGetTodosQuery } = baseApi;
