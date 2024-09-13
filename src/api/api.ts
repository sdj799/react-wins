import axios from "axios";

const BASE_URL = "http://43.201.249.197";
export const api = async (
  path: string,
  options?: {
    method?: string;
    headers?: {
      "Content-Type": string;
    };
    body?: any;
  }
) => {
  try {
    const requestOptions = {
      method: options?.method || "GET",
      headers: {
        "Content-Type": "application/json",
        ...(options?.headers || {}),
      },
      data: options?.body,
    };

    const response = await axios(`${BASE_URL}/api/${path}`, requestOptions);
    return response.data;
  } catch (error) {
    throw new Error("Failed to Fetch");
  }
};
