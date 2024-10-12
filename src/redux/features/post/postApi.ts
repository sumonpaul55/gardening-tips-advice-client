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
    getAllPost: builder.query({
      query: (query: { searchTerm?: string; category?: string; limit?: number; sort?: string; premium?: boolean }) => {
        const params = new URLSearchParams();
        if (query.searchTerm) {
          params.append(`searchTerm`, `${query.searchTerm}`);
        }
        if (query.category) {
          params.append(`category`, `${query.category}`);
        }
        if (query.limit) {
          params.append("limit", String(query.limit));
        }
        if (query.sort) {
          params.append("sort", query.sort);
        }
        if (query.premium) {
          params.append("premium", `${query.premium}`);
        }
        return {
          url: "/post",
          method: "GET",
          params,
        };
      },
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
    updatePost: builder.mutation({
      query: (postInfo: {
        postId: string | undefined;
        postData?: { title: string | undefined; category: string | undefined; post: string | undefined; userId: string | undefined };
      }) => {
        return {
          url: `/post/update-post/${postInfo.postId}`,
          method: "PUT",
          body: postInfo.postData,
        };
      },
      invalidatesTags: ["post"],
    }),
    deletePost: builder.mutation({
      query: (postId: string) => {
        console.log("api", postId);
        return {
          url: `/post/delete/${postId}`,
          method: "DELETE",
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
  useUpdatePostMutation,
  useDeletePostMutation,
  useGetAllPostQuery,
} = postApi;
