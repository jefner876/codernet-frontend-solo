import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => {return {user: 'Sonny'}},
    actions: {setName() {this.user = 'John'}},
    getters: {}
})