<template>
    <body class="g-sidenav-show" :class="[navStore.show ? 'g-sidenav-pinned' : '']">
        <Nav />
        <div class="etc">
            <Aside />
            <slot />
        </div>
        <Footer />
    </body>
</template>
<script setup>
import { useNavStore } from '@/stores/nav'
const navStore = useNavStore()
</script>
