<template>

    <div class="about" v-if="ToView == true">
        
                
        <AboutCard :title="'Информация о заказе'">
            <div class="aboutString">
                <div class="grayTxt">Кому</div>
                <div class="blackTxt">{{ Order[0].OrderCompany }}</div>
            </div> 
            <div class="aboutString">
                <div class="grayTxt">Адрес доставки</div>
                <div class="blackTxt">{{ Order[0].OrderDetails.address }}</div>
            </div>
            <div class="aboutString">
                <div class="grayTxt">Категория торговой точки</div>
                <div class="blackTxt">{{ Order[0].OrderDetails.category }}</div>
            </div>
            <div class="aboutString">
                <div class="grayTxt">Сумма заказа</div>
                <div class="blackTxt">{{ Order[0].OrderSummary }} ₽ </div>
            </div>
            <div class="aboutString">
                <div class="grayTxt">Промокод</div>
                <div class="blackTxt" v-if="Order[0].OrderDetails.promocode == true">Есть</div>
                <div class="blackTxt" v-else>Нет</div>
            </div>

        </AboutCard>
        <AboutCard :title="'Информация о доставке'">
            <div class="aboutString">
                <div class="grayTxt">Замена товара</div>
                <div class="blackTxt">{{ Order[0].OrderDetails.replace.title }}</div>
            </div>
            <div class="aboutString">
                <div class="grayTxt">Заказ оформил</div>
                <div class="blackTxt">{{Order[0].OrderDetails.person}}</div>
            </div>
            <div class="aboutString">
                <div class="grayTxt">Адрес доставки</div>
                <div class="blackTxt">{{ Order[0].OrderDetails.address }}</div>
            </div>
            <div class="aboutString">
                <div class="grayTxt">Время и дата доставки</div>
                <div class="blackTxt">{{ Order[0].OrderDetails.datetime }}</div>
            </div>
            <div class="aboutString">
                <div class="grayTxt">Комментарий к заказу</div>
                <div class="blackTxt">{{ Order[0].OrderDetails.comment }}</div>
                
            </div>
            <div class="aboutString">
                <div class="grayTxt">Привязка к договору</div>
                <div class="blackTxt" >{{ Order[0].OrderDetails.dogovor.number }}</div>
            </div>

        </AboutCard>
        <AboutCard :title="'Информация о контактном лице'">
            <div class="aboutString">
                <div class="grayTxt">Заказ получает</div>
                <div class="blackTxt">{{ Order[0].OrderDetails.contact.name }}</div>
            </div>
            <div class="aboutString">
                <div class="grayTxt">Телефон</div>
                <div class="blackTxt">{{ Order[0].OrderDetails.contact.phone }}</div>
                
            </div>
            <div class="aboutString">
                <div class="grayTxt">Доверенность</div>
                <div class="blackTxt" v-if="Order[0].OrderDetails.contact.attorneystatus == true">Загружено</div>
                <div class="blackTxt" v-else>
                    Отсутствует
                </div>
            </div>
        </AboutCard>
    </div>
    
    

</template>
<script setup>
import AboutCard from './UI/AboutCard.vue';
import { useRoute } from 'vue-router';
import { useCanbanStore } from '@/stores/canbanStore';
import {  ref, onMounted } from 'vue';
const caban = useCanbanStore();
const route = useRoute();

let orderid = ref();
let Order = ref([{}]);

onMounted(() => {
    orderid.value = route.params.id
    getData(orderid.value)
    console.log(orderid.value)
    Order.value = caban.data.filter((item) => item.id == orderid.value)
    console.log(Order.value)

})
const filterData = (id) => {
    
    Order.value = caban.data.filter((item) => item.id == id)
   
}
function getData(i) {
    
    filterData(i)


}
</script>



<style lang="scss" scoped>
.aboutString {
    display: flex;
    gap: 30px;
    align-items: center;

}

.grayTxt {
    font-size: 13px;
    width: 100px;
    font-weight: 400;
    line-height: 120%;
    font-style: normal;
    word-wrap: wrap;
    color: $text-three;
}

.blackTxt {
    font-size: 16px;
    font-weight: 400;
    line-height: 120%;
    font-style: normal;
    color: $text-one;
}

.about {
    margin-left: 20px;
    max-width: 1520px;
    margin-top: 20px;
    margin-bottom: 20px;
    justify-content: space-between;
    display: flex;
    gap: 24px;
}
</style>