import {ref,computed} from 'vue';
import { defineStore } from 'pinia';

export const useCanbanStore = defineStore('canban',() =>{
    const data = ref([
        
            {type:1,id:1,orderNum:312313,orderDate:"07.09.2023",OrderCompany:"ИП Полуянов П.П", OrderSummary:51255,OrderStatus:"Нужна доплата",OrderStatusType:1},
            {type:1,id:2,orderNum:312313,orderDate:"07.09.2023",OrderCompany:"ИП Полуянов П.П", OrderSummary:51255,OrderStatus:"Нужна доплата",OrderStatusType:1},
            {type:1,id:3,orderNum:312313,orderDate:"07.09.2023",OrderCompany:"ИП Полуянов П.П", OrderSummary:51255,OrderStatus:"Нужна доплата",OrderStatusType:1},
            {type:2,id:6,orderNum:312313,orderDate:"07.09.2023",OrderCompany:"ИП Полуянов П.П", OrderSummary:51255,OrderStatus:"Нужна доплата",OrderStatusType:1},
            {type:2,id:7,orderNum:312313,orderDate:"07.09.2023",OrderCompany:"ИП Полуянов П.П", OrderSummary:51255,OrderStatus:"Нужна доплата",OrderStatusType:1},
            {type:2,id:8,orderNum:312313,orderDate:"07.09.2023",OrderCompany:"ИП Полуянов П.П", OrderSummary:51255,OrderStatus:"Нужна доплата",OrderStatusType:1},
            {type:3,id:9,orderNum:312313,orderDate:"07.09.2023",OrderCompany:"ИП Полуянов П.П", OrderSummary:51255,OrderStatus:"Нужна доплата",OrderStatusType:1},
            {type:3,id:10,orderNum:312313,orderDate:"07.09.2023",OrderCompany:"ИП Полуянов П.П", OrderSummary:51255,OrderStatus:"Нужна доплата",OrderStatusType:1},
            {type:3,id:11,orderNum:312313,orderDate:"07.09.2023",OrderCompany:"ИП Полуянов П.П", OrderSummary:51255,OrderStatus:"Нужна доплата",OrderStatusType:1},
            {type:4,id:12,orderNum:312313,orderDate:"07.09.2023",OrderCompany:"ИП Полуянов П.П", OrderSummary:51255,OrderStatus:"Нужна доплата",OrderStatusType:1},
            {type:4,id:13,orderNum:312313,orderDate:"07.09.2023",OrderCompany:"ИП Полуянов П.П", OrderSummary:51255,OrderStatus:"Нужна доплата",OrderStatusType:1},
            {type:4,id:14,orderNum:312313,orderDate:"07.09.2023",OrderCompany:"ИП Полуянов П.П", OrderSummary:51255,OrderStatus:"Нужна доплата",OrderStatusType:1},
            {type:5,id:15,orderNum:312313,orderDate:"07.09.2023",OrderCompany:"ИП Полуянов П.П", OrderSummary:51255,OrderStatus:"Нужна доплата",OrderStatusType:1},
            {type:5,id:16,orderNum:312313,orderDate:"07.09.2023",OrderCompany:"ИП Полуянов П.П", OrderSummary:51255,OrderStatus:"Нужна доплата",OrderStatusType:1}
    
    ])
    
    

    return {data}
})