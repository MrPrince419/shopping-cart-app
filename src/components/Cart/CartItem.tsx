import React from 'react';
import { useCart } from '../../hooks/useCart';
import { Minus, Plus, X } from 'lucide-react';

/**
 * Props for the CartItem component
 * @interface
 */
interface CartItemProps {
  /** Product information */
  product: {
    /** Unique identifier for the product */
    id: string;
    /** Name of the product */
    name: string;
    /** Price of the product in the store's currency */
    price: number;
    /** Description of the product */
    description: string;
    /** URL to the product's image */
    image: string;
    /** Current quantity of the product in cart */
    quantity: number;
  };
}

/**
 * CartItem component displays a single item in the shopping cart
 * with controls for quantity adjustment and removal
 * 
 * @component
 * @example
 * ```tsx
 * <CartItem
 *   product={{
 *     id: "1",
 *     name: "Product Name",
 *     price: 29.99,
 *     description: "Product Description",
 *     image: "/image.jpg",
 *     quantity: 1
 *   }}
 * />
 * ```
 */
const CartItem: React.FC<CartItemProps> = ({ product }) => {
  const { removeItem, updateQuantity } = useCart();

  const { id, name, price, image, quantity } = product;

  return (
    <div className="flex gap-4 py-4 border-b border-green-100 last:border-0">
      <div className="w-24 h-24 bg-green-50 rounded-lg overflow-hidden flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="w-20 h-20 object-contain"
        />
      </div>
      <div className="flex-1">
        <div className="flex justify-between">
          <h3 className="text-lg font-medium text-green-900">{name}</h3>
          <button
            onClick={() => removeItem(id)}
            className="text-green-600 hover:text-green-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => updateQuantity(id, quantity - 1)}
              className="p-1 rounded-md hover:bg-green-100 text-green-700 transition-colors"
              disabled={quantity <= 1}
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-8 text-center text-green-900">{quantity}</span>
            <button
              onClick={() => updateQuantity(id, quantity + 1)}
              className="p-1 rounded-md hover:bg-green-100 text-green-700 transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
          <span className="font-medium text-green-900">
            ${(price * quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
