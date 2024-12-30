<script setup>
import { ref } from "vue";

import SlidebarVue from "./Slidebar.vue";

const isToggle = ref(false);

const handleToggle = () => {
    isToggle.value = !isToggle.value;
};

const closeSlidebar = () => {
    isToggle.value = false;
};
</script>

<template>
    <div class="container">
        <div class="slidebar-destop">
            <SlidebarVue />
        </div>
        <div class="slidebar-mobile" v-if="isToggle">
            <SlidebarVue @closeSlidebar="closeSlidebar" />
        </div>
        <div class="icon-sliderbar" @click="handleToggle">
            <img src="/src/assets/icons/menu.svg" />
        </div>
        <div class="content">
            <RouterView />
        </div>
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    height: 100vh;
    background-color: var(--White);
    display: flex;
    overflow: hidden;
}

.content {
    flex: 1;
}

.icon-sliderbar {
    width: 100%;
    padding: 16px 32px;
    display: none;
}

.icon-sliderbar img {
    width: 32px;
    height: 32px;
}

.slidebar-mobile {
    display: none;
}

@media screen and (max-width: 768px) {
    .icon-sliderbar {
        display: block;
    }

    .slidebar-destop {
        display: none;
    }

    .container {
        flex-direction: column;
    }


    .slidebar-mobile {
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        z-index: 9;
    }
}
</style>