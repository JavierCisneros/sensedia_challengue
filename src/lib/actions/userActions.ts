"use server";
import { z } from "zod";
import { userSchema } from "./validations/userValidations";

export async function newUser(userInfo: z.infer<typeof userSchema>) {
  const API_BASE_URL = process.env.SENSEDIA_API_SECRET_URL;
  const response = await fetch(`${API_BASE_URL}/users/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(userInfo),
  });

  if (!response.ok) {
    throw new Error(`Failed to create user: ${response.statusText}`);
  }
  return response.json();
}
