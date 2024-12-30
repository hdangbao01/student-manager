<script setup>
import { computed, ref } from 'vue';

import { useRouter, useRoute } from 'vue-router';

const emits = defineEmits(['closeSlidebar'])

const router = useRouter();
const route = useRoute();


const toPage = (page) => {
    router.push(page)
    emits('closeSlidebar')
};

const currentPage = computed(() => {
    return route.path;
});

const listNav = ref([
    {
        title: "Home",
        icon: "home",
        path: "/"
    },
    {
        title: "Students",
        icon: "student",
        path: "/students"
    },
]);

const closeSlidebar = () => {
    emits('closeSlidebar')
};
</script>

<template>
    <div class="slidebar-container">
        <div class="slider-header">
            <img class="logo-slidebar" src="/src/assets/images/logo.png" />
            <div>S-School</div>
        </div>
        <div class="slider-nav">
            <div v-for="item in listNav">
                <div class="nav-item" :class="{'active': currentPage === item.path}" @click="toPage(item.path)">
                    <img :src="`/src/assets/icons/${item.icon}.svg`" />
                    {{ item.title }}
                </div>
            </div>
        </div>
        <div class="close-icon" @click="closeSlidebar">
            <img src="/src/assets/icons/close.svg" />
        </div>
    </div>
</template>

<style scoped>
@keyframes slideIn {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
}

.slidebar-container {
    position: relative;
    width: 241px;
    height: 100vh;
    background-color: var(--Primary);
    color: var(--White);
    z-index: 9;
    animation: slideIn 0.4s ease;
}

.close-icon {
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
    display: none;
}

.close-icon img {
    width: 24px;
    height: 24px;
}

.slider-header {
    padding: 25px;
    border-bottom: 1px solid var(--Border);
    font-size: 20px;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.logo-slidebar {
    width: 65px;
    height: 65px;
    object-fit: cover;
    border-radius: 50%;
}

.slider-nav {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 25px;
}

.nav-item {
    cursor: pointer;
    padding: 12px 16px;
    display: flex;
    gap: 16px;
    align-items: center;
}

.nav-item.active {
    border-radius: 4px;
    background-color: var(--Primary-300);
}

@media screen and (max-width: 768px) {
    .close-icon {
        display: block;
    }
}
</style>