import instance from "./instance";

const ProfileAPI = {
  getUserData(userId) {
    return instance.get(`profile/${userId}`).then((response) => response.data);
  },
};

export default ProfileAPI;
