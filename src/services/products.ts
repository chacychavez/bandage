// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Product } from './types';

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
	reducerPath: 'productsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
	endpoints: (builder) => ({
		getProducts: builder.query<{ products: Product[]; total: number }, string>({
			query: (q) => `products?${q}`,
			// Only have one cache entry because the arg always maps to one string
			serializeQueryArgs: ({ endpointName }) => {
				return endpointName;
			},
			// Always merge incoming data to the cache entry
			merge: (currentCache, newItems) => {
				currentCache.products.push(...newItems.products);
			},
			// Refetch when the page arg changes
			forceRefetch({ currentArg, previousArg }) {
				return currentArg !== previousArg;
			},
		}),
		getProductById: builder.query<Product, string>({
			query: (id) => `products/${id}`,
		}),
	}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductByIdQuery, useGetProductsQuery } = productsApi;
