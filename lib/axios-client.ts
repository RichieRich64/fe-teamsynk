/* eslint-disable @typescript-eslint/no-explicit-any */
import { CustomError } from "@/types/custom-error.type";
import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

const options = {
  baseURL,
  withCredentials: true,
  timeout: 10000,
};

const API = axios.create(options);

// Flag to prevent multiple refresh attempts
let isRefreshing = false;
let failedQueue: Array<{
  resolve: (value: any) => void;
  reject: (error: any) => void;
}> = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach(({ resolve, reject }) => {
    if (error) {
      reject(error);
    } else {
      resolve(token);
    }
  });

  failedQueue = [];
};

API.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const { data, status } = error.response || {};

    const pathname = window.location.pathname;

    if (
      (pathname === "/" || pathname === "/login" || pathname === "/sign-up") &&
      status === 401
    ) {
      return Promise.reject(new Error("Unauthorized"));
    }

    if (status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        // If already refreshing, queue this request
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then(() => {
            return API(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        // Attempt to refresh the token
        await API.post("/auth/refresh-token");

        processQueue(null);
        isRefreshing = false;

        // Retry the original request
        return API(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError);
        isRefreshing = false;

        // Refresh failed, redirect to login
        window.location.href = "/";
        return Promise.reject(refreshError);
      }
    }

    const customError: CustomError = {
      ...error,
      errorCode: data?.errorCode || "UNKNOWN_ERROR",
    };

    return Promise.reject(customError);
  }
);

export default API;
