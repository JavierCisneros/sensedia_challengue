import { z } from "zod";
export const diasSemana = z.enum([
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]);
export const userSchema = z.object({
  name: z.string().min(3, "Add a valid user name").max(255),
  email: z.string().email("Invalid email"),
  fullName: z.string().max(255),
  city: z.string().max(255),
  days: z.array(diasSemana).nonempty({ message: "Select at least one day" }),
});
