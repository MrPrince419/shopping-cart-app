import headphonesImg from '../assets/headphones.png';
import smartwatchImg from '../assets/smartwatch.png';
import speakerImg from '../assets/speaker.png';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 99.99,
    image: headphonesImg,
    description: 'High-quality wireless headphones with noise cancellation',
  },
  {
    id: '2',
    name: 'Smart Watch',
    price: 199.99,
    image: smartwatchImg,
    description: 'Feature-rich smartwatch with health tracking',
  },
  {
    id: '3',
    name: 'Bluetooth Speaker',
    price: 79.99,
    image: speakerImg,
    description: 'Portable speaker with amazing sound quality',
  },
];
