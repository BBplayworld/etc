import { defineStore } from "pinia";

export const useAsideStore = defineStore("aside", {
    state: () => ({
        show: false
    }),
    actions: {
        switchShow() {
            this.show = !this.show;
        }
    },
});