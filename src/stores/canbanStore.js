import {
    ref,
    computed
} from 'vue';
import {
    defineStore
} from 'pinia';

export const useCanbanStore = defineStore('canban', () => {
    const data = ref([

        {
            type: 1,
            id: 1,
            orderNum: 1,
            orderDate: "07.09.2023",
            OrderCompany: "ИП Полуянов П.П",
            OrderSummary: 51255,
            OrderStatus: "Нужна доплата",
            OrderStatusType: 1
        },
        {
            type: 1,
            id: 2,
            orderNum: 2,
            orderDate: "07.09.2023",
            OrderCompany: "ИП Полуянов П.П",
            OrderSummary: 51255,
            OrderStatus: "Нужна доплата",
            OrderStatusType: 1
        },
        {
            type: 1,
            id: 3,
            orderNum: 3,
            orderDate: "07.09.2023",
            OrderCompany: "ИП Полуянов П.П",
            OrderSummary: 51255,
            OrderStatus: "Нужна доплата",
            OrderStatusType: 1
        },
        {
            type: 2,
            id: 6,
            orderNum: 4,
            orderDate: "07.09.2023",
            OrderCompany: "ИП Полуянов П.П",
            OrderSummary: 51255,
            OrderStatus: "Нужна доплата",
            OrderStatusType: 1
        },
        {
            type: 2,
            id: 7,
            orderNum: 5,
            orderDate: "07.09.2023",
            OrderCompany: "ИП Полуянов П.П",
            OrderSummary: 51255,
            OrderStatus: "Нужна доплата",
            OrderStatusType: 1
        },
        {
            type: 2,
            id: 8,
            orderNum: 6,
            orderDate: "07.09.2023",
            OrderCompany: "ИП Полуянов П.П",
            OrderSummary: 51255,
            OrderStatus: "Нужна доплата",
            OrderStatusType: 1
        },
        {
            type: 3,
            id: 9,
            orderNum: 7,
            orderDate: "07.09.2023",
            OrderCompany: "ИП Полуянов П.П",
            OrderSummary: 51255,
            OrderStatus: "Нужна доплата",
            OrderStatusType: 1
        },
        {
            type: 3,
            id: 10,
            orderNum: 8,
            orderDate: "07.09.2023",
            OrderCompany: "ИП Полуянов П.П",
            OrderSummary: 51255,
            OrderStatus: "Нужна доплата",
            OrderStatusType: 1
        },
        {
            type: 3,
            id: 11,
            orderNum: 9,
            orderDate: "07.09.2023",
            OrderCompany: "ИП Полуянов П.П",
            OrderSummary: 51255,
            OrderStatus: "Нужна доплата",
            OrderStatusType: 1
        },
        {
            type: 4,
            id: 12,
            orderNum: 10,
            orderDate: "07.09.2023",
            OrderCompany: "ИП Полуянов П.П",
            OrderSummary: 51255,
            OrderStatus: "Нужна доплата",
            OrderStatusType: 1
        },
        {
            type: 4,
            id: 13,
            orderNum: 11,
            orderDate: "07.09.2023",
            OrderCompany: "ИП Полуянов П.П",
            OrderSummary: 51255,
            OrderStatus: "Нужна доплата",
            OrderStatusType: 1
        },
        {
            type: 4,
            id: 14,
            orderNum: 12,
            orderDate: "07.09.2023",
            OrderCompany: "ИП Полуянов П.П",
            OrderSummary: 51255,
            OrderStatus: "Нужна доплата",
            OrderStatusType: 1
        },
        {
            type: 5,
            id: 15,
            orderNum: 13,
            orderDate: "07.09.2023",
            OrderCompany: "ИП Полуянов П.П",
            OrderSummary: 51255,
            OrderStatus: "Нужна доплата",
            OrderStatusType: 1
        },
        {
            type: 5,
            id: 16,
            orderNum: 14,
            orderDate: "07.09.2023",
            OrderCompany: "ИП Полуянов П.П",
            OrderSummary: 51255,
            OrderStatus: "Нужна доплата",
            OrderStatusType: 1
        }

    ])



    return {
        data
    }
})