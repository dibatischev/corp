<template>
    <StatusBar style="margin-top: 16px;margin-left: 16px;">

    </StatusBar>
    <div class="TableCont">
        <CanbanColumn v-bind:tasks="listOne"></CanbanColumn>
        <CanbanColumn v-bind:tasks="listTwo"></CanbanColumn>
        <CanbanColumn v-bind:tasks="listThree"></CanbanColumn>
        <CanbanColumn v-bind:tasks="listFour"></CanbanColumn>
        <CanbanColumn v-bind:tasks="listFive"></CanbanColumn>
    </div>
</template>

<style lang="scss" scoped>
.TableCont {
    display: flex;
    flex-direction: row;
    gap: 16px;
    margin-left: 16px;
}
</style>

<script setup>
import { ref } from 'vue';
import StatusBar from '@/components/canban/StatusBar.vue';
import CanbanColumn from '@/components/canban/CanbanColumn.vue';
import { useCanbanStore } from '@/stores/canbanStore';
const caban = useCanbanStore()
const listOne = ref([]);
listOne.value = caban.data.filter(item => item.type === 1);
console.log(listOne.value)
const listTwo = ref([]);
listTwo.value = caban.data.filter(item => item.type === 2);
const listThree = ref([]);
listThree.value = caban.data.filter(item => item.type === 3);
const listFour = ref([]);
listFour.value = caban.data.filter(item => item.type === 4);
const listFive = ref([]);
listFive.value = caban.data.filter(item => item.type === 5);

</script>