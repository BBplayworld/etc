import { defineStore } from "pinia";

export const useSiteStore = defineStore("site", {
    state: () => ({
        company: 'bbstock',
        domain: 'bbstock.me',
        seo: {
            description: {
                '/': '주식 정보 사이트.stock information site',
                '/stock/watering': '주식 물타기 계산기.Average price calculator through new stock purchase.',
                '/stock/kospi': 'Kospi 상승률 상위 종목.Top Kospi Gainers.',
                '/stock/us-market-news': '미국 마켓 뉴스.U.S. Market News',
            }
        }
    })
});