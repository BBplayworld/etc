<template>
    <div v-if="isMounted" class="g-sidenav-show" :class="[asideStore.show ? 'g-sidenav-pinned' : '']">
        <Nav />
        <Aside />
        <div @click="func.asideToggle">
            <slot />
        </div>
        <Footer />
    </div>
</template>

<script setup>
import { useSiteStore } from '@/stores/site'
import { useAsideStore } from '@/stores/aside'
const siteStore = useSiteStore()
const asideStore = useAsideStore()
const isMounted = ref(false)
const route = useRoute()

onMounted(() => {
    isMounted.value = true
})

useSeoMeta({
    title: siteStore.domain,
    description: siteStore.seo['description'][route.path] || siteStore.seo['description']['/'],
    ogTitle: siteStore.domain,
    ogType: 'website',
    ogSiteName: siteStore.company,
    ogDescription: siteStore.seo['description'][route.path] || siteStore.seo['description']['/'],
    ogImage: ''
})

const func = {
    asideToggle(_t) {
        if (asideStore.show) {
            asideStore.switchShow()
        }
    }
}
</script>~/stores/site