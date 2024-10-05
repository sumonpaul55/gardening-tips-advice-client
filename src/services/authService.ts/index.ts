"use server";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export const getCurrenUser = async () => {
  //   const accessToken = localStorage.getItem("accessToken");
  const accessToken = cookies().get("accessToken")?.value;

  let decodedToken = null;

  if (accessToken) {
    decodedToken = await jwtDecode(accessToken as string);
    return {
      _id: decodedToken?._id,
      name: decodedToken?.name,
      email: decodedToken?.email,
      phoneNumber: decodedToken?.phoneNumber,
      role: decodedToken?.role,
      profilePhoto: decodedToken?.profilePhoto,
    };
  }
  return decodedToken;
};
