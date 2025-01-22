import React from 'react';
import { Trash2 } from 'lucide-react';

/**
 * Interface representing a product item in the cart
 * @interface
 */
interface Product {
  /** Unique identifier for the product */
  id: string;
  /** Name of the product */
  name: string;
  /** Price of the product in the store's currency */
  price: number;
  /** URL to the product's image */
  imageUrl: string;
  /** Current quantity of the product in cart */
  quantity: number;
}

/**
 * Props for the CartItem component
 * @interface
 */
interface CartItemProps {
  /** Product information */
  product: Product;
  /** Callback function to handle quantity increase */
  onIncrease: (productId: string) => void;
  /** Callback function to handle quantity decrease */
  onDecrease: (productId: string) => void;
  /** Callback function to handle item removal */
  onRemove: (productId: string) => void;
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
 *     imageUrl: "/image.jpg",
 *     quantity: 1
 *   }}
 *   onIncrease={(id) => handleIncrease(id)}
 *   onDecrease={(id) => handleDecrease(id)}
 *   onRemove={(id) => handleRemove(id)}
 * />
 * ```
 */
const CartItem: React.FC<CartItemProps> = ({
  product,
  onIncrease,
  onDecrease,
  onRemove,
}) => {
  const { id, name, price, imageUrl, quantity } = product;

  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center space-x-4">
        <img
          src={imageUrl}
          alt={name}
          className="w-16 h-16 object-cover rounded"
        />
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-gray-600">${price.toFixed(2)}</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onDecrease(id)}
            className="p-1 rounded hover:bg-gray-100"
            aria-label="Decrease quantity"
          >
            -
          </button>
          <span className="w-8 text-center">{quantity}</span>
          <button
            onClick={() => onIncrease(id)}
            className="p-1 rounded hover:bg-gray-100"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
        
        <button
          onClick={() => onRemove(id)}
          className="p-2 text-red-500 hover:bg-red-50 rounded"
          aria-label="Remove item"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
