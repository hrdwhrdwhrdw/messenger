import instance from "./instance";

const AuthAPI = {
  getOwnData() {
    return instance.get(`auth/me`).then((response) => {
      return response.data;
    });
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, {email, password, rememberMe}).then((response) => {
      return response.data;
    });
  },
  logout() {
    return instance.delete(`auth/login`).then((response) => {
      return response.data;
    });
  },
};

export default AuthAPI;
