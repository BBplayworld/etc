import { defineStore } from "pinia";

export const useBBetcStore = defineStore("bbetc", {
    state: () => ({
        company: 'bbetc',
        domain: 'bbetc.me'
    }),
    getters: {
        getCompany: (state) => state.company,
        getDomain: (state) => state.domain,
    },
});