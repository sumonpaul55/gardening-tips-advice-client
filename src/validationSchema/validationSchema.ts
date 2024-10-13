import { z } from "zod";

export const loginValidationSchema = z.object({
  email: z.string({ required_error: "Email required" }).email("Please Enater a valid email"),
  password: z.string({ required_error: "password is required to login" }).min(6, "password should atleast 6 charachters"),
});

export const registerValidationSchema = z.object({
  name: z.string({ required_error: "Name Please" }).min(4, "Name should be atleast 4 letters"),
  email: z.string({ required_error: "Email required" }).email("Please Enater a valid email"),
  phoneNumber: z.string({ required_error: "Please provide your phone number" }),
  password: z.string({ required_error: "password is required to login" }).min(6, "password should atleast 6 charachters"),
});

export const postValidation = z.object({
  title: z.string({ required_error: "Need Post title" }).min(10, "title should be minimum 10 character"),
});

export const commetValidationSchema = z.object({
  comment: z.string({ required_error: "plese write a comment" }).min(5, "comment should be minimum 5 letters"),
});
export const contactValidationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(10, "Phone number must be valid"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

export const changePassValidation = z.object({
  oldPassword: z.string({ required_error: "old password required" }),
  newPassword: z.string({ required_error: "new password required" }),
});
