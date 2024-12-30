<script setup>
</script>

<template>
    <div class="no-record">
        <img src="/src/assets/images/no-record.png" />
        <div>
            <div class="title-record">No students at this time</div>
            <p class="desc-record">Students will appear here after they enroll in your school.  </p>
        </div>
    </div>
</template>

<style scoped>
.no-record {
    width: 100%;
    background-color: var(--Grey-5);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    padding-bottom: 85px;
}

.no-record img {
    width: 340px;
    height: 255;
}

.title-record {
    color: var(--Grey-400);
    font-size: 28px;
    font-weight: 600;
}

.desc-record {
    color: var(--Grey-400);
    font-size: 14px;
    font-weight: 500;
}
</style>