import axios from "axios";
import { BASE_URL } from '../constants/baseURL';


export const instance = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
  headers: {
    "api-key": "2ceedb20-1f52-4708-8d28-4499accddde8",
  },
});