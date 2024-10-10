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
      query: (id: string) => {
        return {
          url: `/post/voteSummery/${id}`,
          method: "GET",
        };
      },
    }),
    getPostById: builder.query({
      query: (id: string) => {
        return {
          url: `/post/${id}`,
          method: "GET",
        };
      },
      providesTags: ["post"],
    }),
    getPostByUserId: builder.query({
      query: (userId: string) => {
        return {
          url: `/post/postby-user/${userId}`,
          method: "GET",
        };
      },
      providesTags: ["post"],
    }),
    handleVotes: builder.mutation({
      query: (info: { postId: string; userId: string | undefined; votes: boolean }) => {
        return {
          url: `/post/handle-voting/${info.postId}`,
          method: "PUT",
          body: { userId: info.userId, votes: info.votes },
        };
      },
      invalidatesTags: ["post"],
    }),
    handleComment: builder.mutation({
      query: (info: { postId: string; userId: string | undefined; comment: string }) => {
        return {
          url: `/post/handle-comment/${info.postId}`,
          method: "PUT",
          body: { userId: info.userId, comment: info.comment },
        };
      },
      invalidatesTags: ["post"],
    }),
  }),
});

export const {
  useMakePostMutation,
  useGetPostByIdQuery,
  useGetPostByUserIdQuery,
  useHandleVotesMutation,
  useHandleCommentMutation,
  useGetVotesSummeryQuery,
} = postApi;
