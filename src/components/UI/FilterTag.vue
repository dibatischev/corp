<template>
    <div class="tagCont">
        <div class="blackTxt">{{ name }}</div>
        <button class="delete">
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                <path d="M7 1L1 7M1 1L7 7" stroke="#858585" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
        </button>
    </div>
</template>
<script setup>
import { defineEmits,defineProps } from 'vue';
const props = defineProps({
    name:String
})
</script>
<style lang="scss" scoped>
.tagCont {
    padding: 6px 8px;
    display: flex;
    gap: 9px;
    border-radius: 8px;
    background: rgba(93, 136, 150, 0.12);
}

.blackTxt {
    color: $text-one;
    font-size: 15px;
    font-weight: 400;
    line-height: 120%;

}

.delete{
    background: none;
    outline: none;
    border:0px;
    cursor: pointer;
}
</style>
