import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Product {
  id: string;
  title: string;
  price: number;
  category: string;
  image: string;
  origin: string;
  description: object;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),
  endpoints(builder) {
    return {
      fetchBreeds: builder.query<Product[], number | void>({
        query(limit = 10) {
          return `/products?limit=${limit}`;
        },
      }),
    };
  },
});

export const { useFetchBreedsQuery } = apiSlice;
