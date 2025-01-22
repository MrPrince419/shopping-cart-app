import React from 'react';
import { useCart } from '../hooks/useCart';
import { Plus, Headphones, Watch, Speaker } from 'lucide-react';

const products = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 99.99,
    description: 'High-quality wireless headphones with noise cancellation',
    Icon: Headphones,
  },
  {
    id: '2',
    name: 'Smart Watch',
    price: 199.99,
    description: 'Feature-rich smartwatch with health tracking',
    Icon: Watch,
  },
  {
    id: '3',
    name: 'Bluetooth Speaker',
    price: 79.99,
    description: 'Portable speaker with amazing sound quality',
    Icon: Speaker,
  },
];

const ProductList: React.FC = () => {
  const { addItem } = useCart();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Available Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
          >
            <div className="aspect-w-16 aspect-h-9 bg-gray-100 p-8 flex items-center justify-center">
              <product.Icon className="w-24 h-24 text-gray-600" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
                <button
                  onClick={() => addItem({ ...product, quantity: 1 })}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 gap-2"
                >
                  <Plus className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
