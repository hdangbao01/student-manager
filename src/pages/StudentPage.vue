<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

import BaseButton from '@/components/BaseButton.vue';
import TableStudent from '@/components/TableStudent.vue';
import NoRecord from '@/components/NoRecord.vue';
import Loading from '@/components/Loading.vue';

const router = useRouter();

const toAddPage = () => {
    router.push('/add-student');
};

const isLoading = ref(true)
const listStudent = ref([]);
const getAllStudent = () => {
    isLoading.value = true

    axios.get(import.meta.env.VITE_BASE_API + '/student')
        .then((response) => {
            listStudent.value = response.data;
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            isLoading.value = false
        });
}

const handleDelete = (id) => {
    const findIndex = listStudent.value.findIndex((item) => item.id === id)

    listStudent.value.splice(findIndex, 1);
}

const searchValue = ref('')
const listStudentSeach = ref([])
const handleSearch = () => {
    const listSearch = listStudent.value.filter((item) => {
        return item.email.includes(searchValue.value)
    })

    listStudentSeach.value = listSearch;
}

watch(searchValue, (val) => {
    if (val) {
        handleSearch()
    }
})

onMounted(() => {
    getAllStudent()
});
</script>

<template>
    <div class="student-container">
        <div class="header-student">
            <div class="header-title">
                Students
            </div>

            <BaseButton title="Add Student" @click="toAddPage" />
        </div>

        <div class="search-student">
            <img src="/src/assets/icons/search.svg" />
            <input v-model="searchValue" type="text" placeholder="Search for a student by email..." />
        </div>

        <div class="load-student" v-if="isLoading">
            <Loading />
        </div>

        <template v-else>
            <NoRecord v-if="searchValue ? !listStudentSeach.length : !listStudent.length" />
            <div class="table-student" v-else>
                <TableStudent @deleteStudent="handleDelete" :listStudent="searchValue ? listStudentSeach : listStudent" />
            </div>
        </template>
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

.search-student {
    width: 100%;
    display: flex;
    padding: 16px;
    gap: 16px;
    background: #FCFAFA;
}

.search-student input {
    flex: 1;
    border: none;
    background-color: transparent;
    outline: none;
}

.load-student {
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>