<template>
    <div class="CardWrapper">
        <div class="CanbanCardCont">
            <div class="text">
                <div class="boldTxt">Заказ № {{ OrderNum }}</div>
                <div class="blackTxt">{{ OrderDate }}</div>
                <div class="blueTxt">{{ OrderCompany }}</div>
                <div class="blackTxt">{{ OrderSummary }} ₽</div>
            </div>
        </div>
        <div class="CanbanCardFooter">
    
            <div class="StatusText StatusText__red" v-if="OrderStatusType === 1">{{ OrderStatus }}</div>
            <div class="StatusText StatusText__green" v-if="OrderStatusType === 2">{{ OrderStatus }}</div>
            <div class="StatusText StatusText__orange" v-if="OrderStatusType === 3">{{ OrderStatus }}</div>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="1.5" transform="rotate(-180 8 8)" fill="#333333" />
                <circle cx="8" cy="3" r="1.5" transform="rotate(-180 8 3)" fill="#333333" />
                <circle cx="8" cy="13" r="1.5" transform="rotate(-180 8 13)" fill="#333333" />
            </svg>
        </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    OrderNum: Number,
    OrderCompany: String,
    OrderSummary: Number,
    OrderStatus: String,
    OrderStatusType: Number,
    OrderDate:String

})

function startDrag(evt,item){
    evt.dataTransfer.dropEffect = 'move'
    evt.dataTransfer.effectAllowed = 'move'
    evt.dataTransfer.setData('itemTYPE',item.type)
}
</script>
<style lang="scss" scoped>
.CardWrapper {
    margin-top: 16px;
    margin-left: 12px;
    display: flex;
    flex-direction: column;
    width: 268px;
    height: 173px;
    flex-shrink: 0;
    border-radius: 8px;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.12);

}

.blueTxt {
    color: #0085B0;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
}

.blackTxt {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: #0C0C0D; 
}

.boldTxt {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    color: #0C0C0D; 
}

.CanbanCardCont {

    background: #FFF;
    display: flex;
    height: 141px;
    flex-direction: column;
    gap: 12px;
    border-radius: 8px 8px 0 0;

}

.StatusText {
    margin-left: 16px;

    &__green{
        color:$accent-lightgreen;
    }

    &__orange{
        color: $accent-orange;
    }

    &__red{
        color:$accent-red;
    }
}

.text {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 16px;
    margin-left: 16px;
}

.CanbanCardFooter {
    display: flex;
    margin-top: 12px;
    height: 32px;
    background: #F5F5F6;
    border-radius: 0 0 8px 8px;
    justify-content: space-between;
}
</style>