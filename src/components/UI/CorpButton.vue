<template>
    <div class="corpButton">
        <div v-if="type === 'add'">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                    d="M9.84375 3.375C9.84375 2.90901 9.46599 2.53125 9 2.53125C8.53401 2.53125 8.15625 2.90901 8.15625 3.375V8.15625H3.375C2.90901 8.15625 2.53125 8.53401 2.53125 9C2.53125 9.46599 2.90901 9.84375 3.375 9.84375H8.15625V14.625C8.15625 15.091 8.53401 15.4688 9 15.4688C9.46599 15.4688 9.84375 15.091 9.84375 14.625V9.84375H14.625C15.091 9.84375 15.4688 9.46599 15.4688 9C15.4688 8.53401 15.091 8.15625 14.625 8.15625H9.84375V3.375Z"
                    fill="white" />
            </svg>
        </div>
        <div class="whiteTxt"> {{ props.name }}
        </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    type: String,
    name:String
})
</script>
<style lang="scss" scoped>
.corpButton {
    width:fit-content;
    padding: 6px 8px;
    border-radius: 8px;
    display: flex;
    gap: 6px;
    background: $accent-dark;
    align-items: center;
    cursor:pointer;
    justify-content: center;
}
.whiteTxt{
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    color: #fff;
}
</style>