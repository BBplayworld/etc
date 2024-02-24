<template>
    <nav class="navbar navbar-main navbar-expand-lg px-0 shadow-none" id="navbarBlur" navbar-scroll="true">
        <div class="container-fluid py-1 px-3">
            <nav aria-label="breadcrumb">
                <h4 class="font-weight-bolder mb-0 ms-2">
                    <NuxtLink :to="localePath('/')">Etc..</NuxtLink>
                </h4>
            </nav>
            <div class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                <div class="ms-md-auto pe-md-3 d-flex align-items-center">
                </div>
                <ul class="navbar-nav justify-content-start">
                    <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
                        <a href="javascript:;" class="nav-link text-body p-0" id="iconNavbarSidenav"
                            @click="navStore.switchShow()">
                            <div class="sidenav-toggler-inner">
                                <i class="sidenav-toggler-line"></i>
                                <i class="sidenav-toggler-line"></i>
                                <i class="sidenav-toggler-line"></i>
                            </div>
                        </a>
                    </li>
                </ul>
                <ul class="navbar-nav justify-content-end">
                    <LocaleNav />
                </ul>
            </div>
        </div>
    </nav>
</template>
<script setup>
import { useNavStore } from '@/stores/nav'
const localePath = useLocalePath()
const navStore = useNavStore()
</script>