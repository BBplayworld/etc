<template>
    <li class="nav-item px-3 d-flex align-items-center">
        <div class="dropdown">
            <a href="javascript:;" class="btn bg-gradient-dark dropdown-toggle " :class="{ show: isLocaleToggle }"
                @click="func.localeToggle">
                <i class="fa-solid fa-language"></i>
                &nbsp;{{ locale }}&nbsp;
            </a>
            <ul class="dropdown-menu" :class="{ show: isLocaleToggle }">
                <li v-for="locale in locales" :key="locale" @click.prevent.stop="func.setLocale(locale)">
                    <span class="dropdown-item">
                        <i class="fa-solid fa-language"></i>
                        &nbsp;<b class="fs-7">{{ locale }}</b>
                    </span>
                </li>
            </ul>
        </div>
    </li>
</template>
<script setup>
const { locale, locales, setLocale } = useI18n()
const isLocaleToggle = defineModel('isLocaleToggle', { default: false })
const func = {
    localeToggle() {
        isLocaleToggle.value = !isLocaleToggle.value
    },
    setLocale(locale) {
        setLocale(locale)
        func.localeToggle()
    }
}
</script>