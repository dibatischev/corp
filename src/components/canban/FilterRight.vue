<template>
    <div class="fields">
        <CorpSelect  v-for="i in fields" v-bind:data="i.data" @click="console.log(i.data)">{{ i.name }}</CorpSelect>
    </div>
</template>
<script setup>
import { defineProps,ref } from 'vue';
import CorpSelect from '../UI/CorpSelect.vue';
import { useCanbanStore } from '@/stores/canbanStore';
const caban = useCanbanStore();
const props = defineProps({
    fields:Array
})
</script>
<style lang="scss" scoped>
.fields{
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap:16px;
}
</style>