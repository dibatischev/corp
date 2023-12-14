<template>
    <div class="filterLeftCont">
        <div class="filterLeftCont__grayTxt">Пользовательские фильтры</div>
        <CorpButton v-bind:name="'Новый фильтр'" v-bind:type="'add'">
    </CorpButton>
    </div>
    
</template>

<script setup>
import CorpButton from '../UI/CorpButton.vue';
</script>

<style lang="scss" scoped>
.filterLeftCont{
    width: 40%;
    border-right: 1px solid $accent-gray;
    &__grayTxt{
        color: $text-three;
        line-height: 130%;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;

    }
}
</style>
<!--icon-color-icon

Нужен типа селект, который будет выводить поля. И див, в котором будут лежать тэги.
-->
