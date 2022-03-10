import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "api-key": "2ceedb20-1f52-4708-8d28-4499accddde8",
  }
})

export default instance;