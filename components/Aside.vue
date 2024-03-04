<template>
    <aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0" id="sidenav-main">
        <div class="pt-6">&nbsp;</div>
        <hr class="horizontal dark mt-0">
        <div class="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <NuxtLink :to="localePath('/stock/watering')" class="nav-link active"
                        @click.native="func.asideSwitch()">
                        <div
                            class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                        </div>
                        <span class="nav-link-text ms-1">{{ $t('stock.watering.title') }}</span>
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
            </ul>
        </div>
        <div class="sidenav-footer mx-3">
            <a class="btn bg-gradient-primary mt-3 w-100" href="mailto:bbplayworld@gmail.com">{{ $t('etc.contact')
                }}</a>
        </div>
    </aside>
</template>

<script setup>
import { useAsideStore } from '@/stores/aside'
const asideStore = useAsideStore()
const localePath = useLocalePath()

const func = {
    asideSwitch() {
        if (asideStore.init) {
            asideStore.switchShow()
        }
    }
}
</script>