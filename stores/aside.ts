import { defineStore } from "pinia";

export const useAsideStore = defineStore("aside", {
    state: () => ({
        init: false,
        show: false
    }),
    actions: {
        switchShow() {
            this.init = true
            this.show = !this.show;
        }
    },
});