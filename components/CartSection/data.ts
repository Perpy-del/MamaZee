export const cardImageData = [
  '/credit-card/credit-card-one.svg',
  '/credit-card/credit-card-two.svg',
  '/credit-card/credit-card-three.svg',
  '/credit-card/credit-card-four.svg',
  '/credit-card/credit-card-five.svg',
];

export interface ICardProductData {
  imageUrl: string;
  name: string;
  amount: number;
}

export const cartProductData: ICardProductData[] = [
  {
    imageUrl: '/product_ex.svg',
    name: 'Natural Breather Hair Product',
    amount: 400,
  },
  {
    imageUrl: '/product_ex.svg',
    name: 'Natural Breather Hair Product',
    amount: 400,
  },
]
