import axios from "axios";

export const patchProfile = (newProfile, id) => {
  delete newProfile._id;

  return axios
    .patch(`http://localhost:3000/api/users/${id}`, newProfile)
    .then(({ data }) => {
      return data.updatedUser;
    });
};

export const registerUser = (newUser) => {
  return axios
    .post("http://localhost:3000/api/users", newUser)
    .then(({ data }) => {
      return data.newUser;
    });
};

export const getUser = (email) => {
  return axios
    .get(`http://localhost:3000/api/users/login/${email}`)
    .then(({ data }) => {
      return data.user;
    });
};

export const getMessagesByRoom = (room) => {
  return axios
  .get(`http://localhost:3000/api/messages/${room}`)
  .then(({data}) => {
    return data
  })
}
