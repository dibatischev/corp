<template>
    <StatusBar style="margin-top: 16px;margin-left: 16px;">

    </StatusBar>
    <div class="TableCont">
        
            <CanbanColumn v-bind:tasks="getTypes(1)" @drop="onDrop($event, 1)" @dragenter.prevent @dragover.prevent>
            </CanbanColumn>
            <CanbanColumn v-bind:tasks="getTypes(2)" @drop="onDrop($event, 2)" @dragenter.prevent @dragover.prevent>
            </CanbanColumn>
            <CanbanColumn v-bind:tasks="getTypes(3)" @drop="onDrop($event, 3)" @dragenter.prevent @dragover.prevent>
            </CanbanColumn>
            <CanbanColumn v-bind:tasks="getTypes(4)" @drop="onDrop($event, 4)" @dragenter.prevent @dragover.prevent>
            </CanbanColumn>
            <CanbanColumn v-bind:tasks="getTypes(5)" @drop="onDrop($event, 5)" @dragenter.prevent @dragover.prevent>
                
            </CanbanColumn>
            
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
import FilterModal from '@/components/canban/FilterModal.vue';
import StatusBar from '@/components/canban/StatusBar.vue';
import CanbanColumn from '@/components/canban/CanbanColumn.vue';
import { useCanbanStore } from '@/stores/canbanStore';
import OrderDetails from '@/components/order/OrderDetails.vue';

const caban = useCanbanStore()
const getTypes = (type) => {
    return caban.data.filter((item) => item.type == type)
}
const glFil = caban.globalFilter;
let actual = caban.SelectedOrder;
function onDrop(evt, type) {
    const itemID = evt.dataTransfer.getData('itemID');
    const item = caban.data.find((item) => item.id == itemID)
    item.type = type
}

</script>