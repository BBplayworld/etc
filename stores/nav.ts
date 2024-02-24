import { defineStore } from "pinia";

export const useNavStore = defineStore("nav", {
    state: () => ({
        show: false
    }),
    getters: {
        isShow: (state): boolean => state.show,
    },
    actions: {
        switchShow() {
            this.show = !this.show;
        }
    },
});