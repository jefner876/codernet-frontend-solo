import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    return { 
        _id: "",
        username: "",
        email: "",
        location: "",
        avatar: "",
        bio: "",
        DOB: ""
     };
  },
  actions: {
    setUser() {

    },
  },
  getters: {},
});
