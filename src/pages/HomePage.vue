<script setup>
import { useRouter } from 'vue-router';

import BaseButton from '@/components/BaseButton.vue';

const router = useRouter();

const toStudentPage = () => {
    router.push('/students');
};
</script>

<template>
    <div class="home-container">
        <div class="home-left">
            <div class="home-title">
                Welcome to
                <br>
                S-School
            </div>
            <div class="home-desc">Manage students efficiently, simply, and conveniently</div>
            <div class="home-action">
                <div class="action-title">Start managing now</div>
                <BaseButton title="List Student" @click="toStudentPage" />
            </div>
        </div>
        <div class="home-right">
            <img src="/src/assets/images/banner.png" />
        </div>

        <!-- <div class="overlay"></div> -->
    </div>
</template>

<style scoped>
.home-container {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 32px 32px 0 32px;
    display: flex;
    gap: 32px;
}

.home-left,
.home-right {
    position: relative;
    width: 50%;
}

.home-left {
    padding: 32px;
    display: flex;
    flex-direction: column;
}

.home-title {
    font-size: 64px;
    font-weight: 600;
    line-height: 72px;
}

.home-desc {
    font-size: 20px;
    font-weight: 400;
    line-height: 32px;
    margin: 12px 0 32px 0;
}

.home-action {
    display: flex;
    align-items: center;
}

.action-title {
    border-right: 1px solid var(--Primary-300);
    padding-right: 24px;
    margin-right: 24px;
}

.home-right img {
    position: absolute;
    bottom: 0;
    width: 100%;
}

.overlay {
    position: absolute;
    bottom: 0;
    left: -100px;
    right: -500px;
    height: 500px;
    transform: translateY(75%);
    background: rgb(131, 199, 255);
    z-index: 1;
    border-radius: 50%;
}

@media screen and (max-width: 1280px) {
    .home-container {
        flex-direction: column;
        height: 100vh;
    }

    .home-left,
    .home-right {
        width: 100%;
    }

    .home-right img {
        position: static;
        flex: 1;
    }
}
</style>