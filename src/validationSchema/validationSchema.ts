import { z } from "zod";

export const loginValidationSchema = z.object({
  email: z.string({ required_error: "Email required" }).email("Please Enater a valid email"),
  password: z.string({ required_error: "password is required to login" }).min(6, "password should atleast 6 charachters"),
});
