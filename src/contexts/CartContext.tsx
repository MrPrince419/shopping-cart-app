import React, { createContext, useReducer, useContext } from 'react';
import { Product } from '../data/products';

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalAmount: number;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } };

interface CartContextType {
  items: CartItem[];
  totalAmount: number;
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
}

const calculateTotalAmount = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        const updatedItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return {
          ...state,
          items: updatedItems,
          totalAmount: calculateTotalAmount(updatedItems),
        };
      }
      const newItem = { ...action.payload, quantity: 1 };
      const updatedItems = [...state.items, newItem];
      return {
        ...state,
        items: updatedItems,
        totalAmount: calculateTotalAmount(updatedItems),
      };
    }
    case 'REMOVE_ITEM': {
      const updatedItems = state.items.filter(item => item.id !== action.payload);
      return {
        ...state,
        items: updatedItems,
        totalAmount: calculateTotalAmount(updatedItems),
      };
    }
    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity < 1) return state;
      const updatedItems = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      return {
        ...state,
        items: updatedItems,
        totalAmount: calculateTotalAmount(updatedItems),
      };
    }
    default:
      return state;
  }
};

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
  });

  const addItem = (product: Product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        totalAmount: state.totalAmount,
        addItem,
        removeItem,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export default CartContext;
