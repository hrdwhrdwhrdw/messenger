import instance from "./instance";

const UserAPI = {
  getUsers(pageSize, page) {
    return instance
      .get(`users?count=${pageSize}&page=${page}`)
      .then((response) => response.data);
  }
}

export default UserAPI;