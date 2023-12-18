<template>
    <div class="CollumnWrapper">
        <CanbanCard v-for="i in tasks" v-bind:key="i.id" v-bind:OrderStatus="i.OrderStatus" v-bind:OrderNum="i.orderNum"
            v-bind:OrderCompany="i.OrderCompany" v-bind:OrderSummary="i.OrderSummary" v-bind:OrderDate="i.orderDate"
            v-bind:OrderStatusType="i.OrderStatusType" v-bind:OrderDetails="i.OrderDetails" v-bind:OrderItems="i.OrderItems"  draggable="true" @dragstart="startDrag($event,i)" 
            @click="toOrderDet(i.id)"></CanbanCard>
    </div>
</template>
<script setup>

import { useRouter } from 'vue-router';
import { ref,defineProps} from 'vue';
import CanbanCard from './CanbanCard.vue';
import { useCanbanStore } from '@/stores/canbanStore';

const caban = useCanbanStore()
const router = useRouter()
const props = defineProps({
    tasks: Array
})
let bazar = ref()
function toOrderDet(id){
    caban.filterSelected(id)
    bazar.value = caban.SelectedOrder
    console.log(bazar)
    router.push({name:'order',params:{id: id, new:"bazar"}})
    
    
}
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