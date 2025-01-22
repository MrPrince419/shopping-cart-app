import React from 'react';
import { useCart } from '../hooks/useCart';
import { Plus } from 'lucide-react';
import { products } from '../data/products';

const ProductList: React.FC = () => {
  const { addItem } = useCart();

  return (
    <div className="p-6 bg-green-50 rounded-xl">
      <h2 className="text-3xl font-bold mb-8 text-green-800">Available Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="card card-hover"
          >
            <div className="aspect-w-16 aspect-h-9 bg-green-50 p-4 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-48 h-48 object-contain"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-green-900 mb-2">{product.name}</h3>
              <p className="text-green-700 mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-green-800">
                  ${product.price.toFixed(2)}
                </span>
                <button
                  onClick={() => addItem(product)}
                  className="btn-primary inline-flex items-center gap-2"
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
