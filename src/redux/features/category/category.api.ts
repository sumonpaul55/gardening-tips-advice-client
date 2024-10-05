import { baseApi } from "@/redux/api/baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCategory: builder.mutation({
      query: (data: { category: string; image?: string }) => {
        return {
          url: "/category",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["category"],
    }),
    getCategory: builder.query({
      query: () => {
        return {
          url: "/category",
          method: "GET",
        };
      },
      providesTags: ["category"],
    }),
  }),
});

export const { useCreateCategoryMutation, useGetCategoryQuery } = categoryApi;
