import {
    ref
} from 'vue';
import {
    defineStore
} from 'pinia';

export const useCanbanStore = defineStore('canban', () => {
    
    const globalFilter = ref(0)
    
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
            OrderStatusType: 3
        }

    ])

    const statuses = ref([
        {id:1,name:"статус 1"},
        {id:2,name:"статус 2"},
        {id:3,name:"статус 3"},
        {id:4,name:"статус 4"}
    ])

    const companies = ref([
        {id:1,name:'ООО Компания 1'},
        {id:2,name:'ООО Компания 2'},
        {id:3,name:'ООО Компания 3'},
        {id:4,name:'ООО Компания 4'},
        {id:5,name:'ООО Компания 5'},
        {id:6,name:'ООО Компания 6'},
        {id:7,name:'ООО Компания 7'}
    ])

    const payments = ref([
        {id:1, name:'Наличные'},
        {id:2, name:'Карта'},
        {id:3, name:'Реквизиты'},
        {id:4, name:'СБП'},
    ])

    const filters = ref([
        {
            id:1,name:'Фильтр 1',fields:[
                {id:1,name:'Статус',data:[
                    {id:1,name:'status1'},
                    {id:2,name:'status2'},
                    {id:3,name:'status3'},
                    {id:4,name:'status4'},
                ]},
                {id:2,name:'Компания',data:[
                    {id:'1',name:'some company 1'},
                    {id:'2',name:'some company 2'},
                    {id:'3',name:'some company 3'},
                    {id:'4',name:'some company 4'}
                ]},
                {id:3,name:'Payment', data:[
                    {id:1,name:'card'},
                    {id:1,name:'cash'},
                    {id:1,name:'requisite'},
                    {id:1,name:'sbp'},
                ]}
            ]
        }
    ])
    return {
        data,statuses,companies,payments,globalFilter,filters
    }
})