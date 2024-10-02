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
  }),
});
export const { useLogInMutation, useRegisterMutation } = authApi;
