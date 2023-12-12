<template>
    <div class="CollumnWrapper">
        <CanbanCard v-for="i in tasks" v-bind:key="i.id" v-bind:OrderStatus="i.OrderStatus" v-bind:OrderNum="i.orderNum"
            v-bind:OrderCompany="i.OrderCompany" v-bind:OrderSummary="i.OrderSummary" v-bind:OrderDate="i.orderDate"
            v-bind:OrderStatusType="i.OrderStatusType" draggable="true" @dragstart="startDrag($event,i)"></CanbanCard>
    </div>
</template>
<script setup>
import { defineProps} from 'vue';
import CanbanCard from './CanbanCard.vue';

const props = defineProps({
    tasks: Array
})

function startDrag(evt,item){
    evt.dataTransfer.dropEffect = 'move'
    evt.dataTransfer.effectAllowed = 'move'
    evt.dataTransfer.setData('itemID',item.id)
    console.log(item.id)
}



</script>
<style  lang="scss" scoped>
.CollumnWrapper {
    height: 591px;
    width: 292px;
    background: #f5f5f6;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    overflow-x: none;


}

.CollumnWrapper::-webkit-scrollbar {
    width: 4px;
}

.CollumnWrapper::-webkit-scrollbar-thumb {
    right: 1px;
    height: 2px;
    width: 2px;
    border-radius: 4px;
    background: var(--icon-color-icon, #BDBDBD);
}
</style>