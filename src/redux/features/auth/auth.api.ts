/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";
// import Cookies from "js-cookie";
const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/register",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["user"],
    }),
    logIn: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/login",
          method: "POST",
          body: data,
        };
      },

      // transformErrorResponse: (Response: any) => {
      //   Cookies.set("token", Response?.data?.data?.accessToken);
      //   return Response;
      // },
    }),
    getUserByEmail: builder.query({
      query: (email: string) => {
        return {
          url: `/user/${email}`,
          method: "GET",
        };
      },
      providesTags: ["user"],
    }),
    getUserByid: builder.query({
      query: (id: string) => {
        console.log(id);
        return {
          url: `/user/id/${id}`,
          method: "GET",
        };
      },
      providesTags: ["user"],
    }),
    updateUser: builder.mutation({
      query: (updateInfo: any) => {
        return {
          url: `/auth/update-user/${updateInfo.id}`,
          method: "PUT",
          body: updateInfo.formData,
        };
      },
      invalidatesTags: ["user"],
    }),
  }),
});
export const { useLogInMutation, useRegisterMutation, useGetUserByEmailQuery, useGetUserByidQuery, useUpdateUserMutation } = authApi;
