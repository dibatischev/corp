<template>
    <div class="wrapper">
        <div class="StatusBarCont">
            <CanbanStatusCard v-for="i in data4card" v-bind:status="i.Status" v-bind:quantity="i.quantity"
                v-bind:summary="i.summary" v-bind:key="i.id">
            </CanbanStatusCard>

        </div>
        <div class="brick"> </div>
    </div>
</template>
<script setup>
import CanbanStatusCard from './CanbanStatusCard.vue';


let data4card = [
    { id: 1, quantity: 3, summary: 100501, Status: { type: 1, title: "Принят" } },
    { id: 2, quantity: 0, summary: 100502, Status: { type: 2, title: "Собран" } },
    { id: 3, quantity: 4, summary: 100503, Status: { type: 3, title: "Доставляется" } },
    { id: 4, quantity: 7, summary: 100504, Status: { type: 4, title: "Выполнен" } },
    { id: 5, quantity: 2, summary: 100505, Status: { type: 5, title: "Отмененные" } }

]
</script>
<style lang="scss" scoped>
.wrapper{display: flex;flex-direction: column;}
.brick {
    width: 1536px;
    
    height: 1px;
    background: #d3d3d3;
    margin-top: 10px;
}

.StatusBarCont {
    display: flex;
    align-items: flex-start;
    gap: 16px;
}
</style>