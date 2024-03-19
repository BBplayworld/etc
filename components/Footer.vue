<template>
    <footer class="footer pt-3 pb-3">
        <div class="container-fluid">
            <div class="row align-items-center justify-content-lg-between">
                <div class="col-lg-6 mb-lg-0 mb-4">
                    <div class="copyright text-sm text-muted text-lg-start">
                        <h6>© {{ siteStore.domain }}</h6>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script setup>
import { useSiteStore } from '@/stores/site'
const siteStore = useSiteStore()
</script>