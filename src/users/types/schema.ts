import { z } from "zod";
import { patterns } from "../../constants";

export const schema = z.object({
  name: z.string().min(1, { message: "required" }),
  email: z
    .string()
    .min(3, { message: "Minimum 3 character is required" })
    .refine((email) => patterns.email.test(email), {
      message: "email not valid",
    }),
});

export type Schema = z.infer<typeof schema>;
