import { defineStore } from "pinia";

interface newsType {
    [key: string]: string
}
const news: newsType = {}

export const useMarketNewsStore = defineStore("usMarketNews", {
    state: () => ({
        news
    }),
    actions: {
        cacheNews(ticker: string, data: any) {
            this.news[ticker] = data
        }
    },
});