<template>
    <CorpModal>
        <div class="container">
            <div class="head">
                <div class="blackTxt">Пользовательские фильтры </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M13 1L1 13M1 1L13 13" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </div>
            <CorpButton v-bind:name="'Добавить фильтр'" v-bind:type="'add'">
            </CorpButton>
        </div>
    </CorpModal>
</template>

<script setup>
import CorpModal from '../UI/CorpModal.vue';
import CorpButton from '../UI/CorpButton.vue';
</script>

<style lang="scss" scoped>
.head {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid;
}

.blackTxt {
    margin-bottom: 16px;
}</style>