<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

import ModalDelete from '@/components/ModalDelete.vue';

const router = useRouter();

const props = defineProps({
    listStudent: {
        type: Array,
        default: [],
    },
});
const emits = defineEmits(['deleteStudent']);

const tableHeader = ref([
    {
        name: "Name",
    },
    {
        name: "Class",
    },
    {
        name: "Email",
    },
    {
        name: "Phone",
    },
    {
        name: "Gender",
    },
    {
        name: "Address",
    },
    {
        name: "Action",
    },
]);

const toDetail = (id) => {
    router.push(`/student/${id}`);
};

const handleDelete = (id) => {
    alertModal.value = {
        isShow: true,
        content: "Are your sure to delete student?",
        title: "Confirm",
        id: id,
    };
};

const confirmDelete = () => {
    const idStudent = alertModal.value.id;

    axios.delete(import.meta.env.VITE_BASE_API + '/student/' + idStudent)
        .then(function (response) {
            alert('Delete student successfully student');
            emits('deleteStudent', idStudent)
        })
        .catch(function (error) {
            console.log(error);
        })

    resetModal()
};

const alertModal = ref({
    isShow: false,
    content: "",
    title: "",
    id: null,
});

const resetModal = () => {
    alertModal.value = {
        isShow: false,
        content: "",
        title: "",
        id: null,
    };
};
</script>

<template>
    <table>
        <tr>
            <th v-for="(item, index) in tableHeader" :key="item.name">{{ item.name }}</th>
        </tr>
        <tbody>
            <tr class="item-student" @click.stop="toDetail(item.id)" v-for="item in listStudent" :key="item.id">
                <td>
                    <div class="info-student">
                        <img class="avt-student" src="/src/assets/images/student-default.png" />
                        {{ item.name }}
                    </div>
                </td>
                <td>{{ item.class }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.phone }}</td>
                <td>{{ item.gender }}</td>
                <td>{{ item.address }}</td>
                <td class="item-option">
                    <div class="item-icon success">
                        <img src="/src/assets/icons/edit.svg" />
                    </div>
                    <div class="item-icon warning" @click.stop="handleDelete(item.id)">
                        <img src="/src/assets/icons/delete.svg" />
                    </div>
                </td>
            </tr>
        </tbody>
    </table>

    <Teleport to="body">
        <ModalDelete @close="resetModal" @delete="confirmDelete" v-if="alertModal.isShow" />
    </Teleport>
</template>

<style scoped>
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    height: 100%;
}

td, th {
    /* width: calc(100% / 7); */
    border: none;
    text-align: left;
    font-size: 12px;
}

th {
    padding: 16px 8px;
    color: var(--Grey-500);
    font-weight: 700;
}

td {
    padding: 12px 8px;
    font-weight: 500;
}

.item-student {
    color: var(--Grey-400);
}

.item-student:hover {
    cursor: pointer;
    background-color: var(--Primary-300);
    color: var(--White);
}

.item-option {
    display: flex;
    align-items: center;
    gap: 4px;
}

.item-icon {
    width: 24px;
    height: 24px;
    padding: 4px;
    border-radius: 4px;
}

.success {
    background-color: rgb(0, 255, 170);
}

.warning {
    background-color: rgb(255, 109, 56)
}

.item-icon img {
    width: 100%;
    height: 100%;
}

.info-student {
    display: flex;
    align-items: center;
    gap: 8px;
}

.avt-student {
    width: 24px;
    height: 24px;
    object-fit: cover;
}

tr:nth-child(even) {
    background-color: var(--Project-secondary-10, rgba(235, 246, 255, 0.50));
}
</style>