import { UserType } from "types/user-types";
import {instance} from "./instance"
import { DefaultResponseType } from '../types/response-type';

type GetUsersType = {
  items: Array<UserType>,
  totalCount: number,
  erorr: string
}

export const UsersAPI = {
  getUsers(pageSize: number, page: number) {
    return instance
      .get<GetUsersType>(`users?count=${pageSize}&page=${page}`)
      .then((response) => response.data);
  },

  follow(userId: number) {
    return instance.post<DefaultResponseType>(`follow/${userId}`);
  },

  unfollow(userId: number) {
    return instance.delete<DefaultResponseType>(`follow/${userId}`);
  },
};