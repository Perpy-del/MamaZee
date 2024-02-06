export interface IOrder {
    imageUrl: string;
    productName: string;
    amount: string;
    orderDate: string;
}

export const data = [
    {
        imageUrl: '/product_ex.svg',
        productName: 'Natural Breather Hair Product',
        amount: '$400',
        orderDate: 'December 21, 2023'
    }
]