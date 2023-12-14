<template>
    <div class="rowCont">
        <div class="product">
            <img :src="$props.product.src"/>
            <div class="blackTxt">
                {{ props.product.name }}
            </div>
        </div>
        <div class="">
            <input/>
            <div class="blackTxt">
                {{ props.product.unit }}
            </div>
        </div>
        <div class="blackTxt">
            {{ props.product.price }} ₽
        </div>
        <div class="blackTxt">
            {{ props.product.weight }}
        </div>
        <div class="blackTxt">
            {{ props.product.summary }}
        </div>
    </div>
</template>