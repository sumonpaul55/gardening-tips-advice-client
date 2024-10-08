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
    // getVotesSummery: builder.query({
    //   query: () => {
    //     return {
    //       url: "/voterSummer",
    //       method: "GET",
    //     };
    //   },
    // }),
    getPostById: builder.query({
      query: (id: string) => {
        return {
          url: `/post/${id}`,
          method: "GET",
        };
      },
    }),
    getPostByUserId: builder.query({
      query: (id: string) => {
        console.log("api id", id);
        return {
          url: `/post/postby-user/${id}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useMakePostMutation, useGetPostByIdQuery, useGetPostByUserIdQuery } = postApi;
