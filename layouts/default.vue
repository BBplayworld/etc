<template>
    <div v-if="isMounted" class="g-sidenav-show" :class="[navStore.show ? 'g-sidenav-pinned' : '']">
        <Nav />
        <div class="etc">
            <Aside />
            <slot />
        </div>
        <Footer />
    </div>
</template>
<script setup>
import { useNavStore } from '@/stores/nav'
const navStore = useNavStore()
const isMounted = ref(false)
onMounted(() => {
    isMounted.value = true
})
</script>