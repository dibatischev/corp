<template>
    <div class="StatusCardCont">
        <div class="StatusCardCont__tag StatusCardCont__tag-green" v-if="status.type === 1">
            {{ status.title }}
        </div>
        <div class="StatusCardCont__tag StatusCardCont__tag-lightgreen" v-if="props.status.type === 2">
            {{ status.title }}
        </div>
        <div class="StatusCardCont__tag  StatusCardCont__tag-orange" v-if="props.status.type === 3">
            {{ status.title }}
        </div>
        <div class="StatusCardCont__tag StatusCardCont__tag-dark" v-if="status.type === 4">
            {{ status.title }}
        </div>
        <div class="StatusCardCont__tag StatusCardCont__tag-red" v-if="status.type === 5">
            {{ status.title }}
        </div>
        <div class="StatusCardCont__quantity">
            Количество: {{ props.quantity }}
        </div>
        <div class="StatusCardCont__summary">
            {{ props.summary }} ₽
        </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    quantity: Number,
    status: Object,
    summary: Number

})


</script>
<style lang="scss" scoped>
.StatusCardCont {
    width: 292px;
    color: #ffffff;

    &__tag {
        border-radius: 8px;
        padding-top: 4px;
        padding-bottom: 4px;
        padding-left: 16px;
        display: flex;
        align-items: center;




        &-green {
            background: $accent-green;
        }

        &-lightgreen {
            background: $accent-lightgreen;
        }

        &-orange {
            background: $accent-orange;
        }

        &-dark {
            background: $accent-dark;
        }

        &-red {
            background: $accent-red;
        }

    }

    &__quantity {
        margin-top: 10px;
        margin-left: 12px;
        color: $text-two;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;

    }

    &__summary {
        margin-top: 8px;
        text-align: center;
        color: $text-two;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
    }
}
</style>