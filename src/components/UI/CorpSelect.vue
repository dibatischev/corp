<template>
    <div class="field">
        <label :for="id">
            <slot></slot>
        </label>
        <div class="selector" :id="id">
            <div class="selector__selectedTags">
                <FilterTag v-for="i in data" v-bind:name="i.name"></FilterTag>
            </div>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M11.7846 0.728309C11.4919 0.424174 11.017 0.423857 10.7239 0.7276L6.0016 5.62171L1.28037 0.727662C0.98732 0.423886 0.512446 0.424148 0.219709 0.72825C-0.0730266 1.03235 -0.0727729 1.52513 0.220277 1.82891L5.4715 7.27234C5.76431 7.57586 6.2387 7.57589 6.53154 7.2724L11.7839 1.82897C12.077 1.52522 12.0773 1.03244 11.7846 0.728309Z"
                        fill="#BDBDBD" />
                </svg>
            </button>
        </div>
    </div>
</template>
<script setup>
import { defineProps, onMounted, ref } from 'vue';
import FilterTag from './FilterTag.vue';
let id = ref('');
onMounted(() => {
    const CreateNewId = function (len) {
        if ((len == undefined) || (len <= 0)) { len = 1; }
        let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        let iffirst = 0;
        for (var i = 0; i < len; i++) {
            if (i == 0) { iffirst = 10; } else { iffirst = 0; }
            result += characters[Math.round(Math.random() * (characters.length - iffirst - 1))];
        }
        return result;
    }
    id.value = CreateNewId(15)
    console.log(data)
}


)

const props = defineProps({
    data: Array
})
</script>
<style lang="scss" scoped>
.field {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    &__deleteBtn {}

    label {
        color: $text-three;
        font-size: 13px;
        font-style: normal;     
        font-weight: 400;
        line-height: 120%;
    }
}

.selector {
    border: 1px solid $accent-gray;
    position: relative;
    display: flex;
    justify-content: space-between;
    padding-left: 6px;
    padding-top: 8px;
    padding-bottom: 8px;
    border-radius: 8px;
    min-height: 30px;

    &__selectedTags {
        display: flex;
        width: 70%;
        flex-wrap: wrap;
        align-items: center;
        align-content: center;
        gap: 4px;

    }

    button {
        position: absolute;
        right: 14px;
        top: 12px;
        background: none;
        outline: none;
        border: 0px;
        cursor: pointer;
    }
}
</style>