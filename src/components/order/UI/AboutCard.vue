<template>
    <div class="AboutCardCont">
        <div class="AboutCardCont__head">
            <div class="blackTxt">
                {{ title }}
            </div>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M20.379 5.75758L19.1319 4.5871C18.7194 4.1957 18.1726 4.00001 17.6287 4.00001C17.0679 3.99868 16.5288 4.20937 16.1265 4.5871L13.6534 6.91321L12.4994 7.99929L4.42788 15.5981L4.00387 19.1671C3.99292 19.2732 4.00528 19.3805 4.04016 19.4817C4.07504 19.583 4.13165 19.6759 4.20627 19.7546C4.28089 19.8332 4.37185 19.8957 4.47319 19.938C4.57453 19.9803 4.68396 20.0014 4.79433 19.9999C4.82502 19.9999 4.85476 19.9999 4.8845 19.9962L8.67371 19.6011L16.7519 12.0004L17.906 10.9134L20.379 8.58731C20.5754 8.40393 20.7316 8.18419 20.8383 7.94118C20.945 7.69818 21 7.4369 21 7.17291C21 6.90892 20.945 6.64764 20.8383 6.40463C20.7316 6.16163 20.5754 5.94096 20.379 5.75758ZM7.94273 18.1654L5.69798 18.401L5.94836 16.2863L13.6266 9.06125L14.6578 8.09018L16.655 9.97018L15.6238 10.9375L7.94273 18.1654ZM19.2519 7.52535L17.7813 8.90915L15.7859 7.02915L17.2556 5.64442C17.3572 5.55113 17.492 5.49912 17.6321 5.49912C17.7722 5.49912 17.907 5.55113 18.0086 5.64442L19.2528 6.81861C19.3018 6.86445 19.3408 6.91936 19.3675 6.98007C19.3941 7.04077 19.4078 7.10604 19.4078 7.17198C19.4078 7.23792 19.3941 7.30319 19.3675 7.3639C19.3408 7.4246 19.3018 7.47951 19.2528 7.52535H19.2519Z"
                        fill="#858585" />
                </svg>
            </button>
        </div>
        <div class="AboutCardCont__fields">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'
const props = defineProps({
    title: String
})
</script>
<style lang="scss" scoped>
.AboutCardCont {
    width: 503px;
    height: 363px;
    padding: 16px;
    border-radius: 12px;
    border: 1px solid #000;

    &__head {
        display: flex;
        justify-content: space-between;

        button {
            background: none;
            border: none;
            outline: none;
        }
    }

    &__fields {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }


}
</style>