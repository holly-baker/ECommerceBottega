import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL,
    SET_CART_PRODUCTS
} from './types';

export function setPurchaseDetail(_id) {
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}
export function fetchCartProducts() {
    return ({
        type: SET_CART_PRODUCTS,
        payload: [
            {
                _id: 0,
                product: {
                    _id: 0,
                    title: 'Javascript in the Browser',
                    description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
                    price: 1.99,
                    belongsTo: [0, 1]
                },
                quantity: 2
            },
            {
                _id: 1,
                product: {
                    _id: 1,
                    title: 'Graph Database',
                    description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
                    price: 1.99,
                    belongsTo: [0, 6]
                },
                quantity: 1
            },
        ]
    })
}
export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 1,
                total: 19.40,
                orderNumber: 'A0048248343',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street' 
                }
            },
            {
                _id: 2,
                total: 694.20,
                orderNumber: 'D006966420',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Ya Boy',
                    shippingAddress: '15 Pen Way' 
                }
            },
            {
                _id: 3,
                total: 12.72,
                orderNumber: 'C1159359454',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Big Bird',
                    shippingAddress: '4444 Sesame Street' 
                }
            },
            {
                _id: 4,
                total: 1.00,
                orderNumber: 'Z0000000000',
                orderDate: new Date().toDateString(),
                creditCard: '-9999',
                user: {
                    name: 'Invader Zim',
                    shippingAddress: '000 Alien Planet Terrace' 
                }
            },
            {
                _id: 5,
                total: 420.69,
                orderNumber: 'PP042069030',
                orderDate: new Date().toDateString(),
                creditCard: '-4200',
                user: {
                    name: 'Pewdiepie Piepie',
                    shippingAddress: '420 Nice Caulk Parkway' 
                }
            },
            {
                _id: 6,
                total: 1000.12,
                orderNumber: 'A0012457839',
                orderDate: new Date().toDateString(),
                creditCard: '-2012',
                user: {
                    name: 'Tony Stank',
                    shippingAddress: '0506 Avengers City Drive' 
                }
            },
            {
                _id: 7,
                total: 18.76,
                orderNumber: 'B0078268346',
                orderDate: new Date().toDateString(),
                creditCard: '-1234',
                user: {
                    name: 'Holly Baker',
                    shippingAddress: '9876 East County Circle' 
                }
            },
            
        ]
    })
}
