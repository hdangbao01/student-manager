<script setup>
import BaseButton from './BaseButton.vue';

const emits = defineEmits(['close', 'delete']);

const handleCancel = () => {
    emits('close')
}; 

const handleDelete = () => {
    emits('delete')
};
</script>

<template>
    <div class="overlay">
        <div class="modal">
            <div class="title-modal">Confirm</div>
            <div class="content-modal">
                Delete student?
            </div>
            <div class="action-modal">
                <BaseButton title="Cancel" variant="secondary" @click="handleCancel" />
                <BaseButton title="Delete" @click="handleDelete" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
}

.modal {
    width: 400px;
    background: var(--White);
    border-radius: 18px;
    padding: 24px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.title-modal {
    font-size: 24px;
    font-weight: 600;
    color: var(--Grey-400);
}

.content-modal {
    margin: 16px 0 32px 0;
}

.action-modal {
    display: flex;
    gap: 12px;
}
</style>