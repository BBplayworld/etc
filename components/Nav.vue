<template>
    <nav class="navbar navbar-main navbar-expand-lg px-0 shadow-none" id="navbarBlur" navbar-scroll="true">
        <div class="container-fluid py-1 px-3">
            <nav aria-label="breadcrumb">
                <h4 class="font-weight-bolder mb-0 ms-2">
                    <NuxtLink :to="localePath('/')">{{ siteStore.company }}</NuxtLink>
                </h4>
            </nav>
            <div class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                <ul class="navbar-nav ps-md-2">
                    <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
                        <a href="javascript:;" class="nav-link text-body p-0" id="iconNavbarSidenav"
                            @click="asideStore.switchShow()">
                            <div class="sidenav-toggler-inner">
                                <i class="sidenav-toggler-line"></i>
                                <i class="sidenav-toggler-line"></i>
                                <i class="sidenav-toggler-line"></i>
                            </div>
                        </a>
                    </li>
                </ul>
                <div class="ms-md-auto pe-md-3 d-flex align-items-center">
                </div>
                <ul class="navbar-nav justify-content-end">
                    <LocaleNav />
                </ul>
            </div>
        </div>
    </nav>
</template>
<script setup>
import { useAsideStore } from '@/stores/aside'
import { useSiteStore } from '@/stores/site'
const asideStore = useAsideStore()
const siteStore = useSiteStore()
const localePath = useLocalePath()
</script>~/stores/site