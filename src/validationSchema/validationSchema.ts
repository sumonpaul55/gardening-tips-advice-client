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
