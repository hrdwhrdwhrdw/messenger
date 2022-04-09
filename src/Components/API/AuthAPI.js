import instance from "./instance";

const AuthAPI = {
  getOwnData() {
    return instance.get(`auth/me`).then((response) => {
      return response.data;
    });
  },
  login(email, password, rememberMe = false, captcha = null) {
    return instance.post(`auth/login`, {email, password, rememberMe, captcha}).then((response) => {
      return response.data;
    });
  },  
  logout() {
    return instance.delete(`auth/login`).then((response) => {
      return response.data;
    });
  },
  getCaptchaUrl() {
    return instance.get(`/security/get-captcha-url`).then((response) => {
      return response;
    });
  },
};

export default AuthAPI;
