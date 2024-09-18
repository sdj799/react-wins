import axios from "axios";

declare const __BASE_URL__: string;

const instance = axios.create({
  baseURL: `${__BASE_URL__}/api/`,
  timeout: 3000,
  headers: { "Content-Type": "application/json" },
});
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
      ...options,
      method: options?.method || "GET",
      data: options?.body,
    };

    if (options?.headers) {
      requestOptions.headers = {
        ...instance.defaults.headers,
        ...options.headers,
      };
    }

    const response = await instance(path, requestOptions);
    return response.data;
  } catch (error) {
    throw new Error("Failed to Fetch");
  }
};
