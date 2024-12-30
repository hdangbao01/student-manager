<script setup>
import { computed } from 'vue';

const emits = defineEmits(["update:modelValue"]);
const props = defineProps({
    label: String,
    placeholder: String,
    modelValue: String
});

const innerValue = computed({
    get: () => props.modelValue,
    set: (value) => {
        emits("update:modelValue", value);
    }
});
</script>

<template>
    <div class="input-container">
        <div class="input-label">
            {{ label }}
        </div>
        <input v-model="innerValue" class="input" type="text" :placeholder="placeholder" />
    </div>
</template>

<style scoped>
.input-container {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.input-label {
    font-size: 14px;
    font-weight: 500;
    color: var(--Grey-200);
}

.input {
    height: 42px;
    border-radius: 4px;
    border: 1px solid var(--Grey-100);
    padding: 0 12px;
}
</style>