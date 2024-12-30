<script setup>
import { useRouter } from 'vue-router';

import BaseButton from '@/components/BaseButton.vue';
import FormStudent from '@/components/FormStudent.vue';

const router = useRouter();

const toBack = () => {
    router.push('/students');
};
</script>

<template>
    <div class="student-container">
        <div class="header-student">
            <div class="header-title">
                Add Students
            </div>

            <BaseButton title="Back" @click="toBack" />
        </div>

        <FormStudent />
    </div>
</template>

<style scoped>
.student-container {
    width: 100%;
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.header-title {
    font-size: 16px;
    font-weight: 500;
    color: var(--Grey-400);
}

.header-student {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>