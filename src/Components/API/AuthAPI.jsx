import instance from "./instance";

const AuthAPI = {
  getOwnData() {
    return instance
      .get(`auth/me`)
      .then((response) => {
        return response.data
      });
  },
};

export default AuthAPI;
