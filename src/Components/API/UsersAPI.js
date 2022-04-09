import instance from "./instance";

const UserAPI = {
  getUsers(pageSize, page) {
    return instance
      .get(`users?count=${pageSize}&page=${page}`)
      .then((response) => response.data);
  },

  follow(userId) {
    return instance
      .post(`follow/${userId}`)
  },

  unfollow(userId) {
    return instance
      .delete(`follow/${userId}`)
  }
}

export default UserAPI;