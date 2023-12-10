<template>
    <div class="modalWrapper">
        <div class="modalWindow">

            <slot />
        </div>
    </div>
</template>
<style lang="scss" scoped>
.modalWrapper {
    width: 1600px;
    height: 900px;
    position: fixed;
    top: 0;
    left: 0;
    min-height: 100vh;
    min-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>