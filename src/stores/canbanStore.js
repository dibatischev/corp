import {
    ref
} from 'vue';
import {
    defineStore
} from 'pinia';

export const useCanbanStore = defineStore('canban', () => {

    const globalFilter = ref(1)

    const data = ref([

        {
            type: 1,
            id: 1,
            orderNum: 1,
            orderDate: "07.09.2023",
            OrderCompany: "ИП Полуянов П.П",
            OrderSummary: 51255,
            OrderStatus: "Нужна доплата",
            OrderStatusType: 1,
            ResponsibleManager: 'Некоторый менеджер',
            OrderDetails: {
                address: 'адрес 1', category: 'ресторан', promocode: false, replace: { id: 1, title: 'Заменить и всё' }, person: 'Человек 1', datetime: 'Некая дата', comment: 'тут комментарий 1', dogovor: { id: 1, number: 'Договор 1' }, contact:{
                    id:1,name:'человек 2',phone:'+79211111111',attorneystatus:true
                }
            },
            OrderItems: [
                { id: 23444, img: '/src/assets/img/1.png', title: 'Сыр колбас', quantity: 3, weight: 2.4, unit: 'шт', price: 2431, summary: 23481 },
                { id: 23445, img: '/src/assets/img/2.png', title: 'Мыр бамбас', quantity: 4, weight: 2.5, unit: 'кор', price: 2432, summary: 23482 },
                { id: 23446, img: '/src/assets/img/3.png', title: 'Кыр балбас', quantity: 5, weight: 2.6, unit: 'шт', price: 2433, summary: 23483 },
                { id: 23447, img: '/src/assets/img/4.png', title: 'Чота там', quantity: 6, weight: 2.7, unit: 'кг', price: 2434, summary: 23484 }

            ]

        },
        {
            type: 1,
            id: 2,
            orderNum: 2,
            orderDate: "07.09.2023",
            OrderCompany: "ООО Компания 409",
            OrderSummary: 51255,
            OrderStatus: "Нужна доплата",
            OrderStatusType: 1,
            ResponsibleManager: 'Некоторый менеджер',
            OrderDetails: {
                address: 'адрес 2', category: 'ресторан', promocode: false, replace: { id: 1, title: 'Заменить и всё' }, person: 'Человек 3', datetime: 'Некая дата 2', comment: 'тут комментарий 2', dogovor: { id: 2, number: 'Договор 2' }, contact:{
                    id:2,name:'человек 4',phone:'+79211111112',attorneystatus:true
                }
            },
            OrderItems: [
                { id: 23444, img: '/src/assets/img/1.png', title: 'Сыр колбас', quantity: 3, weight: 2.4, unit: 'шт', price: 2431, summary: 23481 },
                { id: 23445, img: '/src/assets/img/2.png', title: 'Мыр бамбас', quantity: 4, weight: 2.5, unit: 'кор', price: 2432, summary: 23482 },
                { id: 23446, img: '/src/assets/img/3.png', title: 'Кыр балбас', quantity: 5, weight: 2.6, unit: 'шт', price: 2433, summary: 23483 },
                { id: 23447, img: '/src/assets/img/4.png', title: 'Чота там', quantity: 6, weight: 2.7, unit: 'кг', price: 2434, summary: 23484 }
            ]
        },
        {
            type: 1,
            id: 3,
            orderNum: 3,
            orderDate: "07.09.2023",
            OrderCompany: "ООО Компания 417",
            OrderSummary: 51255,
            OrderStatus: "Нужна доплата",
            OrderStatusType: 1,
            ResponsibleManager: 'Некоторый менеджер',
            OrderDetails: {
                address: 'адрес 3', category: 'ресторан', promocode: false, replace: { id: 1, title: 'Заменить и всё' }, person: 'Человек 5', datetime: 'Некая дата 3', comment: 'тут комментарий 3', dogovor: { id: 3, number: 'Договор 3' }, contact:{
                    id:3,name:'человек 6',phone:'+79211111113',attorneystatus:true
                }
            },
            OrderItems: [
                { id: 23444, img: '/src/assets/img/1.png', title: 'Сыр колбас', quantity: 3, weight: 2.4, unit: 'шт', price: 2431, summary: 23481 },
                { id: 23445, img: '/src/assets/img/2.png', title: 'Мыр бамбас', quantity: 4, weight: 2.5, unit: 'кор', price: 2432, summary: 23482 },
                { id: 23446, img: '/src/assets/img/3.png', title: 'Кыр балбас', quantity: 5, weight: 2.6, unit: 'шт', price: 2433, summary: 23483 },
                { id: 23447, img: '/src/assets/img/4.png', title: 'Чота там', quantity: 6, weight: 2.7, unit: 'кг', price: 2434, summary: 23484 }
            ]
        },
        {
            type: 2,
            id: 6,
            orderNum: 4,
            orderDate: "07.09.2023",
            OrderCompany: "ООО Компания 444",
            OrderSummary: 51255,
            OrderStatus: "Нужна доплата",
            OrderStatusType: 1,
            ResponsibleManager: 'Некоторый менеджер',
            OrderDetails: {
                address: '', category: '', promocode: false, replace: { id: 1, title: '' }, person: '', datetime: '', comment: '', dogovor: { id: 1, number: '' }, contact:{
                    id:1,name:'',phone:'',attorneystatus:true
                }
            },
            OrderItems: [
                { id: 23444, img: '/src/assets/img/1.png', title: 'Сыр колбас', quantity: 3, weight: 2.4, unit: 'шт', price: 2431, summary: 23481 },
                { id: 23445, img: '/src/assets/img/2.png', title: 'Мыр бамбас', quantity: 4, weight: 2.5, unit: 'кор', price: 2432, summary: 23482 },
                { id: 23446, img: '/src/assets/img/3.png', title: 'Кыр балбас', quantity: 5, weight: 2.6, unit: 'шт', price: 2433, summary: 23483 },
                { id: 23447, img: '/src/assets/img/4.png', title: 'Чота там', quantity: 6, weight: 2.7, unit: 'кг', price: 2434, summary: 23484 }

            ]
        },
        {
            type: 2,
            id: 7,
            orderNum: 5,
            orderDate: "07.09.2023",
            OrderCompany: "ООО Компания 433",
            OrderSummary: 51255,
            OrderStatus: "Нужна доплата",
            OrderStatusType: 1,
            ResponsibleManager: 'Некоторый менеджер',
            OrderDetails: {
                address: '', category: '', promocode: false, replace: { id: 1, title: '' }, person: '', datetime: '', comment: '', dogovor: { id: 1, number: '' }, contact:{
                    id:1,name:'',phone:'',attorneystatus:true
                }
            },
            OrderItems: [
                { id: 23444, img: '/src/assets/img/1.png', title: 'Сыр колбас', quantity: 3, weight: 2.4, unit: 'шт', price: 2431, summary: 23481 },
                { id: 23445, img: '/src/assets/img/2.png', title: 'Мыр бамбас', quantity: 4, weight: 2.5, unit: 'кор', price: 2432, summary: 23482 },
                { id: 23446, img: '/src/assets/img/3.png', title: 'Кыр балбас', quantity: 5, weight: 2.6, unit: 'шт', price: 2433, summary: 23483 },
                { id: 23447, img: '/src/assets/img/4.png', title: 'Чота там', quantity: 6, weight: 2.7, unit: 'кг', price: 2434, summary: 23484 }
            ]
        },
        {
            type: 2,
            id: 8,
            orderNum: 6,
            orderDate: "07.09.2023",
            OrderCompany: "ООО Компания 424",
            OrderSummary: 51255,
            OrderStatus: "Нужна доплата",
            OrderStatusType: 1,
            ResponsibleManager: 'Некоторый менеджер',
            OrderDetails: {
                address: '', category: '', promocode: false, replace: { id: 1, title: '' }, person: '', datetime: '', comment: '', dogovor: { id: 1, number: '' }, contact:{
                    id:1,name:'',phone:'',attorneystatus:true
                }
            },
            OrderItems: [
                { id: 23444, img: '/src/assets/img/1.png', title: 'Сыр колбас', quantity: 3, weight: 2.4, unit: 'шт', price: 2431, summary: 23481 },
                { id: 23445, img: '/src/assets/img/2.png', title: 'Мыр бамбас', quantity: 4, weight: 2.5, unit: 'кор', price: 2432, summary: 23482 },
                { id: 23446, img: '/src/assets/img/3.png', title: 'Кыр балбас', quantity: 5, weight: 2.6, unit: 'шт', price: 2433, summary: 23483 },
                { id: 23447, img: '/src/assets/img/4.png', title: 'Чота там', quantity: 6, weight: 2.7, unit: 'кг', price: 2434, summary: 23484 }
            ]
        },
        {
            type: 3,
            id: 9,
            orderNum: 7,
            orderDate: "07.09.2023",
            OrderCompany: "ООО Компания 422",
            OrderSummary: 51255,
            OrderStatus: "Нужна доплата",
            OrderStatusType: 1,
            ResponsibleManager: 'Некоторый менеджер',
            OrderDetails: {
                address: '', category: '', promocode: false, replace: { id: 1, title: '' }, person: '', datetime: '', comment: '', dogovor: { id: 1, number: '' }, contact:{
                    id:1,name:'',phone:'',attorneystatus:true
                }
            },
            OrderItems: [
                { id: 23444, img: '/src/assets/img/1.png', title: 'Сыр колбас', quantity: 3, weight: 2.4, unit: 'шт', price: 2431, summary: 23481 },
                { id: 23445, img: '/src/assets/img/2.png', title: 'Мыр бамбас', quantity: 4, weight: 2.5, unit: 'кор', price: 2432, summary: 23482 },
                { id: 23446, img: '/src/assets/img/3.png', title: 'Кыр балбас', quantity: 5, weight: 2.6, unit: 'шт', price: 2433, summary: 23483 },
                { id: 23447, img: '/src/assets/img/4.png', title: 'Чота там', quantity: 6, weight: 2.7, unit: 'кг', price: 2434, summary: 23484 }

            ]
        },
        {
            type: 3,
            id: 10,
            orderNum: 8,
            orderDate: "07.09.2023",
            OrderCompany: "ООО Компания 111",
            OrderSummary: 51255,
            OrderStatus: "Нужна доплата",
            OrderStatusType: 1,
            ResponsibleManager: 'Некоторый менеджер',
            OrderDetails: {
                address: '', category: '', promocode: false, replace: { id: 1, title: '' }, person: '', datetime: '', comment: '', dogovor: { id: 1, number: '' }, contact:{
                    id:1,name:'',phone:'',attorneystatus:true
                }
            },
            OrderItems: [
                { id: 23444, img: '/src/assets/img/1.png', title: 'Сыр колбас', quantity: 3, weight: 2.4, unit: 'шт', price: 2431, summary: 23481 },
                { id: 23445, img: '/src/assets/img/2.png', title: 'Мыр бамбас', quantity: 4, weight: 2.5, unit: 'кор', price: 2432, summary: 23482 },
                { id: 23446, img: '/src/assets/img/3.png', title: 'Кыр балбас', quantity: 5, weight: 2.6, unit: 'шт', price: 2433, summary: 23483 },
                { id: 23447, img: '/src/assets/img/4.png', title: 'Чота там', quantity: 6, weight: 2.7, unit: 'кг', price: 2434, summary: 23484 }

            ]
        },
        {
            type: 3,
            id: 11,
            orderNum: 9,
            orderDate: "07.09.2023",
            OrderCompany: "ИП Полуянов П.П",
            OrderSummary: 51255,
            OrderStatus: "Нужна доплата",
            OrderStatusType: 1,
            ResponsibleManager: 'Некоторый менеджер',
            OrderDetails: {
                address: '', category: '', promocode: false, replace: { id: 1, title: '' }, person: '', datetime: '', comment: '', dogovor: { id: 1, number: '' }, contact:{
                    id:1,name:'',phone:'',attorneystatus:true
                }
            },
            OrderItems: [
                { id: 23444, img: '/src/assets/img/1.png', title: 'Сыр колбас', quantity: 3, weight: 2.4, unit: 'шт', price: 2431, summary: 23481 },
                { id: 23445, img: '/src/assets/img/2.png', title: 'Мыр бамбас', quantity: 4, weight: 2.5, unit: 'кор', price: 2432, summary: 23482 },
                { id: 23446, img: '/src/assets/img/3.png', title: 'Кыр балбас', quantity: 5, weight: 2.6, unit: 'шт', price: 2433, summary: 23483 },
                { id: 23447, img: '/src/assets/img/4.png', title: 'Чота там', quantity: 6, weight: 2.7, unit: 'кг', price: 2434, summary: 23484 }

            ]
        },
        {
            type: 4,
            id: 12,
            orderNum: 10,
            orderDate: "07.09.2023",
            OrderCompany: "ООО Компания 4",
            OrderSummary: 51255,
            OrderStatus: "Нужна доплата",
            OrderStatusType: 1,
            ResponsibleManager: 'Некоторый менеджер',
            OrderDetails: {
                address: '', category: '', promocode: false, replace: { id: 1, title: '' }, person: '', datetime: '', comment: '', dogovor: { id: 1, number: '' }, contact:{
                    id:1,name:'',phone:'',attorneystatus:true
                }
            },
            OrderItems: [
                { id: 23444, img: '/src/assets/img/1.png', title: 'Сыр колбас', quantity: 3, weight: 2.4, unit: 'шт', price: 2431, summary: 23481 },
                { id: 23445, img: '/src/assets/img/2.png', title: 'Мыр бамбас', quantity: 4, weight: 2.5, unit: 'кор', price: 2432, summary: 23482 },
                { id: 23446, img: '/src/assets/img/3.png', title: 'Кыр балбас', quantity: 5, weight: 2.6, unit: 'шт', price: 2433, summary: 23483 },
                { id: 23447, img: '/src/assets/img/4.png', title: 'Чота там', quantity: 6, weight: 2.7, unit: 'кг', price: 2434, summary: 23484 }

            ]
        },
        {
            type: 4,
            id: 13,
            orderNum: 11,
            orderDate: "07.09.2023",
            OrderCompany: "ООО Компания 5",
            OrderSummary: 51255,
            OrderStatus: "Нужна доплата",
            OrderStatusType: 1,
            ResponsibleManager: 'Некоторый менеджер',
            OrderDetails: {
                address: '', category: '', promocode: false, replace: { id: 1, title: '' }, person: '', datetime: '', comment: '', dogovor: { id: 1, number: '' }, contact:{
                    id:1,name:'',phone:'',attorneystatus:true
                }
            },
            OrderItems: [
                { id: 23444, img: '/src/assets/img/1.png', title: 'Сыр колбас', quantity: 3, weight: 2.4, unit: 'шт', price: 2431, summary: 23481 },
                { id: 23445, img: '/src/assets/img/2.png', title: 'Мыр бамбас', quantity: 4, weight: 2.5, unit: 'кор', price: 2432, summary: 23482 },
                { id: 23446, img: '/src/assets/img/3.png', title: 'Кыр балбас', quantity: 5, weight: 2.6, unit: 'шт', price: 2433, summary: 23483 },
                { id: 23447, img: '/src/assets/img/4.png', title: 'Чота там', quantity: 6, weight: 2.7, unit: 'кг', price: 2434, summary: 23484 }

            ]
        },
        {
            type: 4,
            id: 14,
            orderNum: 12,
            orderDate: "07.09.2023",
            OrderCompany: "ООО Компания 6",
            OrderSummary: 51255,
            OrderStatus: "Нужна доплата",
            OrderStatusType: 1,
            ResponsibleManager: 'Некоторый менеджер',
            OrderDetails: {
                address: '', category: '', promocode: false, replace: { id: 1, title: '' }, person: '', datetime: '', comment: '', dogovor: { id: 1, number: '' }, contact:{
                    id:1,name:'',phone:'',attorneystatus:true
                }
            },
            OrderItems: [
                { id: 23444, img: '/src/assets/img/1.png', title: 'Сыр колбас', quantity: 3, weight: 2.4, unit: 'шт', price: 2431, summary: 23481 },
                { id: 23445, img: '/src/assets/img/2.png', title: 'Мыр бамбас', quantity: 4, weight: 2.5, unit: 'кор', price: 2432, summary: 23482 },
                { id: 23446, img: '/src/assets/img/3.png', title: 'Кыр балбас', quantity: 5, weight: 2.6, unit: 'шт', price: 2433, summary: 23483 },
                { id: 23447, img: '/src/assets/img/4.png', title: 'Чота там', quantity: 6, weight: 2.7, unit: 'кг', price: 2434, summary: 23484 }

            ]
        },
        {
            type: 5,
            id: 15,
            orderNum: 13,
            orderDate: "07.09.2023",
            OrderCompany: "ООО Компания 7",
            OrderSummary: 51255,
            OrderStatus: "Нужна доплата",
            OrderStatusType: 1,
            ResponsibleManager: 'Некоторый менеджер',
            OrderDetails: {
                address: '', category: '', promocode: false, replace: { id: 1, title: '' }, person: '', datetime: '', comment: '', dogovor: { id: 1, number: '' }, contact:{
                    id:1,name:'',phone:'',attorneystatus:true
                }
            },
            OrderItems: [
                { id: 23444, img: '/src/assets/img/1.png', title: 'Сыр колбас', quantity: 3, weight: 2.4, unit: 'шт', price: 2431, summary: 23481 },
                { id: 23445, img: '/src/assets/img/2.png', title: 'Мыр бамбас', quantity: 4, weight: 2.5, unit: 'кор', price: 2432, summary: 23482 },
                { id: 23446, img: '/src/assets/img/3.png', title: 'Кыр балбас', quantity: 5, weight: 2.6, unit: 'шт', price: 2433, summary: 23483 },
                { id: 23447, img: '/src/assets/img/4.png', title: 'Чота там', quantity: 6, weight: 2.7, unit: 'кг', price: 2434, summary: 23484 }
            ]
        },
        {
            type: 5,
            id: 16,
            orderNum: 14,
            orderDate: "07.09.2023",
            OrderCompany: "ООО Компания 8",
            OrderSummary: 51255,
            OrderStatus: "Нужна доплата",
            OrderStatusType: 3,
            ResponsibleManager: 'Некоторый менеджер',
            OrderDetails: {
                address: '', category: '', promocode: false, replace: { id: 1, title: '' }, person: '', datetime: '', comment: '', dogovor: { id: 1, number: '' }, contact:{
                    id:1,name:'',phone:'',attorneystatus:true
                }
            },
            OrderItems: [
                { id: 23444, img: '/src/assets/img/1.png', title: 'Сыр колбас', quantity: 3, weight: 2.4, unit: 'шт', price: 2431, summary: 23481 },
                { id: 23445, img: '/src/assets/img/2.png', title: 'Мыр бамбас', quantity: 4, weight: 2.5, unit: 'кор', price: 2432, summary: 23482 },
                { id: 23446, img: '/src/assets/img/3.png', title: 'Кыр балбас', quantity: 5, weight: 2.6, unit: 'шт', price: 2433, summary: 23483 },
                { id: 23447, img: '/src/assets/img/4.png', title: 'Чота там', quantity: 6, weight: 2.7, unit: 'кг', price: 2434, summary: 23484 }

            ]
        }

    ])

    const statuses = ref([
        { id: 1, name: "статус 1" },
        { id: 2, name: "статус 2" },
        { id: 3, name: "статус 3" },
        { id: 4, name: "статус 4" }
    ])

    const companies = ref([
        { id: 1, name: 'ООО Компания 1' },
        { id: 2, name: 'ООО Компания 2' },
        { id: 3, name: 'ООО Компания 3' },
        { id: 4, name: 'ООО Компания 4' },
        { id: 5, name: 'ООО Компания 5' },
        { id: 6, name: 'ООО Компания 6' },
        { id: 7, name: 'ООО Компания 7' }
    ])

    const payments = ref([
        { id: 1, name: 'Наличные' },
        { id: 2, name: 'Карта' },
        { id: 3, name: 'Реквизиты' },
        { id: 4, name: 'СБП' },
    ])

    const filters = ref([
        {
            id: 1, name: 'Фильтр 1', fields: [
                {
                    id: 1, name: 'Статус', data: [
                        { id: 1, name: 'status1' },
                        { id: 2, name: 'status2' },
                        { id: 3, name: 'status3' },
                        { id: 4, name: 'status4' },
                    ]
                },
                {
                    id: 2, name: 'Компания', data: [
                        { id: '1', name: 'some company 1' },
                        { id: '2', name: 'some company 2' },
                        { id: '3', name: 'some company 3' },
                        { id: '4', name: 'some company 4' }
                    ]
                },
                {
                    id: 3, name: 'Payment', data: [
                        { id: 1, name: 'card' },
                        { id: 1, name: 'cash' },
                        { id: 1, name: 'requisite' },
                        { id: 1, name: 'sbp' },
                    ]
                }
            ]
        }
    ])

    const SelectedOrder=ref([])
    function filterSelected(id){
        SelectedOrder.value = data.value.filter((i) => i.id === id)
        console.log(SelectedOrder.value)
    }
    return {
        data, statuses, companies, payments, globalFilter, filters,filterSelected,SelectedOrder
    }
})