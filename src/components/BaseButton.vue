<script setup>
const props = defineProps({
    title: String,
    variant: String
});
</script>

<template>
    <button class="base-button" :class="{'secondary': variant === 'secondary'}">
        {{ title }}
    </button>
</template>

<style scoped>
.base-button {
    cursor: pointer;
    padding: 12px 14px;
    color: var(--White);
    font-size: 14px;
    font-weight: 600;
    border-radius: 4px;
    background-color: var(--Primary-300);
    border: none;
    outline: none;
}

.secondary {
    background-color: transparent;
    border: 1px solid var(--Primary-300);
    color: var(--Grey-500);
}
</style>