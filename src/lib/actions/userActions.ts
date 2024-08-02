"use server";
import { z } from "zod";
import { userSchema } from "./validations/userValidations";
const API_BASE_URL = process.env.SENSEDIA_API_SECRET_URL;
const API_NEXT_URL = process.env.NEXT_PUBLIC_NEXT_API;
export interface User {
  id: number;
  name: string;
  email: string;
  postsCount?: number;
  albumsCount?: number;
  city: City;
  days: Day[];
}

export type City = {
  id: number;
  name: string;
  state: string;
};
export type Day = {
  id: number;
  name: string;
};

export async function newUser(userInfo: z.infer<typeof userSchema>) {
  //validation
  const result = userSchema.safeParse(userInfo);
  if (!result.success) {
    throw new Error(`Invalid user data: ${result.error.errors}`);
  }
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
const fetchWithRetry = async (
  url: string,
  options = {},
  retries = 3,
  delay = 300
): Promise<Response> => {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Fetch failed: ${response.statusText}`);
      }
      return response;
    } catch (error) {
      console.error(`Attempt ${i + 1} to fetch ${url} failed: ${error}`);
      if (i < retries - 1) {
        await new Promise((resolve) => setTimeout(resolve, delay));
      } else {
        throw new Error(
          `Failed to fetch ${url} after ${retries} attempts: ${error}`
        );
      }
    }
  }
  throw new Error("Unreachable code");
};

export async function fetchUsersData() {
  try {
    const response = await fetchWithRetry(`${API_BASE_URL}/users`);
    const json = await response.json();

    if (json.users && Array.isArray(json.users)) {
      const usersData = await Promise.all(
        json.users.map(async (user: User) => {
          try {
            const [
              postsResponse,
              albumsResponse,
              citiesResponse,
              daysResponse,
            ] = await Promise.all([
              fetchWithRetry(`${API_BASE_URL}/users/${user.id}/posts`),
              fetchWithRetry(`${API_BASE_URL}/users/${user.id}/albums`),
              fetchWithRetry(`${API_NEXT_URL}/cities`),
              fetchWithRetry(`${API_NEXT_URL}/days`),
            ]);

            const postsJson = await postsResponse.json();
            const albumsJson = await albumsResponse.json();
            const cityJson = await citiesResponse.json();
            const daysJson = await daysResponse.json();

            const posts = postsJson.posts || [];
            const albums = albumsJson.albums || [];
            const city = cityJson.cities || [];
            const days = daysJson.days || [];

            return {
              ...user,
              postsCount: posts.length,
              albumsCount: albums.length,
              city,
              days,
            };
          } catch (error) {
            console.error(`Error fetching data for user ${user.id}:`, error);
            return {
              ...user,
              postsCount: 0,
              albumsCount: 0,
              city: [],
              days: [],
            };
          }
        })
      );
      return usersData;
    } else {
      throw new Error("Invalid data structure");
    }
  } catch (error) {
    console.error("Error fetching users data:", error);
    throw new Error(`Failed to fetch data: ${error}`);
  }
}

export async function deleteUser(id: number) {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`Failed to delete user: ${response.statusText}`);
    }
    return response.json();
  } catch (error: any) {
    throw new Error(`Failed to delete user: ${error.message}`);
  }
}
