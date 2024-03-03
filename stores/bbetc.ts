import { defineStore } from "pinia";

export const useBBetcStore = defineStore("bbetc", {
    state: () => ({
        company: 'bbetc',
        domain: 'bbetc.me',
        seo: {
            description: {
                '/': '잡다구리.It provides miscellaneous functions.',
                '/stock/watering': '주식 물타기 계산기.Average price calculator through new stock purchase.'
            }
        }
    })
});