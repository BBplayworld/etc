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
import { useBBetcStore } from '@/stores/bbetc'
import { useAsideStore } from '@/stores/aside'
const bbetcStore = useBBetcStore()
const asideStore = useAsideStore()
const isMounted = ref(false)
const route = useRoute()

onMounted(() => {
    isMounted.value = true
})

useSeoMeta({
    title: bbetcStore.domain,
    description: bbetcStore.seo['description'][route.path] || bbetcStore.seo['description']['/'],
    ogTitle: bbetcStore.domain,
    ogType: 'website',
    ogSiteName: bbetcStore.company,
    ogDescription: bbetcStore.seo['description'][route.path] || bbetcStore.seo['description']['/'],
    ogImage: ''
})

const func = {
    asideToggle(_t) {
        if (asideStore.show) {
            asideStore.switchShow()
        }
    }
}
</script>