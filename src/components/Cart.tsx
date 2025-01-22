import React from 'react';
import { useCart } from '../hooks/useCart';
import CartItem from './Cart/CartItem';
import { ShoppingCart } from 'lucide-react';

const Cart: React.FC = () => {
  const { items, totalAmount } = useCart();

  if (items.length === 0) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <div className="flex flex-col items-center gap-4">
          <ShoppingCart className="w-16 h-16 text-gray-400" />
          <p className="text-gray-500">Your cart is empty</p>
          <p className="text-sm text-gray-400">Start adding some items to your cart!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Shopping Cart</h2>
        <div className="space-y-6">
          {items.map((item) => (
            <CartItem key={item.id} product={item} />
          ))}
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p className="font-bold">${totalAmount.toFixed(2)}</p>
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-6">
            <button className="w-full bg-blue-600 px-6 py-3 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium">
              Proceed to Checkout
            </button>
          </div>
          <div className="mt-4 text-center text-sm text-gray-500">
            <button className="text-blue-600 font-medium hover:text-blue-500 transition-colors duration-200">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
