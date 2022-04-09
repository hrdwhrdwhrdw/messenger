import instance from "./instance";

const ProfileAPI = {
  getUserData(userId) {
    return instance.get(`profile/${userId}`).then((response) => response.data);
  },
  getStatus(userId) {
    return instance
      .get(`profile/status/${userId}`)
      .then((response) => response.data);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status });
  },
  savePhoto(photo) {
    const formData = new FormData();
    formData.append("image", photo);
    return instance.put(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  saveProfileInfo(profile) {
    return instance.put("profile", profile);
  },
};

export default ProfileAPI;
