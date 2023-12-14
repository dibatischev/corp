<template>
    <div class="field">
        <label :for="id"><slot></slot></label>
        <select :id="id"></select> 
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
let id = ref('');
onMounted(()=>
{
    const CreateNewId = function (len) {
        if ((len == undefined) || (len <=0)){len = 1;}
        let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            let result = '';
            let iffirst = 0;
        for (var i = 0; i < len; i++){
            if (i == 0) {iffirst = 10;} else {iffirst = 0;}
            result += characters[Math.round(Math.random()*(characters.length - iffirst -1))];
        }
        return result;
    }
    id.value = CreateNewId(15)
}


)
</script>
<style lang="scss" scoped>
.field{
    display: flex;
    flex-direction: column;
    gap:10px;

    label{
        color: $text-three;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%;
    }

    select{
        width: 400px;
        padding: 6px 8px;
        border-radius: 8px;
        border:1px solid $accent-gray;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        gap:10px;
    }
}
</style>