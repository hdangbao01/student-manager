<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import axios from 'axios';

import BaseButton from '@/components/BaseButton.vue';
import FormStudent from '@/components/FormStudent.vue';

const router = useRouter();
const route = useRoute();

const toBack = () => {
    router.push('/students');
};

const studentId = computed(() => route.params.id);

const studentDetail = ref({})
const getStudent = () => {
    axios.get(import.meta.env.VITE_BASE_API + '/student/' + studentId.value)
        .then((response) => {
            studentDetail.value = response.data;
            console.log('response.data', response.data);
            
        })
        .catch((error) => {
            console.log(error);
        });
}

const handleUpdateStudent = (data) => {
    studentDetail.value = data
}

onMounted(() => {
    getStudent()
});
</script>

<template>
    <div class="student-container">
        <div class="header-student">
            <div class="header-title">
                <div class="header-active" @click="toBack">Students</div>
                <img src="/src/assets/icons/arrow-next.svg" />
                <div>{{ studentDetail.name }}</div>
            </div>

            <BaseButton title="Back" @click="toBack" />
        </div>

        <div class="student-form">
            <div class="avatar-student">
                <img src="/src/assets/images/student-default.png" />
            </div>
            <FormStudent :data="studentDetail" @updateStudent="handleUpdateStudent" type="update" />
        </div>
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
    display: flex;
    align-items: center;
}

.header-active {
    cursor: pointer;
    color: var(--Primary-300);
}

.header-title img {
    width: 20px;
}

.student-form {
    display: flex;
    gap: 32px;
}

.header-student {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.avatar-student img {
    width: 200px;
    height: 200px;
}
</style>