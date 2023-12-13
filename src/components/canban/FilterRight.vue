<template>
    <div class="fields">
        <CorpSelect v-show="i.isVisible == true" v-for="i in fieldsToView" v-bind:data="i.data" >{{ i.name }}</CorpSelect>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import CorpSelect from '../UI/CorpSelect.vue';
import { useCanbanStore } from '@/stores/canbanStore';
const caban = useCanbanStore();
const fieldsToView = ref([
    {name:'Статус',isVisible:true,data:caban.statuses},
    {name:'Контрагент',isVisible:true,data:caban.companies},
    {name:'Тип оплаты',isVisible:true,data:caban.payments}
])
</script>
<style lang="scss" scoped>
.fields{
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap:16px;
}
</style>