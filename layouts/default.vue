<template>
    <div v-if="isMounted" class="g-sidenav-show" :class="[asideStore.show ? 'g-sidenav-pinned' : '']">
        <Nav />
        <Aside />
        <div class="etc" @click="func.asideToggle">
            <div>
                <slot />
            </div>
        </div>
        <Footer />
    </div>
</template>
<script setup>
import { useAsideStore } from '@/stores/aside'
const asideStore = useAsideStore()
const isMounted = ref(false)
onMounted(() => {
    isMounted.value = true
})

const func = {
    asideToggle(_t) {
        if (asideStore.show) {
            asideStore.switchShow()
        }
    }
}
</script>