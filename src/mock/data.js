const customers = [
    {
        "id": 0,
        "customerName":"Pierre Lorel",
        "state":"Centre",
        "accountNumber":"10001",
        "idCountry":237,
        "alias": "PL",
        "tmcClientNumber":"11004422",
        "abKey":"0000",
        "slug":23535,
        "isActive": true,
        "payments": [
            {
                "id":1,
                "paymentNumber":"PER-001",
                "paymentDate":"2022-10-19",
                "paymentMode": "cash",
                "amount":0.00,
                "balance":0.00,
                "usedAmount": 0.00,
                "status": "open",
            },
        ]
    }
]

const invoices = [
    {
        "id":0,
        "invoice_number": "INV-001",
        "idCustomer":0,
        "creationDate":"2023-11-19",
        "dueDate":"2023-11-20",
        "amount":10000.00,
        "status":"active",
        "balance":10000.00,
        "credit_apply":0.00,
        "travelItems":[
            {
                "id":0,
                "ticketNumber":"4006b-be",
                "travelerName":"Pierre Lorel",
                "itinerary":"Yde-Londres",
                "totalPrice": 500.00
            },
        ],
        "customer": {
            "id": 0,
            "customerName":"Pierre Lorel",
            "state":"Centre",
            "accountNumber":"10001",
            "idCountry":237,
            "alias": "PL",
            "tmcClientNumber":"11004422",
            "abKey":"0000",
            "slug":23535,
            "isActive": true,
        },
    },
]

const payments = [
    {
        "id":1,
        "paymentNumber":"PER-001",
        "paymentDate":"2022-10-19",
        "paymentMode": "cash",
        "idCustomer":0,
        "amount":50000.00,
        "balance":50000.00,
        "usedAmount": 0.00,
        "status": "open",
        "customer":{
            "Id": 0,
            "customerName":"Tagny",
            "state":"Centre",
            "accountNumber":"9932-NN",
            "idCountry":1,
            "alias": "TNG",
            "tmcClientNumber":"00293022",
            "abKey":"TO",
            "slug":23535,
            "isActive": true,
        }
    },
]

const travelItems = [
    {
        "id":0,
        "ticketNumber":"057 949222",
        "travelerName":"Noah",
        "itinerary":"Yde-Mbouda",
        "totalPrice": 5000.00
    },
    {
        "id":1,
        "ticketNumber":"057 949222",
        "travelerName":"Tagny",
        "itinerary":"Yde-Amsterdam",
        "totalPrice": 3000.00
    },
    {
        "id":2,
        "ticketNumber":"057 949222",
        "travelerName":"Lienou",
        "itinerary":"Yde-CapTown",
        "totalPrice": 100.00
    },
]

const paymentMode = ['bank transfer', 'cash', 'cheque', 'mobile money', 'pos'];

export { customers, invoices, payments, paymentMode, travelItems }