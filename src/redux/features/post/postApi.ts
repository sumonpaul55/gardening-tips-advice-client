import { baseApi } from "@/redux/api/baseApi";

const postApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    makePost: builder.mutation({
      query: (data) => {
        return {
          url: "/post",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["post"],
    }),
    getVotesSummery: builder.query({
      query: () => {
        return {
          url: "/voterSummer",
          method: "GET",
        };
      },
    }),
  }),
});

export const { useMakePostMutation, useGetVotesSummeryQuery } = postApi;
