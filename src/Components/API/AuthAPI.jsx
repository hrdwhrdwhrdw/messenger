import instance from "./instance";

const AuthAPI = {
  getOwnData() {
    return instance
      .get(`auth/me`)
      .then((response) => response.data);
  },
};

export default AuthAPI;
