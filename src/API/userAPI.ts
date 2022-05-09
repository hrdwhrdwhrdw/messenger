import { UserType } from "types/user-types";
import { instance } from "./instance";
import { DefaultResponseType } from "../types/response-type";
import { AxiosPromise } from "axios";
import { FilterType } from '../components/Forms/user-search-form/UserSearchForm';

type GetUsersType = {
  items: Array<UserType>;
  totalCount: number;
  error: string;
};

export const UsersAPI = {
  async getUsers(pageSize: number, page: number, filter: FilterType) {
    const res = await instance.get<GetUsersType>(
      `users?count=${pageSize}&page=${page}&term=${filter.term}&friend=${filter.isFriend}`
    );
    return res.data;
  },

  async follow(userId: number) {
    const res = await instance.post<DefaultResponseType>(`follow/${userId}`);
    return res.data;
  },

  unfollow(userId: number) {
    return instance.delete<DefaultResponseType>(
      `follow/${userId}`
    ) as AxiosPromise<DefaultResponseType>;
  },
};
