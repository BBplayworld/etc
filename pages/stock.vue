<template>
    <main class="main-content max-height-vh-100 h-100 border-radius-lg ">
        <div class="container-fluid py-4">
            <div class="row my-4">
                <div class="col-lg-10">
                    <WidgetsStockWatering />
                </div>
            </div>
        </div>
    </main>
</template>
<script setup>
import { useBBetcStore } from '@/stores/bbetc'
const bbetcStore = useBBetcStore()
useSeoMeta({
    title: bbetcStore.domain,
    ogTitle: bbetcStore.domain,
    description: '주식 물타기 계산기.Average price calculator through new stock purchase.',
    ogDescription: '주식 물타기 계산기.Average price calculator through new stock purchase.',
    ogImage: ''
})
</script>