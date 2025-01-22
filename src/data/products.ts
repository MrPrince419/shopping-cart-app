export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 99.99,
    description: 'Premium noise-cancelling wireless headphones with 30-hour battery life',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
  },
  {
    id: '2',
    name: 'Smart Watch',
    price: 199.99,
    description: 'Advanced fitness tracking, heart rate monitoring, and smartphone notifications',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80',
  },
  {
    id: '3',
    name: 'Bluetooth Speaker',
    price: 79.99,
    description: 'Waterproof portable speaker with 360° immersive sound',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80',
  },
];
