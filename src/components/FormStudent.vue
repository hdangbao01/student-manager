<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

import BaseInput from '@/components/BaseInput.vue';
import BaseButton from '@/components/BaseButton.vue';

const router = useRouter();

const props = defineProps(['type', 'data']);
const emits = defineEmits(['updateStudent']);

const nameStudent = ref('');
const classStudent = ref('');
const emailStudent = ref('');
const phoneStudent = ref('');
const genderStudent = ref('');
const addressStudent = ref('');

const handleSubmit = () => {
    if (!validation()) return;

    const formData = {
        name: nameStudent.value,
        class: classStudent.value,
        email: emailStudent.value,
        phone: phoneStudent.value,
        gender: genderStudent.value,
        address: addressStudent.value,
    };

    if (props.data) {
        axios.put(import.meta.env.VITE_BASE_API + '/student/' + props.data.id, formData)
            .then(function (response) {
                console.log('handleSubmit', response.data);
                alert('Update student successfully');
                emits('updateStudent', response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    } else {
        axios.post(import.meta.env.VITE_BASE_API + '/student', formData)
            .then(function (response) {
                alert('Add student successfully');
                router.push('/students');
            })
            .catch(function (error) {
                console.log(error);
            });
    }

};

const validation = () => {
    if (nameStudent.value && classStudent.value && emailStudent.value && phoneStudent.value && genderStudent.value && addressStudent.value) {
        return true;
    } else {
        alert('Please fill all fields');
        return false;
    }
};

const setData = (data) => {
    console.log('setData', data);
    
    nameStudent.value = data.name;
    classStudent.value = data.class;
    emailStudent.value = data.email;
    phoneStudent.value = data.phone;
    genderStudent.value = data.gender;
    addressStudent.value = data.address;
}

watch(() => props.data, (val) => {
    if (val) {
        setData(val)
    }
})

onMounted(() => {
    if (props.data) {
        setData(props.data)
    }
});
</script>

<template>
    <div class="form-container">
        <div class="form-wrapper">
            <BaseInput v-model="nameStudent" label="Name" placeholder="Enter name..." />
            <div class="form-item">
                <div class="form-input">
                    <BaseInput v-model="classStudent" label="Class" placeholder="Enter class..." />
                </div>
                <div class="form-input">
                    <BaseInput v-model="emailStudent" label="Email" placeholder="Enter email..." />
                </div>
            </div>

            <div class="form-item">
                <div class="form-input">
                    <BaseInput v-model="phoneStudent" label="Phone" placeholder="Enter phone..." />
                </div>
                <div class="form-input">
                    <div class="select-wrapper">
                        <div class="select-label">
                            Gender
                        </div>
                        <select v-model="genderStudent" class="select">
                            <option value="">Choose gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>
            </div>

            <BaseInput v-model="addressStudent" label="Address" placeholder="Enter address..." />
        </div>

        <BaseButton :title="type === 'update' ? 'Update Student' : 'Add Student'" @click="handleSubmit" />
    </div>
</template>

<style scoped>
.form-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.form-wrapper {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.form-item {
    display: flex;
    gap: 12px;
}

.form-input {
    flex: 1;
}

.select-wrapper {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.select-label {
    font-size: 14px;
    font-weight: 500;
    color: var(--Grey-200);
}

.select {
    width: 100%;
    height: 42px;
    border-radius: 4px;
    border: 1px solid var(--Grey-100);
    padding: 0 12px;
}
</style>