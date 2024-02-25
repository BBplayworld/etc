import { defineStore } from "pinia";

export const useAsideStore = defineStore("aside", {
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