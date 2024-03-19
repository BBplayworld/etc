<template>
    <aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0" id="sidenav-main">
        <div class="ms-3 mt-3">
                <h4 class="font-weight-bolder mb-0 ms-2">
                    <NuxtLink :to="localePath('/')">{{ siteStore.company }}</NuxtLink>
                </h4>
            </div>
        <div class="pt-2">&nbsp;</div>
        <div class="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <h6 class="ps-3 ms-2 text-lg font-weight-bolder">Stock</h6>
                </li>
                <li class="nav-item">
                    <NuxtLink :to="localePath('/stock/us-market-news')" class="nav-link active"
                        @click.native="func.asideSwitch()">
                        <div
                            class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                        </div>
                        <span class="nav-link-text ms-1">{{ $t('stock.usMarketNews.title') }}</span>
                    </NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink :to="localePath('/stock/kospi')" class="nav-link active"
                        @click.native="func.asideSwitch()">
                        <div
                            class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                        </div>
                        <span class="nav-link-text ms-1">{{ $t('stock.kospi.title') }}</span>
                    </NuxtLink>
                </li>
                <li class="nav-item">
                    <h6 class="ps-3 ms-2 mt-3 text-lg font-weight-bolder">Util</h6>
                </li>
                <li class="nav-item">
                    <NuxtLink :to="localePath('/stock/watering')" class="nav-link active"
                        @click.native="func.asideSwitch()">
                        <div
                            class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                        </div>
                        <span class="nav-link-text ms-1">{{ $t('stock.watering.title') }}</span>
                    </NuxtLink>
                </li>
            </ul>
        </div>
        <div class="sidenav-footer mx-3">
            <a class="btn bg-gradient-primary mt-3 w-100" href="mailto:bbplayworld@gmail.com">{{ $t('etc.contact')
                }}</a>
        </div>
    </aside>
</template>

<script setup>
import { useSiteStore } from '@/stores/site'
import { useAsideStore } from '@/stores/aside'
const asideStore = useAsideStore()
const siteStore = useSiteStore()
const localePath = useLocalePath()

const func = {
    asideSwitch() {
        if (asideStore.init) {
            asideStore.switchShow()
        }
    }
}
</script>