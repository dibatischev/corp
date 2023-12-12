<template>
    <div class="filterLeftCont">
        <div class="filterLeftCont__grayTxt">Пользовательские фильтры</div>
    </div>
    <CorpButton v-bind:name="'Добавить фильтр'" v-bind:type="'add'">
    </CorpButton>
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
