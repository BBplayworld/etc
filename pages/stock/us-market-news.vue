<template>
    <main class="main-content position-relative h-100 border-radius-lg ps ps--active-y">
        <div class="container-fluid py-4">
            <div class="row gx-4">
                <div class="col-12 col-md-12 col-lg-5">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Ticker" v-model="ticker"
                                        @focus="searchFocused = true" @blur="searchFocused = false">
                                </div>
                                <button class="btn bg-gradient-primary mb-0 ms-2" @click.prevent="func.fetchRefresh">
                                    Search
                                </button>
                            </div>
                            <span class="btn badge badge-md bg-gradient-warning mt-2 me-2"
                                @click.prevent="func.badgeTicker('')">
                                ALL
                            </span>
                            <span class="btn badge badge-md bg-gradient-dark mt-2 me-2"
                                @click.prevent="func.badgeTicker('MSFT')">
                                MSFT
                            </span>
                            <span class="btn badge badge-md bg-gradient-dark mt-2 me-2"
                                @click.prevent="func.badgeTicker('AAPL')">
                                AAPL
                            </span>
                            <span class="btn badge badge-md bg-gradient-dark mt-2 me-2"
                                @click.prevent="func.badgeTicker('NVDA')">
                                NVDA
                            </span>
                            <span class="btn badge badge-md bg-gradient-dark mt-2 me-2"
                                @click.prevent="func.badgeTicker('AMZN')">
                                AMZN
                            </span>
                            <span class="btn badge badge-md bg-gradient-dark mt-2 me-"
                                @click.prevent="func.badgeTicker('TSLA')">
                                TSLA
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="pending" class="row gx-4">
                <h2>Loading...</h2>
            </div>
            <div v-else class="row gx-4">
                <div class="col-12 col-lg-8">
                    <div class="card">
                        <div class="card-header pb-0">
                            <h5>{{ $t('stock.usMarketNews.title') }}
                                &nbsp;&nbsp;<span class="text-lg text-bolder">{{ moment().format('YYYY.MM.DD') }}</span>
                            </h5>
                        </div>
                        <div class="card-body p-3">
                            <div v-for="feed in feeds" class="timeline timeline-one-side"
                                data-timeline-axis-style="dotted">
                                <div class="timeline-block mb-3">
                                    <span class="timeline-step">
                                        <i class="ni ni-bell-55 text-warning text-gradient"></i>
                                    </span>
                                    <div class="timeline-content">
                                        <h6 class="text-dark text-lg font-weight-bold mb-0">[{{ feed.source ||
                                        'None' }}]
                                            &nbsp;{{ feed.title }}</h6>
                                        <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">{{
                                        moment(feed.time_published).format('YYYY.MM.DD HH:mm') }}</p>

                                        <br />

                                        <img :src="feed.banner_image" class="border-radius-md w-60" />
                                        <p class="text-sm mt-3 mb-2">
                                            {{ feed.summary }}
                                        </p>
                                        <button type="button" class="btn btn-dark" @click="func.open(feed.url)">
                                            <span class="btn-inner--icon"><i class="ni ni-tag"></i></span>
                                            &nbsp;<span class="btn-inner--text">LINK</span>
                                        </button>
                                    </div>
                                </div>
                                <br /><br /><br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import axios from 'axios'
import moment from 'moment'

const searchFocused = defineModel('searchFocused', { default: false })
const pending = defineModel('pending', { default: true })
const feeds = defineModel('feeds', { default: {} })
const ticker = ref('')
const func = {
    open(url: string) {
        window.open(url)
    },
    async getNews() {
        let res = await axios({
            url: `/api/stock/us-market-news`,
            params: {
                ticker: ticker.value
            },
            timeout: 4000
        })
        pending.value = false
        feeds.value = res['data']['news']
    },
    fetchRefresh() {
        pending.value = true
        setTimeout(this.getNews, 1100)
    },
    badgeTicker(selectTicker: string) {
        ticker.value = selectTicker
        this.fetchRefresh()
    }
}

onMounted(func.getNews)

</script>