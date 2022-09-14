import axios from "axios";
import { server } from "./.secrets";

const api = `${server}/api`;

export const patchProfile = (newProfile, id) => {
  delete newProfile._id;

  return axios.patch(`${api}/users/${id}`, newProfile).then(({ data }) => {
    return data.updatedUser;
  });
};

export const registerUser = (newUser) => {
  return axios.post(`${api}/users`, newUser).then(({ data }) => {
    return data.newUser;
  });
};

export const getUser = (email) => {
  return axios.get(`${api}/users/login/${email}`).then(({ data }) => {
    return data.user;
  });
};

export const getMessagesByRoom = (room) => {
  return axios.get(`${api}/messages/${room}`).then(({ data }) => {
    return data;
  });
};
